<template>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";

import { defineComponent } from "vue";

export default {
  methods: {
    ...mapActions("store1", ["handleAuthStateChange"]),
  },

  mounted() {
    this.handleAuthStateChange();
  },
};
</script>
