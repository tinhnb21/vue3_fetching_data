<template>
  <h1>Transactions is here...</h1>
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
</template>

<script>
export default {
  data() {
    return {
      transactions: [],
    };
  },
  created() {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => (this.transactions = data));
  },
};
</script>
