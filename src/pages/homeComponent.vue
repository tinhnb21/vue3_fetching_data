<template>
  <h1>Overview is here</h1>
  <button @click="diy.setCount">Show me</button>
</template>
<script>
export default {
  inject: ["diy"],
  created() {
    // console.log("diy", diy);
  },
};
</script>
