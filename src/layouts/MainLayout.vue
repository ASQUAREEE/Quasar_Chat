<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$route.fullPath.includes('/chat')"
          @click="$router.go(-1)"
          dense
          icon="arrow_back"
          flat
          label="Back"
        />

        <q-toolbar-title class="absolute-center">
          {{ title }}
          <div class="email">
            {{ email }}
          </div>
        </q-toolbar-title>

        <q-btn
          v-if="!userDetails.userId"
          to="/auth"
          class="absolute-right q-pr-sm"
          no-caps
          dense
          icon="account_circle"
          flat
          label="Login"
        />
        <q-btn
          v-else-if="!$route.fullPath.includes('/chat')"
          @click="logoutUser"
          class="absolute-right q-pr-sm"
          no-caps
          dense
          icon="account_circle"
          flat
        >
          Logout<br />
          {{ userDetails.name }}
        </q-btn>

        <q-btn
          v-if="$route.fullPath.includes('/chat') && !friendTracker"
          @click="addFriends"
          class="absolute-right q-pr-sm"
          no-caps
          dense
          icon="account_circle"
          flat
          label="Add friend"
        />
        <q-btn
          v-if="$route.fullPath.includes('/chat') && friendTracker"
          class="absolute-right q-pr-sm"
          no-caps
          dense
          icon="account_circle"
          flat
          label="your friend"
        />

        <q-btn
          v-if="!$route.fullPath.includes('/chat')"
          to="/home"
          class="absolute-left q-pr-sm"
          no-caps
          dense
          icon="home"
          flat
        />
        <!-- <q-btn to="/posts" class="q-pr-sm post" no-caps dense flat>Posts</q-btn> -->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

import { mapState, mapActions, mapGetters } from "vuex";

import mixinOtherDetails from "src/mixins/mixin-other-user-details.js";

export default {
  mixins: [mixinOtherDetails],

  name: "MainLayout",

  data() {
    return {
      friendDetails: {
        currentId: "",

        friends: {
          id: "",
          name: "",
          email: "",
        },

        currentUser: {
          name: "",
          email: "",
          id: "",
        },
      },

      friendTracker: false,
    };
  },

  components: {
    // EssentialLink
  },

  computed: {
    ...mapState("store1", ["userDetails", "friendsList"]),

    title() {
      let currentPath = this.$route.fullPath;
      if (currentPath === "/") {
        return "ASQUARE CHAT";
      } else if (currentPath.includes("/chat")) {
        return this.otherUserDetails.name;
      } else if (currentPath === "/auth") {
        return "Login";
      }

      return "Default Title"; // Add a default return value
    },

    email() {
      let currentPath = this.$route.fullPath;
      if (currentPath.includes("/chat")) {
        return this.otherUserDetails.email;
      }

      return "";
    },
  },
  methods: {
    ...mapGetters("store1", ["currentUser"]),
    ...mapActions("store1", ["logoutUser", "makeFriends"]),

    addFriends() {
      this.friendDetails.currentId = this.currentUser();

      this.friendDetails.friends.id = this.$route.params.otherUserId;
      this.friendDetails.friends.name = this.otherUserDetails.name;
      this.friendDetails.friends.email = this.otherUserDetails.email;

      this.friendDetails.currentUser.name = this.userDetails.name;
      this.friendDetails.currentUser.email = this.userDetails.email;
      this.friendDetails.currentUser.id = this.userDetails.userId;

      // this.friendDetails.currentId.name = this.userDetails

      console.log(this.userDetails);

      this.makeFriends(this.friendDetails);
      console.log(this.friendDetails);
    },
  },

  created() {
    // Check if the friend list includes the current otherUserId
    const otherUserId = this.$route.params.otherUserId;
    console.log(this.friendsList);

    for (let i = 0; i < this.friendsList.length; i++) {
      if (this.friendsList[i].id == otherUserId) {
        this.friendTracker = true;
      }
    }

    // this.friendTracker = this.friendsList.friends.some(-
    //   (friend) => friend.id === otherUserId
    // );
  },

  watch: {
    $route(to, from) {
      // Check if the route includes "/chat"
      if (to.fullPath.includes("/chat")) {
        // Check if the friend list includes the current otherUserId
        const otherUserId = this.$route.params.otherUserId;
        console.log(this.friendsList);

        for (let i = 0; i < this.friendsList.friends.length; i++) {
          if (this.friendsList.friends[i].id == otherUserId) {
            this.friendTracker = true;
          }
        }
      } else {
        this.friendTracker = false;
      }
    },
  },
};
</script>

<style scoped>
.q-toolbar .q-btn {
  line-height: 1.2;
}

.post {
  margin-left: 30px;
}

.email {
  color: grey;
  font-size: 14px;
}
</style>
