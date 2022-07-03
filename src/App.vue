<template>
  <div class="w-full h-full bg-neutral-800 flex flex-col justify-around items-center">


    <WordsLogin v-if="showLogin"/>

    <!-- верся тоншеба не трогать -->
    <footer class="sticky bottom-0 w-full bg-green-800 text-green-100 text-center">
      <h3>tonweb ver. {{v}}</h3>
    </footer>

  </div>
</template>

<script>
import WordsLogin from "@/components/WordsLogin";

export default {
  name: 'App',
  components: {
    WordsLogin
  },

  data () {
    return {
      v: this.$tonweb.version,
      showLogin: true,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
