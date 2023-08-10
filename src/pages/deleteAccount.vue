<template>
  <q-page>
    <q-page-container class="q-pa-md">
      <h1 class="text-h4">Delete Account</h1>
      <p>
        If you wish to delete your Gloomy Chat account and associated data,
        please provide your username and email address below:
      </p>

      <q-form @submit="submitDeleteRequest">
        <q-input v-model="username" label="Username" dense />

        <q-input v-model="email" label="Email" type="email" dense />

        <q-btn
          label="Submit Request"
          color="negative"
          type="submit"
          class="q-mt-md"
        />
      </q-form>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  name: "DeleteAccount",
  data() {
    return {
      username: "",
      email: "",
    };
  },
  methods: {
    submitDeleteRequest() {
      // You can implement the logic here to send the delete account request
      // You can use this.username and this.email to access the entered values
      // For example, showing a confirmation modal or sending an email to confirm the deletion request
      // Once the request is confirmed, you can proceed with the account deletion process
    },
  },
};
</script>

<style scoped>
/* Add your custom styling here */
</style>
