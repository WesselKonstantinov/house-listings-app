<template>
  <div class="button-group">
    <button
      class="button"
      :class="isActive('price')"
      type="button"
      title="Sort by price"
      @click="$emit('changeSortOption', 'price')"
    >
      Price
    </button>
    <button
      class="button"
      :class="isActive('size')"
      type="button"
      title="Sort by size"
      @click="$emit('changeSortOption', 'size')"
    >
      Size
    </button>
    <button
      class="button"
      :class="isActive('constructionYear')"
      type="button"
      title="Sort by construction year"
      @click="$emit('changeSortOption', 'constructionYear')"
    >
      Year
    </button>
  </div>
</template>

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
  flex: 1;
  font-size: 12px;
  font-weight: bold;
  padding: 0;
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

<script>
export default {
  name: "SortButtonToolbar",
  props: {
    sortOption: String,
  },
  emits: ["changeSortOption"],
  methods: {
    isActive(selectedSortOption) {
      return this.sortOption === selectedSortOption ? "button--active" : "";
    },
  },
};
</script>
