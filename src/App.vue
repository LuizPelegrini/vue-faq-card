<template>
  <div class="page">
    <main class="content">
      <transition name="fade">
        <component :is="$activeComponentName" />
      </transition>
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
  padding: 1.5rem 1rem;

  border-radius: 1rem;
  box-shadow: 0 5px 20px rgba(63, 68, 82, 0.4);
  background: linear-gradient(#404451, #26282c);
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-10%);
}
.fade-enter-active {
  transition: opacity 0.8s, transform 0.5s;
}
</style>
