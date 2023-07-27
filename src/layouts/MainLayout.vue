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
          v-if="$route.fullPath.includes('/chat')"
          @click="addFriends"
          class="absolute-right q-pr-sm"
          no-caps
          dense
          icon="account_circle"
          flat
          label="Add friend"
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
          friendId: "",
          friendName: "",
          email: "",
        },
      },
    };
  },

  components: {
    // EssentialLink
  },

  computed: {
    ...mapState("store1", ["userDetails"]),

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

      this.friendDetails.friends.friendId = this.$route.params.otherUserId;
      this.friendDetails.friends.friendName = this.otherUserDetails.name;
      this.friendDetails.friends.email = this.otherUserDetails.email;

      this.makeFriends(this.friendDetails);
      console.log(this.friendDetails);
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
