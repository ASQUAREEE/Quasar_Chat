<template>
  <q-page class="flex q-pa-md">
    <q-list class="full-width" separator>
      <div class="row q-mb-lg">
        <search />
      </div>

      <p v-if="search && !Object.keys(users).length">No search results</p>

      <q-item
        v-for="(user, key) in users"
        :key="key"
        :to="'/chat/' + key"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.name.charAt(0) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
          <!-- <q-item-label>{{ user.email }}</q-item-label> -->
        </q-item-section>

        <q-item-section side>
          <q-badge :color="user.online ? 'light-green-5' : 'grey-4'">
            {{ user.online ? "Online" : "Offline" }}
          </q-badge>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import search from "./search.vue";

export default {
  computed: {
    ...mapGetters("store1", ["users"]),
    ...mapState("store1", ["search"]),
  },

  components: {
    search,
  },
};
</script>

<style></style>
