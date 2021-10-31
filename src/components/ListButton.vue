<template>
  <button type="button" class="button__container">
    <img
      v-if="icon !== ''"
      class="button__icon"
      :src="require(`@/assets/images/${icon}.svg`)"
      :alt="icon"
    />

    <div class="button__text">
      <slot>No Name</slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "ListButton",

  props: {
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.button__container {
  width: 100%;
  height: 4rem;
  border: none;
  background: none;
  cursor: pointer;
  padding: 1rem 0 1rem 2rem;
  border-radius: 6px;

  display: flex;
  align-items: center;

  transition: background-color 0.2s ease;
}

.button__container:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.button__icon {
  width: 30px;
  margin-right: 2rem;
}

.button__text {
  font-size: 1.1rem;
  text-align: start;
}
</style>
