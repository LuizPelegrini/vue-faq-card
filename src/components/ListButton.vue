<template>
  <button type="button" class="container">
    <img class="button__icon" src="../assets/images/rocket.svg" alt="icon" />
    <span class="button__text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: "ListButton",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 3rem;
  border: none;
  background: none;
  cursor: pointer;

  display: flex;
  align-items: center;
}

.button__icon {
  width: 2rem;
  margin-right: 6px;
}

.button__text {
  color: #f5f6f8;
}
</style>
