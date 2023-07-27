<template>
  <q-page class="flex q-pa-md">
    <q-list class="full-width" separator>
      <div class="row q-mb-lg">
        <search />
      </div>

      <p v-if="search && !Object.keys(users).length">No search results</p>
      <div v-if="search">
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
        <q-btn class="makeNew" @click="makeConnection">Make New Friends</q-btn>
      </q-item-section>
    </q-list>
  </q-page>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import search from "./search.vue";

export default {
  data() {
    return {
      otherUserid: "",
      infoActive: {
        currentActive: "",
        totalActive: "",
      },

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
    ]),
  },

  components: {
    search,
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

  // mounted() {
  //   this.friendConnection();
  // },

  created() {
    // this.friendConnection();
    this.checkConnectionsInterval = setInterval(() => {
      if (this.tracker === true) {
        this.letsConnectQueue();
      }
    }, 100); // Run the checkConnections method every 1 second (adjust the interval as needed)
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
.email {
  color: grey;
  font-size: 12px;
}

.makeNew {
  background: rgb(137, 67, 195);
  margin-top: 50px;
}
</style>
