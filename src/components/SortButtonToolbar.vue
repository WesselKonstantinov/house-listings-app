<template>
  <div class="button-group">
    <button
      class="button"
      :class="isSortOptionActive('price')"
      type="button"
      title="Sort by price"
      @click="setSortOption('price')"
    >
      Price
    </button>
    <button
      class="button"
      :class="isSortOptionActive('size')"
      type="button"
      title="Sort by size"
      @click="setSortOption('size')"
    >
      Size
    </button>
    <button
      class="button"
      :class="isSortOptionActive('constructionYear')"
      type="button"
      title="Sort by construction year"
      @click="setSortOption('constructionYear')"
    >
      Year
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "SortButtonToolbar",
  computed: {
    ...mapState(["sortOption"]),
  },
  methods: {
    ...mapMutations(["setSortOption"]),
    isSortOptionActive(selectedSortOption) {
      return this.sortOption === selectedSortOption ? "button--active" : "";
    },
  },
};
</script>

<style>
.button-group {
  border-radius: 5px;
  display: flex;
  overflow: hidden;
  margin-bottom: 20px;
  height: 30px;
}

.button {
  background-color: #c3c3c3;
  border: none;
  border-radius: 0;
  color: #ffffff;
  cursor: pointer;
  flex: 1;
  font-size: 12px;
  font-weight: bold;
  padding: 0;
  margin: 0;
}

.button--active {
  background-color: #eb5440;
}

@media screen and (min-width: 768px) {
  .button-group {
    height: 45px;
    width: 300px;
  }

  .button {
    font-size: 18px;
  }
}
</style>
