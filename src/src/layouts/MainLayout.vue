<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="
            $route.fullPath.includes('/chat') ||
            $route.fullPath.includes('/group')
          "
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
          v-else-if="
            !$route.fullPath.includes('/chat') &&
            !$route.fullPath.includes('/group')
          "
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
          :label="
            friendshipStatus == true ? 'You both are now friends' : 'Add friend'
          "
        />
        <q-btn
          v-if="$route.fullPath.includes('/chat') && friendTracker"
          @click="removeFriend"
          class="absolute-right q-pr-sm"
          no-caps
          dense
          icon="remove_circle_outline"
          flat
          :label="removeStatus == true ? 'Removed' : 'Remove friend'"
        />
        <q-btn
          v-if="$route.fullPath.includes('/group') && !groupTracker"
          @click="addGroups"
          class="absolute-right q-pr-sm"
          no-caps
          dense
          icon="account_circle"
          flat
          :label="addGroupStatus == true ? 'joined' : 'join the group'"
        />
        <q-btn
          v-if="$route.fullPath.includes('/group') && groupTracker"
          @click="removeGroup"
          class="absolute-right q-pr-sm"
          no-caps
          dense
          icon="remove_circle_outline"
          flat
          :label="removeStatus == true ? 'Left' : 'Leave the group'"
        />

        <q-btn
          v-if="
            !$route.fullPath.includes('/chat') &&
            !$route.fullPath.includes('/group')
          "
          to="/"
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
          unreadMessage: 0,
        },

        currentUser: {
          name: "",
          email: "",
          id: "",
        },
      },
      groupsDetails: {
        currentId: "",

        groups: {
          id: "",
          name: "",
          unreadMessage: 0,
        },

        currentUser: {
          name: "",
          email: "",
          id: "",
        },
      },

      friendTracker: false,
      groupTracker: false,
      friendshipStatus: false,
      removeStatus: false,
      addGroupStatus: false,
    };
  },

  components: {
    // EssentialLink
  },

  computed: {
    ...mapState("store1", [
      "userDetails",
      "friendsList",
      "groups",
      "groupsList",
    ]),

    title() {
      let currentPath = this.$route.fullPath;

      if (currentPath === "/user") {
        return "ASQUARE CHAT";
      } else if (currentPath.includes("/chat")) {
        return this.otherUserDetails.name;
      } else if (currentPath === "/auth") {
        return "Login";
      } else if (currentPath.includes("/group")) {
        return this.myGroupDetails;
        // return this.myGroupDetails;
        // return this.groups[this.$route.params.groupId].name;
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
    ...mapActions("store1", [
      "logoutUser",
      "makeFriends",
      "makeGroups",
      "removeFriends",
      "removeGroups",
    ]),

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

      this.friendshipStatus = true;
      console.log(this.friendDetails);
    },
    removeFriend() {
      this.friendDetails.currentId = this.currentUser();

      this.friendDetails.friends.id = this.$route.params.otherUserId;
      this.friendDetails.friends.name = this.otherUserDetails.name;
      this.friendDetails.friends.email = this.otherUserDetails.email;

      this.friendDetails.currentUser.name = this.userDetails.name;
      this.friendDetails.currentUser.email = this.userDetails.email;
      this.friendDetails.currentUser.id = this.userDetails.userId;

      // this.friendDetails.currentId.name = this.userDetails

      // console.log(this.friendDetails);

      this.removeFriends(this.friendDetails);

      this.removeStatus = true;
      // console.log(this.friendDetails);
    },
    addGroups() {
      this.groupsDetails.currentId = this.currentUser();

      this.groupsDetails.groups.id = this.$route.params.groupId;
      this.groupsDetails.groups.name =
        this.groups[this.$route.params.groupId].name;
      // this.friendDetails.friends.email = this.otherUserDetails.email;

      this.groupsDetails.currentUser.name = this.userDetails.name;
      this.groupsDetails.currentUser.email = this.userDetails.email;
      this.groupsDetails.currentUser.id = this.userDetails.userId;

      // this.friendDetails.currentId.name = this.userDetails

      console.log(this.userDetails);

      this.makeGroups(this.groupsDetails);
      console.log(this.groupsDetails);

      this.addGroupStatus = true;
    },

    removeGroup() {
      this.groupsDetails.currentId = this.currentUser();

      this.groupsDetails.groups.id = this.$route.params.groupId;
      this.groupsDetails.groups.name =
        this.groups[this.$route.params.groupId].name;
      // this.friendDetails.friends.email = this.otherUserDetails.email;

      this.groupsDetails.currentUser.name = this.userDetails.name;
      this.groupsDetails.currentUser.email = this.userDetails.email;
      this.groupsDetails.currentUser.id = this.userDetails.userId;

      // this.friendDetails.currentId.name = this.userDetails

      console.log(this.userDetails);

      this.removeGroups(this.groupsDetails);
      console.log(this.groupsDetails);
      this.removeStatus = true;
    },
  },

  watch: {
    $route(to, from) {
      // Check if the route includes "/chat"
      if (to.fullPath.includes("/chat")) {
        // Check if the friend list includes the current otherUserId
        const otherUserId = this.$route.params.otherUserId;
        console.log(otherUserId);
        this.friendTracker =
          this.friendsList.friends.hasOwnProperty(otherUserId);
        this.groupTracker = false; // Set groupTracker to false when "/chat" route is matched.
      } else if (to.fullPath.includes("/group")) {
        // Check if the group list includes the current groupId
        const groupId = this.$route.params.groupId;
        console.log(this.groups[this.$route.params.groupId]);

        if (
          this.groupsList != null &&
          this.groupsList != undefined &&
          this.groupsList.groups.hasOwnProperty(groupId)
        ) {
          this.groupTracker = true;
        } else {
          this.groupTracker = false; // Set groupTracker to false if the group doesn't exist.
        }
        this.friendTracker = false; // Set friendTracker to false when "/group" route is matched.
      } else {
        this.friendTracker = false;
        this.groupTracker = false;
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
