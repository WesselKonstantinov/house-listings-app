<template>
  <h1 class="mobile-header">About</h1>
  <article>
    <section class="section">
      <h1 class="section__heading">About DTT Real Estate</h1>
      <p class="section__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p class="section__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </section>
    <section class="section">
      <h1 class="section__heading">Design and Development</h1>
      <div class="section__misc">
        <img
          src="../assets/img_logo_dtt@2x.png"
          alt="DTT logo"
          class="section__logo"
        />
        <div class="section__source">
          <span>By DTT</span>
          <a href="https://www.d-tt.nl/" target="_blank" class="section__link">
            www.d-tt.nl
          </a>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
/* || About page layout */
.section:nth-child(2) {
  margin-top: 30px;
}

.section__heading {
  font-size: 1.33333rem;
}

.section__misc {
  display: flex;
}

.section__link {
  color: var(--hyperlink-text-color);
  text-decoration: none;
}

.section__link:visited {
  color: var(--hyperlink-text-color-visited);
}

.section__link:focus,
.section__link:hover {
  text-decoration: underline;
}

.section__link:active {
  color: var(--hyperlink-text-color-active);
}

.section__source {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

.section__logo {
  width: 100px;
}

/* || Media queries */
@media screen and (min-width: 768px) {
  .section:nth-child(2) {
    margin-top: 50px;
  }

  .section__heading {
    font-size: 2.666666rem;
  }

  .section__text,
  .section__source {
    line-height: 1.7;
  }

  .section__logo {
    width: 180px;
  }
}
</style>
