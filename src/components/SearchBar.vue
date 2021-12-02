<template>
  <div class="search-bar">
    <img
      class="search-bar__search"
      alt="Search icon"
      src="../assets/ic_search.png"
      @click="focusSearchBar"
    />
    <input
      class="search-bar__input"
      placeholder="Search for a house"
      ref="searchBar"
      :value="searchTerm"
      @input="setSearchTerm($event.target.value)"
    />
    <img
      class="search-bar__clear"
      :class="toggleClearIconVisibility()"
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
    toggleClearIconVisibility() {
      return this.searchTerm
        ? "search-bar__clear--visible"
        : "search-bar__clear--hidden";
    },
    focusSearchBar() {
      this.$refs.searchBar.focus();
    },
  },
};
</script>

<style>
/* || Input field and placeholder */
.search-bar {
  position: relative;
  display: flex;
  margin-bottom: 20px;
}

.search-bar__input {
  background-color: var(--tertiary-element-color-light);
  border: 1px solid transparent;
  border-radius: 5px;
  font-family: inherit;
  font-size: 100%;
  height: 30px;
  outline: none;
  padding: 15px 30px 15px 40px;
  width: 100%;
}

.search-bar__input:hover,
.search-bar__input:focus {
  border: 1px solid var(--tertiary-element-color-dark);
}

.search-bar__input::placeholder {
  color: var(--tertiary-element-color-dark);
}

/* || Input icons */
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
}

.search-bar__clear--hidden {
  visibility: hidden;
}

.search-bar__clear--visible {
  visibility: visible;
}

/* || Media queries */
@media screen and (min-width: 768px) {
  .search-bar {
    flex: 0.6;
  }

  .search-bar__input {
    font-size: 1.33333rem;
    height: 45px;
    padding-left: 60px;
    padding-right: 50px;
  }

  .search-bar__search {
    top: 12px;
    left: 25px;
    width: 20px;
  }

  .search-bar__clear {
    top: 12px;
    right: 15px;
    width: 20px;
  }
}
</style>
