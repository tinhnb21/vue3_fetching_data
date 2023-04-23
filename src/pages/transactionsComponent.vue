<template>
  <div v-if="transactions.length">
    <div class="item" v-for="transaction in transactions" :key="transaction.id">
      <router-link
        :to="{
          name: 'transaction-details-route',
          params: { id: transaction.id },
        }"
        >{{ transaction.name }}</router-link
      >
      <div class="price">Price: {{ transaction.price }}</div>
    </div>
  </div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>Loading transactions...</div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchAllTransactions");
    const transactions = computed(() => store.state.transactions);
    const error = computed(() => store.state.error);
    return { transactions, error };
  },
};
</script>
