<template>
  <q-page ref="pageChat" class="page-chat flex column">
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        class="messages-container"
        v-for="(message, key) in groupMessages"
        :key="key"
        :name="
          message.from.userId == userDetails.userId
            ? userDetails.name
            : message.from.name
        "
        :text="[message.text]"
        :sent="message.from.userId == userDetails.userId ? true : false"
        :bg-color="
          message.from.userId == userDetails.userId ? 'light-green' : 'white'
        "
      />
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
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import mixinOtherDetails from "src/mixins/mixin-other-user-details.js";

export default {
  mixins: [mixinOtherDetails],

  data() {
    return {
      newMessage: "",
      // showMessages: false,
    };
  },

  computed: {
    ...mapState("store1", ["userDetails", "groupMessages"]),
    ...mapGetters("store1", ["currentUser"]),
  },

  methods: {
    ...mapActions("store1", [
      "groupGetMessages",
      // "firebaseStopGettingMessages",
      "groupSendMessage",
      // "clearUnreadMessages",
    ]),

    sendMessage() {
      let currentUser = this.userDetails;
      this.groupSendMessage({
        message: {
          text: this.newMessage,
          from: currentUser,
        },
        groupId: this.$route.params.groupId,
      });
      // Clear the input after sending the message

      this.clearMessage();
      this.$refs.newMessage.focus();
      // this.scrollToBottom();
    },

    clearMessage() {
      this.newMessage = "";
      this.$refs.newMessage.focus();
    },

    scrollToBottom() {
      console.log("scrollToBottom");
      let pageChat = this.$refs.pageChat.$el;
      setTimeout(() => {
        window.scrollTo(0, pageChat.scrollHeight);
      }, 20);
    },
  },

  watch: {
    messages: {
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

/* q-messages {
  z-index: 1;
} */
</style>
