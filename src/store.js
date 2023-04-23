import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 1000,
      transaction: null,
      transactions: [1, 2, 3, 4],
    };
  },
  getters: {
    transactionsFiltered(state) {
      return state.transactions.filter((transaction) => transaction % 2 === 0);
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setTransaction(state, transactionPayload) {
      state.transaction = transactionPayload;
    },
  },
  actions: {
    async fetchTransaction({ commit }, { id }) {
      const res = await fetch("http://localhost:3000/transactions/" + id);
      const data = await res.json();
      commit("setTransaction", data);
    },
  },
});

export default store;
