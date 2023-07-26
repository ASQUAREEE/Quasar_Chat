<template>
  <q-page class="flex q-pa-md">
    <q-list class="full-width" separator>
      <div class="row q-mb-lg">
        <search />
      </div>

      <p v-if="search && !Object.keys(users).length">No search results</p>

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
    ...mapGetters("store1", ["users"]),
    ...mapState("store1", ["search", "idConnections", "connectionsQueue"]),
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
    ]),

    makeConnection() {
      let currentUser = this.currentUser();
      console.log("Current User: " + currentUser);
      this.makeConnections(currentUser);
      // console.log(this.idConnections);

      this.tracker = true;
      // this.transferConnection();
    },
  },

  created() {
    this.checkConnectionsInterval = setInterval(() => {
      if (this.tracker === true) {
        this.letsConnectQueue();
        // this.makeConnections(this.currentUser());
      }
    }, 100); // Run the checkConnections method every 1 second (adjust the interval as needed)
  },

  beforeUnmount() {
    clearInterval(this.checkConnectionsInterval); // Clear the interval when the component is destroyed to avoid memory leaks
  },

  watch: {
    // idConnections: {
    //   handler(newConnections, oldConnections) {
    //     if (newConnections.length > 0 && this.tracker === true) {
    //       this.transferConnection();
    //     }
    //   },
    //   immediate: true, // Trigger the handler immediately on component mount
    // },

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
