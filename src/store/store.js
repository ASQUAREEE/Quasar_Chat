// import { reactive } from "vue";
import { firebaseAuth, firebaseDb } from "src/boot/firebase";

let messagesRef;

const state = {
  //store

  userDetails: {},

  users: {},

  messages: {},

  search: "",
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
    console.log("logout");
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
    console.log("Payload: ", payload);

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

        console.log(taskNameLowerCase);

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
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
