<template>
  <div class="absolute w-full h-full bg-neutral-800 flex flex-col justify-around items-center">


    <WordsLogin v-if="showLogin"/>

    <!-- заглушка дадаа -->
    <div></div>
    <!-- верся тоншеба не трогать -->
    <div class="absolute bottom-0 w-full bg-green-800 text-green-100 text-center">
      <h3>tonweb ver. {{v}}</h3>
    </div>

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

  computed: {
    // если есть тонключ значит залогинились мама родная
    showMarket: () => this.$tonkeys,
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
