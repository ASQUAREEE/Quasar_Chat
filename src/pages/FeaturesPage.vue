<template>
  <q-page>
    <q-page-container class="q-pa-md">
      <h1 class="text-h4">Features</h1>

      <q-expansion-item
        v-for="(feature, index) in featuresList"
        :key="index"
        label-color="primary"
        :label="feature.title"
        expand-icon="expand_more"
        expand-separator
      >
        <q-markup>{{ feature.description }}</q-markup>
      </q-expansion-item>

      <q-expansion-item
        label-color="primary"
        label="One-to-One Live Random Connections"
        expand-icon="expand_more"
        expand-separator
      >
        <q-markup>
          Initiate random live video/audio connections with other users. Connect
          with new people and have real-time conversations.
          <br /><br />
          Features include:
          <ul>
            <li>Randomly connecting with available online users.</li>
            <li>Live video and audio streaming using WebRTC technology.</li>
            <li>Private and secure connections for a safe experience.</li>
          </ul>
        </q-markup>
      </q-expansion-item>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  name: "FeaturesPage",
  data() {
    return {
      featuresList: [
        {
          title: "Secure Messaging",
          description:
            "Communicate with friends and groups securely through end-to-end encrypted messaging. Your conversations are private and protected.",
        },
        {
          title: "Group Chats",
          description:
            "Create and join groups to have conversations with multiple friends. Share photos, videos, and files within the group.",
        },
        {
          title: "User Profiles",
          description:
            "Customize your user profile with a profile picture and status message. You can also view other users' profiles.",
        },

        {
          title: "Notifications",
          description:
            "Receive real-time notifications for new messages, friend requests, and group invitations. Stay updated on the go.",
        },
        {
          title: "Privacy Controls",
          description:
            "Adjust your privacy settings to control who can send you friend requests and messages. You can also block users.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add your custom styling here */
</style>
