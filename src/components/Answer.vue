<template>
  <h1>Title</h1>
  <p v-html="$answerFromActiveQuestion" />
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Answer",

  computed: mapGetters(["$answerFromActiveQuestion"]),
};
</script>
