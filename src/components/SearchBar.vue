<template>
  <div class="search-bar">
    <img
      class="search-bar__search"
      alt="Search icon"
      src="../assets/ic_search.png"
    />
    <input
      class="search-bar__input"
      placeholder="Search for a house"
      :value="searchTerm"
      @input="setSearchTerm($event.target.value)"
    />
    <img
      class="search-bar__clear"
      :class="toggleClearIconClass()"
      alt="Clear icon"
      src="../assets/ic_clear.png"
      @click="setSearchTerm('')"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "SearchBar",
  computed: {
    ...mapState(["searchTerm"]),
  },
  methods: {
    ...mapMutations(["setSearchTerm"]),
    toggleClearIconClass() {
      return this.searchTerm
        ? "search-bar__clear--visible"
        : "search-bar__clear--hidden";
    },
  },
};
</script>

<style scoped>
.search-bar {
  position: relative;
  display: flex;
  margin-bottom: 20px;
}

.search-bar__search {
  position: absolute;
  top: 8px;
  left: 14px;
  width: 15px;
}

.search-bar__clear {
  position: absolute;
  top: 8px;
  right: 14px;
  width: 15px;
  cursor: pointer;
}

.search-bar__clear--hidden {
  visibility: hidden;
}

.search-bar__clear--visible {
  visibility: visible;
}

.search-bar__input {
  background-color: #e8e8e8;
  border: 1px solid transparent;
  border-radius: 5px;
  color: #4a4b4c;
  font-family: inherit;
  font-size: 12px;
  height: 30px;
  outline: none;
  padding: 2px 30px 2px 40px;
  width: 100%;
}

.search-bar__input:hover,
.search-bar__input:focus {
  border: 1px solid #c3c3c3;
}

@media screen and (min-width: 768px) {
  .search-bar__input {
    font-size: 16px;
    height: 45px;
    padding-left: 60px;
    padding-right: 50px;
  }

  .search-bar__search {
    top: 13px;
    left: 25px;
    width: 20px;
  }

  .search-bar__clear {
    top: 13px;
    right: 25px;
    width: 20px;
  }
}
</style>
