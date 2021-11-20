<template>
  <div class="modal">
    <div class="modal__backdrop"></div>
    <div class="modal__body">
      <h2>Delete listing</h2>
      <p>
        Are you sure you want to delete this listing?<br />This action cannot be
        undone.
      </p>
      <button
        class="modal__button modal__button--primary"
        @click="deleteAndRedirect"
      >
        Yes, delete
      </button>
      <button class="modal__button" @click="closeConfirmDeleteModal">
        Go back
      </button>
    </div>
  </div>
</template>

<style>
.modal__backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal__body {
  background-color: #ffffff;
  border-radius: 15px;
  position: fixed;
  padding: 2em 0;
  left: 5%;
  right: 5%;
  top: 35%;
  text-align: center;
}

.modal__body h2 {
  margin: 0;
  font-size: 18px;
}

.modal__body p {
  font-size: 12px;
  margin-bottom: 30px;
  color: #4a4b4c;
}

.modal__button {
  display: block;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding: 1em 0;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  background-color: #4a4b4c;
  cursor: pointer;
}

.modal__button--primary {
  background-color: #eb5440;
}

@media screen and (min-width: 768px) {
  .modal__body {
    left: 20%;
    right: 20%;
  }
}

@media screen and (min-width: 1200px) {
  .modal__body {
    left: 30%;
    right: 30%;
  }
}
</style>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "ConfirmDelete",
  computed: {
    ...mapState(["selectedHouseListingId"]),
  },
  methods: {
    ...mapActions(["deleteHouseListing"]),
    ...mapMutations(["setIsConfirmDeleteModalVisible"]),
    closeConfirmDeleteModal() {
      this.setIsConfirmDeleteModalVisible(false);
    },
    deleteAndRedirect() {
      this.deleteHouseListing(this.selectedHouseListingId).then(() =>
        this.$router.push({ name: "Home" })
      );
    },
  },
};
</script>
