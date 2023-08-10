<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-btn
          @click="$router.push('/auth')"
          class="absolute-right q-pr-sm"
          label="login"
        />
        <q-toolbar-title class="absolute-center">Gloomy World</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      v-if="drawer"
      :width="200"
      :breakpoint="500"
      bordered
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable v-ripple :to="menuItem.to">
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>

            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          © {{ new Date().getFullYear() }} Gloomy World
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
const menuList = [
  {
    icon: "home",
    label: "Home",
    separator: true,
    to: "/",
  },
  {
    icon: "security",
    label: "Privacy and Security",
    separator: false,
    to: "/privacy",
  },
  {
    icon: "help",
    label: "Help",
    separator: false,
    to: "/help",
  },
  {
    icon: "star",
    label: "Features",
    separator: false,
    to: "/feature",
  },
];

export default {
  data() {
    return {
      drawer: false,
      menuList,
    };
  },
};
</script>
