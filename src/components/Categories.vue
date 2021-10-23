<template>
  <h1>Categories</h1>
  <ListButton text="Hello" />
</template>

<script>
import { mapActions } from "vuex";

import ListButton from "./ListButton.vue";

export default {
  name: "Categories",

  components: {
    ListButton,
  },

  methods: mapActions(["changeComponent"]),
};
</script>

<style scoped>
h1 {
  color: #f5f6f8;
}
</style>
