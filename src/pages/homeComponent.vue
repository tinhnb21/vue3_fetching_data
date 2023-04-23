<template>
  <h1>Overview is here</h1>
  <input type="text" v-model="searchText" />
  <ul>
    <li v-for="(customer, index) in customersFilter" :key="index">
      {{ customer }}
    </li>
  </ul>
  <p>{{ transactions }}</p>
</template>
<script>
export default {
  data() {
    return {
      transactions: [],
    };
  },
  created() {
    this.count = this.$store.state.transactions;
  },
};
</script>
