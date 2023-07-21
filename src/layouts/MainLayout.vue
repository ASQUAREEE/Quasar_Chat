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
          v-else
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

import { mapState, mapActions } from "vuex";

import mixinOtherDetails from "src/mixins/mixin-other-user-details.js";

export default {
  mixins: [mixinOtherDetails],

  name: "MainLayout",

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
  },

  methods: {
    ...mapActions("store1", ["logoutUser"]),
  },
};
</script>

<style scoped>
.q-toolbar .q-btn {
  line-height: 1.2;
}
</style>
