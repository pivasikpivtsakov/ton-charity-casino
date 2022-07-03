<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <CheckoutPage/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CheckoutPage from "@/components/CheckoutPage";

export default {
  name: 'App',
  components: {
    CheckoutPage,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
