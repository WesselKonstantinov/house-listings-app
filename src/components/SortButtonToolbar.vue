<template>
  <div class="button-group">
    <button type="button" title="Sort by price" class="button">Price</button>
    <button type="button" title="Sort by size" class="button">Size</button>
    <button type="button" title="Sort by construction year" class="button">
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
};
</script>
