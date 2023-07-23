<template>
  <!-- <p>{{tab}}</p> -->

  <q-form>
    <q-input
      v-if="tab == 'register'"
      class="q-mb-md"
      outlined
      v-model="formData.name"
      label="Name"
      required
    />

    <q-input
      class="q-mb-md"
      outlined
      v-model="formData.email"
      type="email"
      label="Email"
      required
    />

    <q-input
      class="q-mb-md"
      outlined
      v-model="formData.password"
      type="password"
      label="Password"
      required
    />

    <div class="row">
      <q-space />
      <q-btn @click="submitForm" type="submit" color="primary" :label="tab" />
    </div>
  </q-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["tab"],

  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions("store1", ["registerUser", "loginUser"]),

    submitForm() {
      if (this.tab == "login") {
        // console.log("Login the user");
        if (this.formData.name != null && this.formData.name != undefined) {
          this.loginUser(this.formData);
        }
      } else {
        // console.log("Register the user");
        if (this.formData.name != null && this.formData.name != undefined) {
          this.registerUser(this.formData);
        }
      }
    },
  },
};
</script>

<style></style>
