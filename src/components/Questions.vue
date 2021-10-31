<template>
  <div id="questions">
    <header>
      <BackButton @click="handleBackButtonClick" />
      <div>
        <h1 class="h1">{{ $activeSession.title }}</h1>
        <span>Select a question</span>
      </div>
      <img
        :src="require(`@/assets/images/${$activeSession.icon}`)"
        :alt="$activeSession.icon"
      />
    </header>

    <div class="questions__content">
      <ListButton
        v-for="question in $activeSession.questions"
        :key="question.id"
        @click="handleClick(question.id)"
      >
        {{ question.title }}
      </ListButton>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ListButton from "@/components/ListButton.vue";
import BackButton from "@/components/BackButton.vue";

export default {
  name: "Questions",

  components: { ListButton, BackButton },

  computed: mapGetters(["$activeSession"]),

  methods: {
    ...mapActions(["changeComponent", "changeQuestion"]),

    handleClick(id) {
      this.changeComponent("Answer");
      this.changeQuestion(id);
    },

    handleBackButtonClick() {
      this.changeComponent("Categories");
    },
  },
};
</script>

<style scoped>
#questions {
  height: 100%;
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 3rem;
}

header {
  display: grid;

  grid-auto-flow: column;
  grid-template-columns: 1fr 4fr 1fr;
  gap: 1rem;
}

header img {
  height: 40px;
  align-self: center;
}
</style>
