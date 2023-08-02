<template>
  <q-tabs
    v-model="tab"
    dense
    class="text-grey"
    active-color="primary"
    indicator-color="primary"
    align="justify"
    narrow-indicator
  >
    <q-tab name="individual" label="Individual Chat" />
    <q-tab name="group" label="Group Chat" />
  </q-tabs>

  <q-separator />

  <q-tab-panels v-model="tab" animated>
    <q-tab-panel class="page flex column" name="individual">
      <q-page class="flex column q-pa-md" :tab="tab" v-if="!tracker">
        <q-list class="full-width" separator>
          <div class="row q-mb-lg">
            <search />
          </div>

          <p v-if="search && !Object.keys(users).length">No search results</p>
          <div v-if="search && search.length >= 3">
            <q-item
              v-for="(user, key) in users"
              :key="key"
              :to="'/chat/' + key"
              clickable
              v-ripple
            >
              <q-item-section avatar>
                <q-avatar color="primary" text-color="white">
                  {{ user.name.charAt(0) }}
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ user.name }}</q-item-label>
                <q-item-label class="email">{{ user.email }}</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-badge :color="user.online ? 'light-green-5' : 'grey-4'">
                  {{ user.online ? "Online" : "Offline" }}
                </q-badge>
              </q-item-section>
            </q-item>
          </div>

          <div v-if="search && search.length < 3">
            <p>
              Type atleast first three words of your friend's username or email
            </p>
          </div>

          <div v-if="!search">
            <q-item
              v-for="(user, key) in usersFriends"
              :key="key"
              :to="'/chat/' + user.id"
              clickable
              v-ripple
            >
              <q-item-section avatar>
                <q-avatar color="primary" text-color="white">
                  {{ user.name.charAt(0) }}
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ user.name }}</q-item-label>
                <q-item-label class="email">{{ user.email }}</q-item-label>
              </q-item-section>

              <q-btn
                v-if="user.unreadMessage > 0"
                dense
                color="purple"
                round
                icon="email"
                class="q-ml-md"
              >
                <q-badge color="red" floating>{{ user.unreadMessage }}</q-badge>
              </q-btn>

              <q-item-section side>
                <q-badge
                  :color="isFriendOnline(user.id) ? 'light-green-5' : 'grey-4'"
                >
                  {{ isFriendOnline(user.id) ? "Online" : "Offline" }}
                </q-badge>
              </q-item-section>
            </q-item>
          </div>

          <q-item-section>
            <q-btn class="makeNew" @click="makeConnection"
              >Make New Friends</q-btn
            >
          </q-item-section>
        </q-list>
      </q-page>

      <q-page v-if="tracker" class="body-loading">
        <div class="loader">
          <div class="inner one"></div>
          <div class="inner two"></div>
          <div class="inner three"></div>
        </div>
      </q-page>
    </q-tab-panel>

    <q-tab-panel class="page flex column" name="group">
      <q-page class="flex column q-pa-md" :tab="tab">
        <groupPage />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <div class="floating-container">
          <router-link to="/creategroup/">
            <div to="creategroup" class="floating-button">+</div>
          </router-link>
        </div>
      </q-page>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import search from "./search.vue";
import groupPage from "./groupPage.vue";

export default {
  data() {
    return {
      otherUserid: "",
      infoActive: {
        currentActive: "",
        totalActive: "",
      },
      tab: "individual",

      tracker: false,
    };
  },

  computed: {
    ...mapGetters("store1", ["users", "usersFriends"]),
    ...mapState("store1", [
      "search",
      "idConnections",
      "connectionsQueue",
      "userDetails",
      "friendsList",
      "unreadMessages",
    ]),
  },

  components: {
    search,
    groupPage,
  },

  methods: {
    ...mapGetters("store1", ["currentUser"]),
    ...mapActions("store1", [
      "makeConnections",
      "letsConnect",
      "letsConnectQueue",
      "FriendsList",
    ]),

    isFriendOnline(id) {
      // Check if the id is included in the list of users
      return Object.keys(this.users).includes(id) && this.users[id].online;
    },

    makeConnection() {
      let currentUser = this.currentUser();
      console.log("Current User: " + currentUser);
      this.makeConnections(currentUser);
      // console.log(this.idConnections);

      this.tracker = true;
      // this.transferConnection();
    },

    Listoffriends() {
      console.log(this.friendsList.friends);
    },

    // friendConnection() {
    //   let currentUser = this.currentUser();
    //   console.log(currentUser);
    //   this.FriendsList(currentUser);
    // },
  },

  created() {
    // this.friendConnection();
    this.checkConnectionsInterval = setInterval(() => {
      if (this.tracker === true) {
        this.letsConnectQueue();
      }
    }, 100); // Run the checkConnections method every 1 second (adjust the interval as needed)

    // this.$store.dispatch("clearUnreadMessages", this.$route.params.userId);

    // this.clearUnreadMessages(this.$route.params.userId);
  },

  beforeUnmount() {
    clearInterval(this.checkConnectionsInterval); // Clear the interval when the component is destroyed to avoid memory leaks
  },

  watch: {
    userDetails: {
      handler(userDetail) {
        console.log(userDetail);
        console.log("kuch kuch ", userDetail.userId);
        this.FriendsList(userDetail.userId);
      },
      immediate: true, // Trigger the handler immediately on component mount
    },
    friendsList: {
      handler(friendsList) {
        console.log(friendsList);
        console.log("kuch kuch ", friendsList);
        this.Listoffriends();
      },
      immediate: true, // Trigger the handler immediately on component mount
    },

    // New watcher to handle navigating to a specific route
    connectionsQueue: {
      handler(newQueue) {
        console.log("triggered watcher");

        // this.letsConnectQueue();

        // if (newQueue.length >0) {
        // const currentUser = this.currentUser();
        // const firstUserInQueue = newQueue[0];
        // const secondUserInQueue = newQueue[1];
        // if (currentUser === firstUserInQueue) {
        //   // If the current user matches the first user in the queue, navigate to the chat route with the other user
        //   this.$router.push(`/chat/${secondUserInQueue}`);
        // }
        // if (currentUser === secondUserInQueue) {
        //   // If the current user matches the first user in the queue, navigate to the chat route with the other user
        //   this.$router.push(`/chat/${firstUserInQueue}`);
        // }
        // }
      },
      immediate: true, // Trigger the handler immediately on component mount
    },
  },
};
</script>

<style>
/* Overall page styling */
html,
body {
  background: #313a45;
  font-family: "Roboto", sans-serif;
  color: #b0bec5;
}

.page {
  background: #313a45;
  color: #b0bec5;
  background-image: linear-gradient(
      90deg,
      rgba(55, 71, 79, 0.4) 0%,
      rgba(55, 71, 79, 0.8) 100%
    ),
    url("https://images.unsplash.com/photo-1690692791471-5c393267aa9f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDk3MDQ5Mg&ixlib=rb-4.0.3&q=80&w=1920");
  /* url("https://source.unsplash.com/random/1920x1080"); */
  background-blend-mode: overlay;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

/* Tab styling */
.q-tabs__content {
  background-color: #3c4b57;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.q-tab.active {
  color: #ffffff;
  background-color: #2cb3f0;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.q-tab-indicator {
  background-color: #2cb3f0;
  height: 3px;
  border-radius: 10px;
}

/* Badge styling */
.q-badge.light-green-5 {
  background-color: #8bc34a;
}

/* List item styling */
.q-list .q-item {
  border-bottom: 1px solid #546e7a;
}

.q-list .q-item:last-child {
  border-bottom: none;
}

.q-list .q-item:hover {
  background-color: rgba(44, 179, 240, 0.2);
  transition: background-color 0.3s;
}

.q-item-section.avatar {
  position: relative;
}

.q-avatar {
  border: 2px solid #2cb3f0;
  background-color: #2cb3f0;
  font-size: 24px;
  border-radius: 50%;
  position: relative;
  z-index: 1;
}

.q-item-section.avatar .q-avatar:before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 50%;
  background-color: rgba(44, 179, 240, 0.4);
  z-index: -1;
}

.q-list .q-item-section {
  padding: 16px;
  border-right: 1px solid #546e7a;
}

.q-list .q-item-section:last-child {
  border-right: none;
}

.q-item-label {
  font-size: 16px;
  font-weight: 500;
}

.q-item-section.email {
  font-size: 12px;
  color: #78909c;
}

.q-item-section.side {
  margin-left: auto;
  display: flex;
  align-items: center;
}

/* Make New Friends button */
.makeNew {
  background: #137cb2;
  margin-top: 50px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s;
}

.makeNew:hover {
  background: #0d5c85;
}

/* Floating button */
.floating-container {
  position: fixed;
  width: 100px;
  height: 100px;
  bottom: 0;
  right: 0;
  margin: 35px 25px;
}

.floating-container:hover {
  height: 300px;
}

.floating-container:hover .floating-button {
  box-shadow: 0 10px 25px rgba(44, 179, 240, 0.6);
  transform: translateY(5px);
  transition: all 0.3s;
}

.floating-container .floating-button {
  position: absolute;
  width: 65px;
  height: 65px;
  background: #2cb3f0;
  bottom: 0;
  border-radius: 50%;
  left: 0;
  right: 0;
  margin: auto;
  color: white;
  line-height: 65px;
  text-align: center;
  font-size: 23px;
  z-index: 100;
  box-shadow: 0 10px 25px -5px rgba(44, 179, 240, 0.6);
  cursor: pointer;
  transition: all 0.3s;
}

/* Loading Animation */
.body-loading {
  background-image: radial-gradient(
    circle farthest-corner at center,
    #3c4b57 0%,
    #1c262b 100%
  );
}

.loader {
  position: absolute;
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  perspective: 800px;
}

.inner {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.inner.one {
  left: 0%;
  top: 0%;
  animation: rotate-one 1s linear infinite;
  border-bottom: 3px solid #efeffa;
}

.inner.two {
  right: 0%;
  top: 0%;
  animation: rotate-two 1s linear infinite;
  border-right: 3px solid #efeffa;
}

.inner.three {
  right: 0%;
  bottom: 0%;
  animation: rotate-three 1s linear infinite;
  border-top: 3px solid #efeffa;
}

@keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>
