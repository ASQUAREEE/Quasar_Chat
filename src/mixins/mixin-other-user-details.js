export default {
  computed: {
    otherUserDetails() {
      if (this.$store.state.store1.users[this.$route.params.otherUserId]) {
        return this.$store.state.store1.users[this.$route.params.otherUserId];
      }

      return {};
    },
  },
};
