<template>
  <div>
    <h1>Create a New Group</h1>
    <q-input v-model="groupName" type="text" placeholder="Group Name" />
    <q-btn @click="createGroup">Create Group</q-btn>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      groupName: "",
    };
  },

  methods: {
    ...mapGetters("store1", ["currentUser"]),
    ...mapActions("store1", ["createGroups"]),
    createGroup() {
      if (this.groupName) {
        let currentUser = this.currentUser();
        const creatorId = currentUser; // Replace with the current user's ID
        this.createGroups({
          groupName: this.groupName,
          creatorId: creatorId,
        }).then((newGroup) => {
          // Redirect to the newly created group chat
          // this.$router.push(`/group-chat/${newGroup.groupId}`);
          this.$router.push("/user");
          console.log("newGroup)");
        });
      }
    },
  },
};
</script>
