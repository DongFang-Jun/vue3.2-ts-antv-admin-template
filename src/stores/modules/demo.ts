import { defineStore } from "pinia";
export const useTodos = defineStore("todos", {
  state: () => ({
    number: 1,
  }),

  getters: {
    getNumber(state) {
      return state.number;
    },
  },
  actions: {
    setNumber(text) {
      console.log(text);
    },
  },
});
