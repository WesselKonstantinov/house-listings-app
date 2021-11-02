<template>
  <navigation-header />
  <mobile-navigation-bar />
  <main class="container">
    <router-view />
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;0,700;1,500&family=Open+Sans:wght@400;600&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  background-color: #f6f6f6;
}

.container {
  max-width: 1080px;
  margin: 0 auto;
  width: 90%;
}
</style>

<script>
import { mapActions } from "vuex";
import NavigationHeader from "./components/NavigationHeader.vue";
import MobileNavigationBar from "./components/MobileNavigationBar.vue";

export default {
  name: "App",
  components: {
    NavigationHeader,
    MobileNavigationBar,
  },
  methods: {
    ...mapActions(["getHouseListings"]),
  },
  created() {
    this.getHouseListings();
  },
};
</script>
