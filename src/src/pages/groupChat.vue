<template>
  <q-page ref="groupChat" class="page-chat flex column">
    <div class="q-pa-md column col justify-end">
      <div v-for="(message, key) in groupMessages" :key="key">
        <div v-if="message.photoUrl != null && message.text != ''">
          <div :class="message.from == 'me' ? 'me' : 'them'">
            <template :class="message.from == 'me' ? 'me' : 'them'">
              <q-img
                :src="message.photoUrl"
                spinner-color="white"
                class="image-message"
              />
              <a :href="message.photoUrl" download>Download now</a>
            </template>
          </div>

          <q-chat-message
            class="messages-container"
            :key="key"
            :name="
              message.from.userId == userDetails.userId
                ? userDetails.name
                : message.from.name
            "
            :text="[message.text]"
            :sent="message.from.userId == userDetails.userId ? true : false"
            :bg-color="
              message.from.userId == userDetails.userId
                ? 'light-green'
                : 'white'
            "
          >
          </q-chat-message>
        </div>

        <div v-else-if="message.photoUrl != null">
          <q-img
            :src="message.photoUrl"
            spinner-color="white"
            class="image-message"
          />
          <a :href="message.photoUrl" download>Download now</a>
        </div>

        <div v-else>
          <q-chat-message
            class="messages-container"
            :key="key"
            :name="
              message.from.userId == userDetails.userId
                ? userDetails.name
                : message.from.name
            "
            :text="[message.text]"
            :sent="message.from.userId == userDetails.userId ? true : false"
            :bg-color="
              message.from.userId == userDetails.userId
                ? 'light-green'
                : 'white'
            "
          >
            <template v-slot:stamp>
              {{ formatTimestamp(message.timestamp) }}
            </template>
          </q-chat-message>
        </div>
      </div>
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form class="full-width">
          <q-input
            ref="newMessage"
            v-model="newMessage"
            bg-color="white"
            outlined
            rounded
            label="Message"
            dense
          >
            <template v-slot:after>
              <q-btn
                @click="sendMessage"
                round
                dense
                flat
                type="submit"
                color="white"
                icon="send"
              />
            </template>
          </q-input>
        </q-form>
        <input type="file" ref="fileInput" @change="onImageSelected" />
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import mixinOtherDetails from "src/mixins/mixin-other-user-details.js";
import { formatDistanceToNow } from "date-fns";

export default {
  mixins: [mixinOtherDetails],

  data() {
    return {
      newMessage: "",
      imageFile: null,
      // showMessages: false,
    };
  },

  computed: {
    ...mapState("store1", ["userDetails", "groupMessages"]),
    ...mapGetters("store1", ["currentUser"]),
    formatTimestamp() {
      return (timestamp) => {
        return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
      };
    },
  },

  methods: {
    ...mapActions("store1", [
      "groupGetMessages",
      "groupStopGettingGroupMessage",
      "groupSendMessage",
      // "clearUnreadMessages",
    ]),

    sendMessage() {
      let currentUser = this.userDetails;
      const timestamp = new Date().toISOString();
      this.groupSendMessage({
        message: {
          text: this.newMessage,
          from: currentUser,
          photo: this.imageFile,
          timestamp: timestamp,
        },
        groupId: this.$route.params.groupId,
      });
      // Clear the input after sending the message

      this.clearMessage();
      this.imageFile = null;
      this.$refs.fileInput.value = "";
      this.$refs.newMessage.focus();
      // this.scrollToBottom();
    },

    clearMessage() {
      this.newMessage = "";
      this.$refs.newMessage.focus();
    },

    scrollToBottom() {
      console.log("scrollToBottom");
      let groupChat = this.$refs.groupChat.$el;
      setTimeout(() => {
        window.scrollTo(0, groupChat.scrollHeight);
      }, 20);
    },
    onImageSelected(event) {
      this.imageFile = event.target.files[0];

      console.log(this.imageFile);
    },
  },

  watch: {
    groupMessages: {
      handler(val) {
        this.scrollToBottom();
        console.log("My store value for messaggi:", val);
      },
      deep: true,
    },
  },

  mounted() {
    this.showMessages = Object.keys(this.groupMessages).length > 0;
    // this.firebaseGetMessages(this.$route.params.otherUserId);
    this.groupGetMessages(this.$route.params.groupId);
    // this.clearUnreadMessages(this.$route.params.otherUserId);
  },

  unmounted() {
    // this.firebaseStopGettingMessages();
    this.groupStopGettingGroupMessage();
  },
};
</script>

<style>
.page-chat {
  background: #e2dfd5;

  /* display: block;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 0;
  opacity: 0.1; */
  z-index: 0;
  background-color: #e5e5f7;

  background-image: radial-gradient(
    #be85a7 0.8500000000000001px,
    #e5e5f7 0.8500000000000001px
  );
  background-size: 17px 17px;
}

.messages-container {
  z-index: 2;
}

.q-banner {
  top: 40px;
  z-index: 2;
  opacity: 0.8;
}

.image-message {
  max-width: 200px; /* Set the maximum width for the image */
  max-height: 200px; /* Set the maximum height for the image */
}

/* q-messages {
  z-index: 1;
} */
</style>
