<template>
  <div id="categories">
    <img src="@/assets/images/astronaut.svg" alt="astronaut on the moon" />

    <div class="header">
      <h1>F.A.Q</h1>
      <p>Choose a category</p>
    </div>

    <div class="btn__categories">
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
#categories {
  display: grid;
  height: 100%;

  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  gap: 1rem;
}

#categories .header {
  padding: 0 2rem;
}

.btn__categories {
  display: grid;
}
</style>
