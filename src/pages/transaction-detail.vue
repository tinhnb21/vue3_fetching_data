<template>
  <div v-if="transaction">
    <h1>ID: {{ $route.params.id }}</h1>
    <h3>Name: {{ transaction.name }}</h3>
    <p>Price: {{ transaction.price }}</p>
  </div>
  <div v-else>Loading transaction {{ $route.params.id }}...</div>
</template>
<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    store.dispatch("fetchTransaction", { id: route.params.id });

    return {
      transaction: computed(() => store.state.transaction),
    };
  },
};
</script>
