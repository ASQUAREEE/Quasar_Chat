<template>
  <q-page ref="pageChat" class="page-chat flex column">
    <q-banner
      v-if="!otherUserDetails.online"
      class="bg-grey-4 text-center fixed-top q-banner"
    >
      {{ otherUserDetails.name }} is offline.
    </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        class="messages-container"
        v-for="(message, key) in messages"
        :key="key"
        :name="message.from == 'me' ? userDetails.name : otherUserDetails.name"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
        :bg-color="message.from == 'me' ? 'light-green' : 'white'"
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
import { mapState, mapActions } from "vuex";
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
    ...mapState("store1", ["messages", "userDetails"]),
  },

  methods: {
    ...mapActions("store1", [
      "firebaseGetMessages",
      "firebaseStopGettingMessages",
      "firebaseSendMessage",
    ]),

    sendMessage() {
      this.firebaseSendMessage({
        message: {
          text: this.newMessage,
          from: "me",
        },
        otherUserId: this.$route.params.otherUserId,
      });
      this.newMessage = ""; // Clear the input after sending the message

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
    this.showMessages = Object.keys(this.messages).length > 0;
    this.firebaseGetMessages(this.$route.params.otherUserId);
  },

  unmounted() {
    this.firebaseStopGettingMessages();
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
