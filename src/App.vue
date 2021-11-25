<template>
  <navigation-header />
  <mobile-navigation-bar />
  <main class="container">
    <router-view />
  </main>
</template>

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

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;0,700;1,500&family=Open+Sans:wght@400;600&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", sans-serif;
  margin: 0 0 79px 0; /* Prevent content from being hidden behind mobile navbar */
  background-color: #f6f6f6;
}

h1,
h2,
h3,
button,
/* Select only internal links; external links get different styling */
a:not([href^="https"]) {
  font-family: "Montserrat", sans-serif;
}

.container {
  max-width: 1080px;
  margin: 0 auto;
  width: 90%;
}

@media screen and (min-width: 768px) {
  body {
    margin: 0;
  }
}
</style>
