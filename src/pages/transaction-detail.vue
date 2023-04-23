<template>
  <div v-if="transaction">
    <h1>ID: {{ $route.params.id }}</h1>
    <h3>Name: {{ transaction.name }}</h3>
    <p>Price: {{ transaction.price }}</p>
  </div>
  <div v-else>Loading transaction {{ $route.params.id }}...</div>
</template>
<script>
export default {
  computed: {
    transaction() {
      return this.$store.state.transaction;
    },
    transactionsFiltered() {
      return this.$store.getters.transactionsFiltered;
    },
  },
  created() {
    this.$store.dispatch("fetchTransaction", { id: this.$route.params.id });
  },
};
</script>
