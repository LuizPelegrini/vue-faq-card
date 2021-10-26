import { createStore } from "vuex";
import faq from "@/assets/db.json";

export default createStore({
  state: {
    componentName: "Categories",
    sessionId: null,
    categories: faq.faqCategories,
  },

  mutations: {
    SET_COMPONENT(state, name) {
      state.componentName = name;
    },

    SET_SESSION(state, id) {
      state.sessionId = id;
    },
  },

  actions: {
    changeComponent({ commit }, payload) {
      const componentName = payload;
      // TODO: verify whether the component exists...

      commit("SET_COMPONENT", componentName);
    },

    changeSession({ commit }, payload) {
      const id = payload;

      // TODO: verify whether the session exists...
      commit("SET_SESSION", id);
    },
  },

  getters: {
    $activeComponentName(state) {
      return state.componentName;
    },

    $questionsFromActiveSession(state) {
      const category = state.categories.find(
        (category) => category.id === state.sessionId
      );

      return category.questions;
    },
  },
});
