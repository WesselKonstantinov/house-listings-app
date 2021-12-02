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
/* || Buttons */
.button-group {
  border-radius: 5px;
  display: flex;
  overflow: hidden;
  margin-bottom: 20px;
  height: 32px;
}

.button {
  background-color: var(--tertiary-element-color-dark);
  border: none;
  border-radius: 0;
  color: var(--button-text-color);
  cursor: pointer;
  flex: 1;
  padding: 0;
  margin: 0;
}

.button--active {
  background-color: var(--primary-element-color);
}

/* || Media queries */
@media screen and (min-width: 768px) {
  .button-group {
    height: 45px;
    width: 300px;
  }
}
</style>
