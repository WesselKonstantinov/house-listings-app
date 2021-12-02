<template>
  <navigation-header />
  <mobile-navigation-bar />
  <main class="main-content">
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
/* || General styles (layout, colors and fonts) */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;0,700;1,500&family=Open+Sans:wght@400;600&display=swap");

:root {
  --primary-element-color: #eb5440;
  --secondary-element-color: #4a4b4c;
  --tertiary-element-color-light: #e8e8e8;
  --tertiary-element-color-dark: #c3c3c3;
  --primary-background-color: #f6f6f6;
  --secondary-background-color: #ffffff;
  --primary-text-color: #000000;
  --secondary-text-color: #4a4b4c;
  --hyperlink-text-color: #067bc2;
  --hyperlink-text-color-visited: #eb5440;
  --hyperlink-text-color-active: #054064;
  --button-text-color: #ffffff;
  --error-text-color: #ff0000;
  --main-font: "Open Sans", sans-serif;
  --subsidiary-font: "Montserrat", sans-serif;
  font-size: 0.75em; /* Set a base size of 12px */
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: var(--main-font);
  background-color: var(--primary-background-color);
  margin: 0 0 70px 0; /* Prevent content from being hidden behind mobile navbar */
}

h1,
h2,
button,
label,
/* Select only internal links; external links get different styling */
a:not([href^="https"]) {
  color: var(--primary-text-color);
  font-family: var(--subsidiary-font);
}

p,
span,
input,
select,
textarea {
  color: var(--secondary-text-color);
}

button {
  font-size: 100%;
  font-weight: 700;
}

.main-content {
  max-width: 1080px;
  margin: 0 auto;
  width: 90%;
}

/* || Media queries */
@media screen and (min-width: 768px) {
  body {
    margin: 0;
  }

  button,
  span,
  p,
  a {
    font-size: 1.5rem;
  }
}
</style>
