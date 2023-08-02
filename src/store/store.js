// import { reactive } from "vue";
import { firebaseAuth, firebaseDb } from "src/boot/firebase";

let messagesRef;

const state = {
  //store

  userDetails: {},

  users: {},

  messages: {},

  search: "",

  idConnections: [],
  connectionsQueue: [],

  friendsList: [],
  groupsList: [],

  unreadMessages: {},

  // otherUserId: null,

  groups: {}, // Object containing groups
  groupMessages: {}, // Object containing group messages
};

const mutations = {
  //instant change

  setUserDetails(state, payload) {
    state.userDetails = payload;
  },

  addUser(state, payload) {
    if (payload.userId != undefined) {
      state.users[payload.userId] = payload.userDetails;
    }

    // Make the users object reactive
    // state.users = reactive({
    //   ...state.users,
    //   [payload.userId]: payload.userDetails,
    // });
  },

  updateUser(state, payload) {
    Object.assign(state.users[payload.userId], payload.userDetails);
  },

  addMessage(state, payload) {
    state.messages[payload.messageId] = payload.messageDetails;
  },

  clearMessages(state) {
    state.messages = {};
  },

  setSearch(state, payload) {
    state.search = payload;
  },

  algoConnections(state, payload) {
    console.log("algoConnections");
    state.idConnections = payload; // Append the array to the idConnections
    console.log("idConnections:", state.idConnections);
  },

  enqueueConnection(state, payload) {
    state.connectionsQueue = payload;
    console.log("enqueeeeee", payload);
    console.log("enqueueConnection", state.connectionsQueue);
  },

  dequeueConnection(state) {
    state.connectionsQueue.shift();
    console.log("dequee connection");
  },

  friendList(state, payload) {
    state.friendsList = payload;
    console.log("friend list");
    console.log(payload);
  },
  groupList(state, payload) {
    state.groupsList = payload;

    console.log(state.groupsList);
  },

  setUnreadMessages(state, payload) {
    state.unreadMessages = payload;
  },
  incrementUnreadMessages(state, userId) {
    if (state.unreadMessages[userId]) {
      state.unreadMessages[userId]++;
    } else {
      state.unreadMessages[userId] = 1;
    }
  },
  clearUnreadMessages(state, payload) {
    // state.unreadMessages[userId] = 0;

    state.friendsList.friends[payload.otherUserId].unreadMessage = 0;

    // state.friendsList[payload.otherUserId][payload.userId].unreadMessages
  },

  MessageCounter(state, payload) {
    // state.friendsList.friends.payload.otherUserId.unreadMessage =
    //   payload.messageCounter;
    let helper = payload.updateCounter.otherUserId;

    state.friendsList.friends[helper].unreadMessage =
      payload.updateCounter.messageCounter;
  },

  GroupMessageCounter(state, payload) {
    state.groupsList.groups[payload.updateCounter.groupId].unreadMessage =
      payload.updateCounter.messageCounter;
  },

  addGroup(state, group) {
    state.groups[group.groupId] = group;
  },

  getGroups(state, payload) {
    console.log(payload);

    state.groups = payload;
  },

  addGroupMessage(state, payload) {
    console.log(payload.messageDetails);

    state.groupMessages[payload.messageId] = payload.messageDetails;
  },
};

const actions = {
  registerUser({}, payload) {
    // console.log("payload:", payload);

    firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((response) => {
        // console.log("response:", response);

        let userId = firebaseAuth.currentUser.uid;
        if (
          userId != undefined &&
          userId != null &&
          payload.name != undefined &&
          payload.name != null
        ) {
          firebaseDb.ref("users/" + userId).set({
            name: payload.name,
            email: payload.email,
            online: true,
          });
        }
      })

      .catch((error) => {
        console.log("error:", error.message);
      });
  },

  makeConnections({ commit }, payload) {
    console.log("makeeee", payload);
    let connectionsArray;
    // let connectionsQueue;
    let connectionStrategy = [];
    // Fetch the current array of connections from the database.
    firebaseDb
      .ref("makeConnection/")
      .once("value")
      .then((snapshot) => {
        // If the 'makeConnection' node doesn't exist yet, initialize it as an empty array.
        connectionsArray = snapshot.val() || [];

        // if (connectionsArray.length > 3) {
        //   const newConnectionsArray = connectionsArray.slice(2);
        //   firebaseDb.ref("makeConnection/").set(newConnectionsArray);
        // }

        let isPayloadAlreadyExists = false;
        for (let i = 0; i < connectionsArray.length; i++) {
          if (connectionsArray[i] === payload) {
            isPayloadAlreadyExists = true;
            break;
          }
        }

        console.log("checking", connectionsArray);
        // Append the payload data to the array.

        if (!isPayloadAlreadyExists) {
          // Append the payload data to the array.
          connectionsArray.push(payload);

          console.log("added", connectionsArray);
          // commit("enqueueConnection", payload);

          connectionStrategy[0] = connectionsArray[0];
          if (connectionsArray.length > 1) {
            connectionStrategy.push(connectionsArray[1]);
          }

          if (connectionStrategy.length == 2) {
            firebaseDb.ref("connectionQueue/").set(connectionStrategy);
            commit("enqueueConnection", connectionStrategy);
          }
          // dispatch("algoConnection", {
          //   connectionsArray: connectionsArray,
          // });
          // Update the 'makeConnection' node with the new array.
          return firebaseDb.ref("makeConnection/").set(connectionsArray);
        } else {
          console.log(
            "Payload already exists in the array, skipping addition."
          );
          return null;
        }
      })
      .then(() => {
        // this.$store.dispatch("algoConnection");
        console.log(connectionsArray);

        commit("algoConnections", connectionsArray);

        console.log("Data appended successfully!");
      })
      .catch((error) => {
        console.error("Error appending data:", error);
      });
  },

  letsConnectQueue({ commit, dispatch, state }, payload) {
    let connectionsArray;

    let currentUser = state.userDetails.userId;
    let connectionChecker = [];
    // let connectionCheckei = false;

    console.log(currentUser);
    // console.log(state.connectionsQueue);
    firebaseDb
      .ref("connectionQueue/")
      .once("value")
      .then((snapshot) => {
        // If the 'makeConnection' node doesn't exist yet, initialize it as an empty array.
        connectionsArray = snapshot.val() || [];
        console.log(connectionsArray);

        const firstUserInQueue = connectionsArray[0];
        const secondUserInQueue = connectionsArray[1];

        if (currentUser === firstUserInQueue) {
          const newConnectionsArray = connectionsArray.slice(2);
          firebaseDb.ref("makeConnection/").set(newConnectionsArray);

          firebaseDb
            .ref("connectionChecker/")
            .once("value")
            .then((snapshot1) => {
              // If the 'makeConnection' node doesn't exist yet, initialize it as an empty array.
              connectionChecker = snapshot1.val() || [];

              connectionChecker.push("1");

              firebaseDb.ref("connectionChecker/").set(connectionChecker);
            });

          // If the current user matches the first user in the queue, navigate to the chat route with the other user
          this.$router.push(`/chat/${secondUserInQueue}`);
        }
        if (currentUser === secondUserInQueue) {
          // If the current user matches the first user in the queue, navigate to the chat route with the other user
          this.$router.push(`/chat/${firstUserInQueue}`);

          firebaseDb
            .ref("connectionChecker/")
            .once("value")
            .then((snapshot1) => {
              // If the 'makeConnection' node doesn't exist yet, initialize it as an empty array.
              connectionChecker = snapshot1.val() || [];

              connectionChecker.push("2");

              firebaseDb.ref("connectionChecker/").set(connectionChecker);
            });
        }

        connectionChecker = false;
      });

    firebaseDb
      .ref("connectionChecker/")
      .once("value")
      .then((snapshot1) => {
        // If the 'makeConnection' node doesn't exist yet, initialize it as an empty array.
        connectionChecker = snapshot1.val() || [];

        console.log(connectionChecker.length);

        if (connectionChecker.length > 0) {
          // connectionChecker == [];

          firebaseDb.ref("connectionChecker/").remove();
          firebaseDb.ref("connectionQueue/").remove();
        }
      });
  },

  loginUser({}, payload) {
    firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((response) => {
        console.log("response:", response);
      })

      .catch((error) => {
        console.log("error:", error.message);
      });
  },

  logoutUser() {
    firebaseAuth.signOut();
    // console.log("logout");
  },

  handleAuthStateChange({ commit, dispatch, state }) {
    //we use dispatch for one action under another action
    //to trigger mutation we use commit
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        // User is logged in.
        let userId = firebaseAuth.currentUser.uid;
        firebaseDb.ref("users/" + userId).once("value", (snapshot) => {
          let userDetails = snapshot.val();

          // console.log("userDetails", userDetails);

          commit("setUserDetails", {
            name: userDetails.name,
            email: userDetails.email,
            userId: userId,
          });
        });

        dispatch("firebaseUpdateUser", {
          userId: userId,
          updates: {
            online: true,
          },
        });

        dispatch("firebaseGetUser", {});

        this.$router.push("/user");
      } else {
        //user is logged out

        dispatch("firebaseUpdateUser", {
          userId: state.userDetails.userId,
          updates: {
            online: false,
          },
        });

        commit("setUserDetails", {});

        this.$router.push("/auth");
      }
    });
  },

  firebaseUpdateUser({}, payload) {
    // console.log("Payload: ", payload);

    if (payload.userId != undefined) {
      firebaseDb.ref("users/" + payload.userId).update(payload.updates);
    }
  },

  firebaseGetUser({ commit }) {
    firebaseDb.ref("users").on("child_added", (snapshot) => {
      // console.log("Snapshot: ", snapshot);

      let userDetails = snapshot.val();

      let userId = snapshot.key;
      // console.log(userId);

      // console.log("User details: ", userDetails);

      if (userId && userDetails) {
        commit("addUser", {
          userId,
          userDetails,
        });
      } else {
        // Delete the user if either userId or userDetails is undefined
        firebaseDb.ref("users/" + userId).remove();
      }
    });

    firebaseDb.ref("users").on("child_changed", (snapshot) => {
      // console.log("Snapshot: ", snapshot);

      let userDetails = snapshot.val();

      let userId = snapshot.key;
      // console.log(userId);

      // console.log("User details: ", userDetails);

      if (userId && userDetails) {
        commit("updateUser", {
          userId,
          userDetails,
        });
      } else {
        // Delete the user if either userId or userDetails is undefined
        firebaseDb.ref("users/" + userId).remove();
      }
    });
  },

  firebaseGetMessages({ commit, state }, otherUserId) {
    // console.log("otherUserId", otherUserId);

    let userId = state.userDetails.userId;

    messagesRef = firebaseDb.ref("chats/" + userId + "/" + otherUserId);

    messagesRef.on("child_added", (snapshot) => {
      let messageDetails = snapshot.val();
      let messageId = snapshot.key;

      commit("addMessage", {
        messageId,
        messageDetails,
      });

      // Increment unread messages for the recipient user
      // if (state.userDetails.userId === payload.otherUserId) {
      //   commit("incrementUnreadMessages", otherUserId);
      // }
    });
  },

  clearUnreadMessages({ commit }, otherUserId) {
    let userId = state.userDetails.userId;

    let payload = {
      userId: userId,

      otherUserId: otherUserId,
    };
    // let friendChecker = false;
    // friendChecker = state.friendsList.friends.hasOwnProperty(otherUserId);

    if (
      state.friendsList &&
      state.friendsList.friends &&
      state.friendsList.friends.hasOwnProperty(otherUserId)
    ) {
      firebaseDb.ref("Friends/" + userId + "/" + otherUserId).update({
        unreadMessage: 0,
      });

      commit("clearUnreadMessages", payload);
    }
  },

  firebaseStopGettingMessages({ commit }) {
    // console.log("stopGettingMessages");

    if (messagesRef) {
      messagesRef.off("child_added");

      commit("clearMessages");
    }
  },

  firebaseSendMessage({ commit }, payload) {
    // console.log("payload: ", payload);
    firebaseDb
      .ref("chats/" + state.userDetails.userId + "/" + payload.otherUserId)
      .push(payload.message);

    payload.message.from = "them";
    firebaseDb
      .ref("chats/" + payload.otherUserId + "/" + state.userDetails.userId)
      .push(payload.message);

    let userId = state.userDetails.userId;
    let otherUserId = payload.otherUserId;

    // Check if the current route includes the chat/otherUserId path segment
    const currentRoute = window.location.pathname;
    const chatPath = "/chat/" + otherUserId;
    const isChatRoute = currentRoute.includes(chatPath);
    let messageCounter;

    let updateCounter = {};
    let friendChecker = false;
    friendChecker = state.friendsList.friends.hasOwnProperty(otherUserId);

    console.log(friendChecker);

    if (!isChatRoute && friendChecker) {
      firebaseDb
        .ref("Friends/" + otherUserId + "/" + userId)
        .once("value")
        .then((snapshot1) => {
          // If the 'makeConnection' node doesn't exist yet, initialize it as an empty array.
          messageCounter = snapshot1.val() || [];

          console.log(messageCounter);
          messageCounter.unreadMessage = messageCounter.unreadMessage + 1;

          firebaseDb.ref("Friends/" + otherUserId + "/" + userId).update({
            unreadMessage: messageCounter.unreadMessage,
          });

          updateCounter.otherUserId = otherUserId;
          updateCounter.messageCounter = messageCounter.unreadMessage;

          commit("MessageCounter", {
            updateCounter,
          });
        });
    }
  },

  setSearch({ commit }, payload) {
    commit("setSearch", payload);
  },

  makeFriends({}, payload) {
    console.log(payload);

    if (state.userDetails && state.userDetails.userId && payload.friends.id) {
      firebaseDb
        .ref("Friends/" + payload.currentId + "/" + payload.friends.id)
        .set(payload.friends);
      firebaseDb
        .ref("Friends/" + payload.friends.id + "/" + payload.currentId)
        .set(payload.currentUser);
    }
    // });
  },

  removeFriends({ state }, payload) {
    if (state.userDetails && state.userDetails.userId && payload.friends.id) {
      let currentId = state.userDetails.userId;
      // let friendId = this.$route.params.otherUserId;
      let friendId = payload.friends.id;

      console.log(friendId);
      console.log(payload);

      // Use the `update` method to remove the friend from the Friends list.
      // This will set the value of the friend's entry to `null`, effectively removing it.
      firebaseDb.ref("Friends/" + currentId).update({
        [friendId]: null,
      });

      // Optionally, you can also remove the friend from the other user's Friends list:
      // firebaseDb.ref("Friends/" + friendId).update({
      //   [currentId]: null,
      // });
    }
  },
  makeGroups({}, payload) {
    if (state.userDetails && state.userDetails.userId && payload.groups.id) {
      firebaseDb
        .ref("userGroups/" + payload.currentId + "/" + payload.groups.id)
        .set(payload.groups); // Now, we set the entire 'groups' array as the value in the database.
      // });
    }
  },

  removeGroups({}, payload) {
    if (state.userDetails && state.userDetails.userId && payload.groups.id) {
      firebaseDb
        .ref("userGroups/" + payload.currentId)
        .update({ [payload.groups.id]: null });
    }
  },
  FriendsList({ commit }, payload) {
    let friends = [];
    console.log("payload", payload);
    firebaseDb
      .ref("Friends/" + payload)
      .once("value")
      .then((snapshot1) => {
        // If the 'makeConnection' node doesn't exist yet, initialize it as an empty array.

        friends = snapshot1.val() || [];

        console.log(friends);

        commit("friendList", {
          friends,
        });
      });
  },
  GroupsList({ commit }, payload) {
    let groups = [];
    console.log("payload", payload);
    firebaseDb
      .ref("userGroups/" + payload)
      .once("value")
      .then((snapshot1) => {
        // If the 'makeConnection' node doesn't exist yet, initialize it as an empty array.

        groups = snapshot1.val() || [];

        console.log(groups);

        commit("groupList", {
          groups,
        });
      });
  },

  createGroups({ commit }, { groupName, creatorId }) {
    // Implement Firebase API call to create a new group and commit to state
    // For simplicity, we assume the group is immediately created and returned

    const newGroup = {
      groupId: "g" + creatorId + "r" + Math.random().toString(36).substr(2, 5), // Random groupId for simplicity
      name: groupName,
      creatorId: creatorId,
      members: [creatorId],
    };

    console.log(newGroup.groupId);

    if (
      newGroup.name != undefined &&
      newGroup.name != null &&
      newGroup.creatorId != undefined &&
      newGroup.creatorId != null
    ) {
      firebaseDb.ref("Groups/" + newGroup.groupId).set(newGroup);
      commit("addGroup", newGroup);
    }

    return newGroup;
  },

  joinGroup({ commit, state }, { groupId, memberId }) {
    // Implement Firebase API call to join a group and update state
    // For simplicity, we assume the member is immediately added to the group and returned
    const group = state.groups[groupId];
    if (group) {
      group.members.push(memberId);
      commit("addGroup", group);
      return group;
    }
    return null; // Group not found
  },

  groupSendMessage({ commit }, { message, groupId }) {
    console.log(message);
    console.log(groupId);

    firebaseDb.ref("groupChats/" + groupId).push(message);

    const currentRoute = window.location.pathname;
    const groupPath = "/group/" + groupId;
    const isgroupRoute = currentRoute.includes(groupPath);

    let messageCounter;
    let updateCounter = {};
    let groupChecker = false;
    groupChecker = state.groupsList.groups.hasOwnProperty(groupId);

    console.log(groupChecker);

    if (!isgroupRoute && groupChecker) {
      firebaseDb
        .ref("userGroups/" + state.userDetails.userId + "/" + groupId)
        .once("value")
        .then((snapshot1) => {
          // If the 'makeConnection' node doesn't exist yet, initialize it as an empty array.
          messageCounter = snapshot1.val() || [];

          console.log(messageCounter);
          messageCounter.unreadMessage = messageCounter.unreadMessage + 1;

          firebaseDb
            .ref("userGroups/" + state.userDetails.userId + "/" + groupId)
            .update({
              unreadMessage: messageCounter.unreadMessage,
            });

          updateCounter.groupId = groupId;
          updateCounter.messageCounter = messageCounter.unreadMessage;

          commit("GroupMessageCounter", {
            updateCounter,
          });
        });
    }
    // Implement Firebase API call to send a group message and commit to state
  },

  groupGetMessages({ commit }, groupId) {
    messagesRef = firebaseDb.ref("groupChats/" + groupId);

    messagesRef.on("child_added", (snapshot1) => {
      let messageDetails = snapshot1.val();
      let messageId = snapshot1.key;
      console.log(messageDetails);

      commit("addGroupMessage", {
        messageDetails,
        messageId,
      });
    });
  },
  // fetchGroups({ commit }) {
  //   firebaseDb
  //     .ref("groups/" + payload.groupId)
  //     .once("value")
  //     .then((snapshot1) => {
  //       // If the 'makeConnection' node doesn't exist yet, initialize it as an empty array.
  //       groups = snapshot1.val() || [];

  //       console.log(groups);
  //     });
  //   // Implement Firebase API call to fetch groups and commit to state
  //   // For simplicity, we assume you have an array of groups
  //   const groups = [
  //     { groupId: "group1", name: "Group 1" },
  //     { groupId: "group2", name: "Group 2" },
  //     // Add more groups as needed
  //   ];
  //   commit("setGroups", groups);
  // },

  fetchGroupMessages({ commit }, groupId) {
    // Implement Firebase API call to fetch group messages and commit to state
  },

  fetchGroup({ commit }, payload) {
    console.log(payload);
    let groups;

    firebaseDb
      .ref("Groups/")
      .once("value")
      .then((snapshot1) => {
        // If the 'makeConnection' node doesn't exist yet, initialize it as an empty array.
        groups = snapshot1.val() || [];

        console.log(groups);

        commit("getGroups", groups);
      });
    // return payload;
  },
};

const getters = {
  //make data available in vue comp

  // users: (state) => {
  //   // console.log("hhaha");

  //   let usersFiltered = {};
  //   Object.keys(state.users).forEach((key) => {
  //     if (key !== state.userDetails.userId) {
  //       usersFiltered[key] = state.users[key];
  //     }
  //   });

  //   // console.log(state.users);

  //   return usersFiltered;
  // },

  taskFiltered: (state) => {
    let taskFiltered = {};

    if (state.search) {
      //populate the empty object
      Object.keys(state.users).forEach((key) => {
        let task = state.users[key];

        let taskNameLowerCase = task.name.toLowerCase();
        let taskEmailLowerCase = task.email.toLowerCase();

        let searchLowerCase = state.search.toLowerCase();

        if (
          taskNameLowerCase.includes(searchLowerCase) ||
          taskEmailLowerCase.includes(searchLowerCase)
        ) {
          taskFiltered[key] = task;
        }
      });
      return taskFiltered;
    }

    return state.users;
  },
  taskFilteredgroup: (state) => {
    let taskFiltered = {};

    if (state.search) {
      //populate the empty object
      Object.keys(state.groups).forEach((key) => {
        let task = state.groups[key];

        let taskNameLowerCase = task.name.toLowerCase();
        // let taskEmailLowerCase = task.email.toLowerCase();

        let searchLowerCase = state.search.toLowerCase();

        if (taskNameLowerCase.includes(searchLowerCase)) {
          taskFiltered[key] = task;
        }
      });
      return taskFiltered;
    }

    return state.groups;
  },

  users: (state, getters) => {
    let taskFiltered = getters.taskFiltered;
    // console.log("hhaha");

    let usersFiltered = {};
    Object.keys(taskFiltered).forEach((key) => {
      if (key !== state.userDetails.userId) {
        usersFiltered[key] = taskFiltered[key];
      }
    });

    // console.log(state.users);

    return usersFiltered;
  },
  groupsN: (state, getters) => {
    let taskFiltered = getters.taskFilteredgroup;
    // console.log("hhaha");

    let groupsFiltered = {};
    Object.keys(taskFiltered).forEach((key) => {
      groupsFiltered[key] = taskFiltered[key];
    });

    // console.log(state.users);

    return groupsFiltered;
  },

  currentUser: (state) => {
    let currentUser = state.userDetails.userId;
    // console.log(currentUser);
    return currentUser;
  },

  usersFriends: (state) => {
    let usersFriends = state.friendsList.friends;
    console.log(usersFriends);
    return usersFriends;
  },

  totalGroups: (state) => {
    let totalGroups = state.groupsList.groups;

    return totalGroups;
  },

  unreadMessages: (state) => {
    return state.unreadMessages;
  },
  groupById: (state) => (groupId) => {
    return state.groups[groupId] || null;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
