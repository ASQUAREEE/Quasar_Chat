<template>
  <!-- <q-page class="flex q-pa-md">
    <q-card class="full-width"> -->
  <q-page
    class="flex q-pa-md row justify-center items-center"
    style="background: linear-gradient(#8274c5, #5a4a9f)"
  >
    <q-card square class="shadow-24" style="width: 90%; max-width: 400px">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login" />
        <q-tab name="register" label="Register" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <LoginReg :tab="tab" />
        </q-tab-panel>

        <q-tab-panel name="register">
          <LoginReg :tab="tab" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
import LoginReg from "components/LoginReg.vue";

export default {
  data() {
    return {
      tab: "login",
    };
  },

  components: {
    LoginReg,
  },
};
</script>

<style scoped></style>
