<template>
  <button type="button" class="btn__arrow-left" @click="$emit('click')">
    <img :src="require(`@/assets/images/arrow-left.svg`)" alt="arrow left" />
  </button>
</template>

<style scoped>
.btn__arrow-left {
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s;

  height: 40px;
}

.btn__arrow-left:hover {
  background-color: #26282c;
}
</style>
