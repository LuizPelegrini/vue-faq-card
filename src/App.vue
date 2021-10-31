<template>
  <div class="page">
    <main class="content">
      <component :is="$activeComponentName" />
    </main>
  </div>
</template>

<script>
import Categories from "./components/Categories.vue";
import Questions from "./components/Questions.vue";
import Answer from "./components/Answer.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    Categories,
    Questions,
    Answer,
  },

  computed: mapGetters(["$activeComponentName"]),
};
</script>

<style>
.page {
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
}

.content {
  width: 400px;
  height: 600px;

  border-radius: 1rem;
  box-shadow: 0 5px 20px rgba(63, 68, 82, 0.4);
  background: linear-gradient(#404451, #26282c);
}
</style>
