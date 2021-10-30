<template>
  <header class="header">
    <div class="header__container">
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

<style scoped>
.header {
  background-color: #ffffff;
  font-size: 18px;
  padding: 0.5em;
  display: none; /* Hide navigation header for smaller screens */
}

.header__container {
  max-width: 900px;
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
  text-decoration: none;
}

@media screen and (min-width: 768px) {
  .header {
    display: block; /* Display navigation header on larger screens */
  }
}
</style>

<script>
export default {
  name: "NavigationHeader",
};
</script>
