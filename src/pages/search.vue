<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <q-input
    class="col"
    v-model="searchField"
    label="Search"
    outlined
    :dense="dense"
  >
    <template v-slot:append>
      <q-icon
        v-if="searchField !== ''"
        name="close"
        @click="searchField = ''"
        class="cursor-pointer"
      />
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  // data() {
  //   return {
  //     searchField: "",
  //   };
  // },

  computed: {
    ...mapState("store1", ["search"]),

    searchField: {
      get() {
        return this.search;
      },

      set(value) {
        this.setSearch(value);
      },
    },
  },

  methods: {
    ...mapActions("store1", ["setSearch"]),
  },

  created() {
    // Clear the searchField when the component is mounted
    this.searchField = "";
  },

  beforeUnmount() {
    // Clear the searchField when the component is unmounted
    this.searchField = "";
  },
};
</script>
