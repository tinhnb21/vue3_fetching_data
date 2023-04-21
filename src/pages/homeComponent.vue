<template>
  <h1>Overview is here</h1>
  <input type="text" v-model="searchText" />
  <ul>
    <li v-for="(customer, index) in customersFilter" :key="index">
      {{ customer }}
    </li>
  </ul>
</template>
<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";

export default {
  props: {
    theme: {
      type: String,
      required: false,
      default: "light",
    },
  },
  // eslint-disable-next-line vue/no-setup-props-destructure
  setup({ theme }, { emit }) {
    console.log("props", theme);
    console.log("context", emit);
    const searchText = ref("");
    const customers = reactive([
      "Something",
      "Nguyen Ba Tinh",
      "Sky Albert",
      "Hu la",
    ]);

    const customersFilter = computed(() =>
      customers
        .map((customer) => {
          customer = customer.toLowerCase();
          return customer;
        })
        .filter((customer) => customer.includes(searchText.value.toLowerCase()))
    );

    watch(searchText, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });

    watchEffect(() => {
      if (searchText.value) {
        console.log("run again");
      }
    });

    return { customersFilter, searchText };
  },
};
</script>
