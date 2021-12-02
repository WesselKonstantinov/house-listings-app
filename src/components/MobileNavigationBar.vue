<template>
  <nav class="mobile-nav">
    <ul class="mobile-nav__list">
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

<style>
/* || Mobile navigation */
.mobile-nav {
  width: 100%;
  background-color: var(--secondary-background-color);
  box-shadow: 1px 1px 10px var(--tertiary-element-color-dark);
  position: fixed;
  overflow: hidden;
  bottom: 0;
  z-index: 1;
}

.mobile-nav__list {
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: space-around;
}

/* || Media queries */
@media screen and (min-width: 768px) {
  .mobile-nav {
    display: none;
  }
}
</style>
