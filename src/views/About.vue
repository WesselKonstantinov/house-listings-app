<template>
  <div class="about-page">
    <h1 class="about-page__mobile-header">About</h1>
    <article class="about-page__content">
      <header class="about-page__article-header">
        <h2>About DTT Real Estate</h2>
      </header>
      <p class="about-page__article-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p class="about-page__article-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <footer class="about-page__article-footer">
        <h2>Design and Development</h2>
        <div class="about-page__footer-inner-part">
          <img
            src="../assets/img_logo_dtt@2x.png"
            alt="DTT logo"
            class="about-page__logo"
          />
          <div class="about-page__external-link-container">
            <span>By DTT</span>
            <a
              href="https://www.d-tt.nl/"
              target="_blank"
              class="about-page__external-link"
            >
              www.d-tt.nl
            </a>
          </div>
        </div>
      </footer>
    </article>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
.about-page__mobile-header {
  text-align: center;
  font-size: 18px;
  margin: 30px;
}

.about-page__article-body {
  font-size: 12px;
  color: #4a4b4c;
}

.about-page__article-header h2,
.about-page__article-footer h2 {
  font-size: 14px;
}

.about-page__article-footer {
  margin-top: 30px;
}

.about-page__footer-inner-part {
  display: flex;
}

.about-page__external-link {
  color: #067bc2;
  text-decoration: none;
}

.about-page__external-link:visited {
  color: #eb5440;
}

.about-page__external-link:focus,
.about-page__external-link:hover {
  text-decoration: underline;
}

.about-page__external-link:active {
  color: #054064;
}

.about-page__external-link-container {
  color: #4a4b4c;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  margin-left: 20px;
}

.about-page__logo {
  width: 100px;
}

@media screen and (min-width: 768px) {
  .about-page__mobile-header {
    display: none;
  }

  .about-page__article-body,
  .about-page__external-link-container {
    font-size: 18px;
    line-height: 1.7;
  }

  .about-page__article-header h2,
  .about-page__article-footer h2 {
    font-size: 22px;
  }

  .about-page,
  .about-page__article-footer {
    margin-top: 50px;
  }

  .about-page__logo {
    width: 180px;
  }
}
</style>
