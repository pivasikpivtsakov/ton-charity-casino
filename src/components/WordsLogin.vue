<template>
  <div class="wordgrid">
    <input class="singleword" v-for="i in 24" :key="i" v-model="words[i]">
  </div>
  <button v-on:click="login"></button>
</template>

<script>
import {getMyKeyPair} from "@/logic/getMyKeyPair";

export default {
  name: "WordsLogin",
  data() {
    let words = [];
    for (let i = 0; i < 24; i++) {
      words.push('');
    }
    return {
      words,
    }
  },
  methods: {
    async login(event) {
      let kp;
      try {
        kp = await getMyKeyPair(this.words);
        this.$tonkeys = kp;
        console.log(kp);
      } catch (e) {
        console.log(e);
      }
    }
  },
}
</script>

<style scoped>
.wordgrid {
  display: grid;
  grid-template-columns: 100px 100px;
  gap: 1rem;
}
</style>