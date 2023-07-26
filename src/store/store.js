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

  // otherUserId: null,
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
  // setOtherUserId(state, otherUserId) {
  //   state.otherUserId = otherUserId;
  // },

  // algoConnection(state, payload) {
  //   console.log("hahah");
  // },
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

        this.$router.push("/");
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
    });
  },

  firebaseStopGettingMessages({ commit }) {
    // console.log("stopGettingMessages");

    if (messagesRef) {
      messagesRef.off("child_added");

      commit("clearMessages");
    }
  },

  firebaseSendMessage({}, payload) {
    // console.log("payload: ", payload);
    firebaseDb
      .ref("chats/" + state.userDetails.userId + "/" + payload.otherUserId)
      .push(payload.message);

    payload.message.from = "them";
    firebaseDb
      .ref("chats/" + payload.otherUserId + "/" + state.userDetails.userId)
      .push(payload.message);
  },

  setSearch({ commit }, payload) {
    commit("setSearch", payload);
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

  currentUser: (state) => {
    let currentUser = state.userDetails.userId;
    // console.log(currentUser);
    return currentUser;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
