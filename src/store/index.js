import { createStore } from "vuex";

export default createStore({
  state: {
    componentName: "Categories",
  },

  mutations: {
    SET_COMPONENT(state, name) {
      state.componentName = name;
    },
  },

  actions: {
    changeComponent({ commit }, payload) {
      const componentName = payload;
      // verify whether the component exists...

      commit("SET_COMPONENT", componentName);
    },
  },

  getters: {
    $activeComponentName(state) {
      return state.componentName;
    },
  },
});
