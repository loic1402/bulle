const app = Vue.createApp({
  data() {
    return {
      message: "hello world",
      todos: ["tache1", "tache2"],
      dotos: [
        { id: 0, content: "tache3" },
        { id: 1, content: "tache4" },
      ],
      variable: "",
    };
  },
}).mount("#app");
