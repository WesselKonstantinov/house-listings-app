<template>
  <div class="no-results">
    <img
      class="no-results__image"
      src="../assets/img_empty_houses.png"
      alt="Empty houses"
    />
    <p class="no-results__message">
      No results found.<br />Please try another keyword.
    </p>
  </div>
</template>

<script>
export default {
  name: "NoResultsFound",
};
</script>

<style>
/* || Text and image */
.no-results {
  font-family: var(--subsidiary-font);
  font-size: 1.166666rem;
  font-weight: 500;
  margin-top: 60px;
}

.no-results__message {
  text-align: center;
  margin: 30px 0;
}

.no-results__image {
  display: block;
  width: 250px;
  margin: 0 auto;
}

/* || Media queries */
@media screen and (min-width: 768px) {
  .no-results__image {
    width: initial;
  }
}
</style>
