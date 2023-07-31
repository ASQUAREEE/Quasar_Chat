<template>
  <q-page v-if="!tracker" class="flex q-pa-md">
    <q-list class="full-width" separator>
      <div class="row q-mb-lg">
        <search />
      </div>
      <!-- <div v-if="search && search.length >= 3">
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
            <q-item-label class="email">{{ user.email }}</q-item-label>
          </q-item-section>

        </q-item>
      </div> -->
      <p v-if="search && !Object.keys(groupsN).length">No search results</p>
      <div v-if="search && search.length >= 2">
        <q-item
          v-for="(group, key) in groupsN"
          :key="key"
          :to="'/group/' + group.groupId"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
              {{ group.name.charAt(0) }}
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ group.name }}</q-item-label>
            <!-- <q-item-label class="email">{{ user.email }}</q-item-label> -->
          </q-item-section>
        </q-item>
      </div>

      <div v-if="!search">
        <q-item
          v-for="(group, key) in totalGroups"
          :key="key"
          :to="'/group/' + group.id"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
              {{ group.name.charAt(0) }}
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ group.name }}</q-item-label>
            <!-- <q-item-label class="email">{{ user.email }}</q-item-label> -->
          </q-item-section>
          <q-btn dense color="purple" round icon="email" class="q-ml-md">
            <q-badge color="red" floating>{{ group.unreadMessage }}</q-badge>
          </q-btn>
        </q-item>
      </div>
    </q-list>
  </q-page>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import search from "./search.vue";

export default {
  data() {
    return {
      tracker: false,
    };
  },

  components: {
    search,
  },

  computed: {
    ...mapGetters("store1", [
      "groupById",
      "currentUser",
      "groupsN",
      "totalGroups",
    ]),
    ...mapState("store1", ["groups", "userDetails", "search", "groupsList"]),
  },

  methods: {
    ...mapGetters("store1", ["totalGroups"]),
    ...mapActions("store1", ["fetchGroup", "GroupsList"]),
  },

  created() {},

  watch: {
    userDetails: {
      handler(userDetail) {
        this.fetchGroup(userDetail);
        this.GroupsList(userDetail.userId);
      },
      immediate: true, // Trigger the handler immediately on component mount
    },
    // groupsList: {
    //   handler(groupsList) {
    //     this.listOfGroups();
    //   },
    //   immediate: true, // Trigger the handler immediately on component mount
    // },
  },
};
</script>

<style>
.email {
  color: grey;
  font-size: 12px;
}

.makeNew {
  background: rgb(137, 67, 195);
  margin-top: 50px;
}
</style>
