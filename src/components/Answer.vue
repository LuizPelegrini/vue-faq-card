<template>
  <div id="answer">
    <header>
      <BackButton @click="handleBackButtonClick" />
      <h1>{{ $activeQuestion.title }}</h1>
    </header>
    <p v-html="$activeQuestion.content" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import BackButton from "@/components/BackButton.vue";

export default {
  name: "Answer",

  components: { BackButton },

  computed: mapGetters(["$activeQuestion"]),

  methods: {
    ...mapActions(["changeComponent"]),

    handleBackButtonClick() {
      this.changeComponent("Questions");
    },
  },
};
</script>

<style scoped>
#answer {
  height: 100%;
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 3rem;
}

header {
  display: grid;

  grid-auto-flow: column;
  grid-template-columns: 1fr 5fr;
  gap: 1rem;
}

p {
  line-height: 1.5rem;
}
</style>
