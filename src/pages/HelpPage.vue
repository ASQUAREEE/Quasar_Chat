<template>
  <q-page>
    <q-page-container class="q-pa-md">
      <h1 class="text-h4">Help Center</h1>
      <p>
        Welcome to the Gloomy Chat Help Center. If you have any questions or
        need assistance, you're in the right place. Below are some frequently
        asked questions and answers to help you get started.
      </p>

      <h2 class="text-h5">Frequently Asked Questions</h2>

      <q-expansion-item
        v-for="(faq, index) in faqList"
        :key="index"
        label-color="primary"
        :label="faq.question"
        expand-icon="expand_more"
        expand-separator
      >
        <q-markup>{{ faq.answer }}</q-markup>
      </q-expansion-item>

      <h2 class="text-h5">Contact Us</h2>
      <p>
        If you still have questions or need further assistance, feel free to
        contact our support team at
        <a href="mailto:support@gloomychat.com">support@gloomychat.com</a>.
      </p>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  name: "HelpPage",
  data() {
    return {
      faqList: [
        {
          question: "How do I create an account?",
          answer:
            "To create a Gloomy Chat account, simply click on the 'Login' button  on the home page then click on Register tab. You'll need to provide your name, email address, and choose a strong password.",
        },
        {
          question: "How do I add friends?",
          answer:
            "You can add friends by navigating to the user's profile page and clicking on the 'Add Friend' button.",
        },
        {
          question: "How do I join a group?",
          answer:
            "To join a group, go to the Groups section and browse the available groups. Click on a group to view its details, and then click the 'Join' button if you're interested in joining.",
        },
        {
          question: "How do I report inappropriate content?",
          answer:
            "If you come across any inappropriate content or behavior, you can report it by using the 'Report' button available in chat conversations and group discussions. Our moderation team will review the report and take appropriate action.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add your custom styling here */
</style>
