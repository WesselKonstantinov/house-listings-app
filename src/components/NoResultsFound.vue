<template>
  <div class="no-results">
    <img
      class="no-results__image"
      src="../assets/img_empty_houses.png"
      alt="Empty houses"
    />
    <p>No results found.<br />Please try another keyword.</p>
  </div>
</template>

<style scoped>
.no-results {
  color: #4a4b4c;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  margin-top: 60px;
  text-align: center;
}

.no-results__image {
  width: 250px;
}

@media screen and (min-width: 768px) {
  .no-results {
    font-size: 18px;
  }

  .no-results__image {
    width: initial;
  }
}
</style>

<script>
export default {
  name: "NoResultsFound",
};
</script>
