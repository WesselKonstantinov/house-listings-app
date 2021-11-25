<template>
  <nav class="nav">
    <ul class="nav__list">
      <li>
        <icon-button-link
          :icon="getCurrentIcon('Home', 'home')"
          icon-alt="Home icon"
          link-destination="/"
        />
      </li>
      <li>
        <icon-button-link
          :icon="getCurrentIcon('About', 'info')"
          icon-alt="Info icon"
          link-destination="/about"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
import IconButtonLink from "./IconButtonLink.vue";

export default {
  name: "MobileNavigationBar",
  components: { IconButtonLink },
  methods: {
    getCurrentIcon(routeName, iconName) {
      return this.$route.name === routeName
        ? `ic_mobile_navigarion_${iconName}_active.png`
        : `ic_mobile_navigarion_${iconName}.png`;
    },
  },
};
</script>

<style scoped>
.nav {
  width: 100%;
  background-color: #ffffff;
  box-shadow: 1px 1px 10px #c3c3c3;
  position: fixed;
  overflow: hidden;
  bottom: 0;
  z-index: 1;
}

.nav__list {
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: space-around;
}

@media screen and (min-width: 768px) {
  .nav {
    display: none;
  }
}
</style>
