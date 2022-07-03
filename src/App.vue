<template>

  <div class="absolute w-full h-full bg-neutral-800">
    <WordsLogin/>
  </div>


  <!-- верся тоншеба не трогать -->
  <div>
    <h3 class="absolute bottom-0 w-full bg-green-800 text-green-200 text-center">tonweb ver. {{v}}</h3>
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
    }
  },
}
</script>
