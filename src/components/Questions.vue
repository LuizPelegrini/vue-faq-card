<template>
  <h1 class="h1">Questions</h1>
  <ListButton
    v-for="question in $questionsFromActiveSession"
    :key="question.id"
    @click="handleClick(question.id)"
  >
    {{ question.title }}
  </ListButton>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ListButton from "@/components/ListButton.vue";

export default {
  name: "Questions",

  components: { ListButton },

  computed: mapGetters(["$questionsFromActiveSession"]),

  methods: {
    ...mapActions(["changeComponent", "changeQuestion"]),

    handleClick(id) {
      this.changeComponent("Answer");
      this.changeQuestion(id);
    },
  },
};
</script>
