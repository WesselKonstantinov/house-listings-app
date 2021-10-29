<template>
  <navigation-header />
  <div class="container">
    <router-view />
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #e8e8e8;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}
</style>

<script>
import NavigationHeader from "./components/NavigationHeader.vue";

export default {
  name: "App",
  components: {
    NavigationHeader,
  },
};
</script>
