<template>
  <header class="header">
    <div class="header__inner">
      <div class="logo">
        <img src="../assets/img_logo_dtt.png" alt="DTT logo" />
      </div>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <router-link class="nav__link" to="/">Houses</router-link>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" to="/about">About</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavigationHeader",
};
</script>

<style scoped>
/* || Header logo and main navigation for desktop */
.header {
  background-color: var(--secondary-background-color);
  padding: 14px;
  margin-bottom: 50px;
  display: none; /* Hide navigation header for mobile */
}

.header__inner {
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
}

.logo {
  align-self: center;
}

.nav__list {
  display: flex;
  list-style: none;
  padding: 0;
}

.nav__item {
  margin-left: 50px;
}

.nav__link {
  font-weight: 500;
  text-decoration: none;
  color: var(--tertiary-element-color-dark);
}

.router-link-exact-active {
  color: var(--primary-text-color);
  font-weight: 700;
}

/* || Media queries */
@media screen and (min-width: 768px) {
  .header {
    display: block;
  }
}
</style>
