<template>
  <h1>Hello DOM</h1>
  <base-nav />
  <router-view />
</template>

<script>
import NavComponent from "./components/NavComponent.vue";
export default {
  name: "App",
  components: { BaseNav: NavComponent },
  created() {
    console.log(document.querySelector("h1"));
  },
  mounted() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
