<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <!-- Switch normal and active icons depending on the current active route -->
        <router-link v-if="$route.name === 'Home'" class="nav__link" to="/">
          <img
            alt="Home icon"
            class="nav__icon"
            src="../assets/ic_mobile_navigarion_home_active.png"
          />
        </router-link>
        <router-link v-else class="nav__link" to="/">
          <img
            alt="Home icon"
            class="nav__icon"
            src="../assets/ic_mobile_navigarion_home.png"
          />
        </router-link>
      </li>
      <li class="nav__item">
        <router-link
          v-if="$route.name === 'About'"
          class="nav__link"
          to="/about"
        >
          <img
            alt="Info icon"
            class="nav__icon"
            src="../assets/ic_mobile_navigarion_info_active.png"
          />
        </router-link>
        <router-link v-else class="nav__link" to="/about">
          <img
            alt="Info icon"
            class="nav__icon"
            src="../assets/ic_mobile_navigarion_info.png"
          />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  width: 100%;
  background-color: #ffffff;
  box-shadow: 1px 1px 10px #c3c3c3;
  position: fixed;
  overflow: hidden;
  bottom: 0;
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

<script>
export default {
  name: "MobileNavigationBar",
};
</script>
