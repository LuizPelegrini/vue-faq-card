<template>
  <div class="container">
    <img src="@/assets/images/astronaut.svg" alt="astronaut on the moon" />
    <h1>F.A.Q</h1>
    <p>Choose a category</p>
    <ListButton icon="rocket" @click="handleClick(1)">Basecamp</ListButton>
    <ListButton icon="astronaut-helmet" @click="handleClick(2)">
      Bootcamp
    </ListButton>
    <ListButton icon="student-hat" @click="handleClick(3)">
      Cataline
    </ListButton>
    <ListButton icon="partnership" @click="handleClick(4)">
      Partnerships
    </ListButton>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import ListButton from "./ListButton.vue";

export default {
  name: "Categories",

  components: {
    ListButton,
  },

  methods: {
    ...mapActions(["changeComponent", "changeSession"]),

    handleClick(id) {
      this.changeComponent("Questions");
      this.changeSession(id);
    },
  },
};
</script>

<style scoped>
.container {
  padding: 0.5rem;
}
</style>
