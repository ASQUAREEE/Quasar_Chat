<template>
  <q-page ref="pageChat" class="page-chat flex column">
    <q-banner
      v-if="!otherUserDetails.online"
      class="bg-grey-4 text-center fixed-top q-banner"
    >
      {{ otherUserDetails.name }} is offline.
    </q-banner>
    <div class="q-pa-md column col justify-end">
      <div v-for="(message, key) in messages" :key="key">
        <div v-if="message.photoUrl != null && message.text != ''">
          <q-chat-message
            class="messages-container"
            :key="key"
            :name="
              message.from == 'me' ? userDetails.name : otherUserDetails.name
            "
            :text="[message.text]"
            :sent="message.from == 'me' ? true : false"
            :bg-color="message.from == 'me' ? 'light-green' : 'white'"
          >
            <q-img
              :src="message.photoUrl"
              spinner-color="white"
              class="image-message"
            />
            <a :href="message.photoUrl" download>Download now</a>
            <template v-slot:stamp>
              {{ formatTimestamp(message.timestamp) }}
            </template>
          </q-chat-message>
        </div>
        <div v-else-if="message.photoUrl != null">
          <q-chat-message
            class="messages-container"
            :key="key"
            :name="
              message.from == 'me' ? userDetails.name : otherUserDetails.name
            "
            :sent="message.from == 'me' ? true : false"
            :bg-color="message.from == 'me' ? 'light-green' : 'white'"
            ><q-img
              :src="message.photoUrl"
              spinner-color="white"
              class="image-message"
            />
            <a :href="message.photoUrl" download
              >Download now</a
            ></q-chat-message
          >
        </div>

        <div v-else>
          <q-chat-message
            class="messages-container"
            :key="key"
            :name="
              message.from == 'me' ? userDetails.name : otherUserDetails.name
            "
            :text="[message.text]"
            :sent="message.from == 'me' ? true : false"
            :bg-color="message.from == 'me' ? 'light-green' : 'white'"
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

        <!-- <q-btn text-color="red" @click="uploadImage">Upload Image</q-btn> -->
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import { mapState, mapActions } from "vuex";
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
    ...mapState("store1", ["messages", "userDetails"]),
    formatTimestamp() {
      return (timestamp) => {
        return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
      };
    },
  },

  methods: {
    ...mapActions("store1", [
      "firebaseGetMessages",
      "firebaseStopGettingMessages",
      "firebaseSendMessage",
      "clearUnreadMessages",
    ]),

    sendMessage() {
      const timestamp = new Date().toISOString();
      this.firebaseSendMessage({
        message: {
          text: this.newMessage,
          from: "me",
          photo: this.imageFile,
          timestamp: timestamp,
        },
        otherUserId: this.$route.params.otherUserId,
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
      let pageChat = this.$refs.pageChat.$el;
      setTimeout(() => {
        window.scrollTo(0, pageChat.scrollHeight);
      }, 20);
    },

    onImageSelected(event) {
      this.imageFile = event.target.files[0];

      console.log(this.imageFile);
    },

    // async uploadImage() {
    //   try {
    //     await  this.firebaseSendMessage({
    //     message: {
    //       text: this.newMessage,
    //       photo: this.imageFile,
    //       from: "me",
    //     },
    //     otherUserId: this.$route.params.otherUserId,
    //   });
    //   // Clear the input after sending the message

    //   this.clearMessage();
    //   this.$refs.newMessage.focus();
    //     // Optionally, you can handle success cases or display a success message.
    //     // For example, you can show the uploaded image using the URL you received from the store.
    //   } catch (error) {
    //     // Handle any errors that may occur during the upload process
    //     console.error('Error uploading image:', error);
    //   }
    // },
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
    this.clearUnreadMessages(this.$route.params.otherUserId);
  },

  unmounted() {
    this.firebaseStopGettingMessages();
    this.clearUnreadMessages(this.$route.params.otherUserId);
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

.them {
  margin-left: 0;
}
.me {
  margin-right: 0;
}

.mainClass {
  margin: 2px;
}
</style>
