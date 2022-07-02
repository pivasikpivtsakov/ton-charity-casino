<template>
  <div class="wordgrid">
    <input class="singleword" v-for="i in 24" :key="i" v-model="words[i-1]">
  </div>
  <button v-on:click="login">Login</button>
  <div v-if="showPay">
    <button v-on:click="sendMoney">Send Nudes</button>
  </div>
</template>

<script>
import {getMyKeyPair} from "@/logic/getMyKeyPair";
import {makePayment} from "@/logic/makePayment";

export default {
  name: "WordsLogin",
  data() {
    let words = [];
    for (let i = 0; i < 24; i++) {
      words.push('');
    }

    //mock
    words[0] = 'stairs';
    words[1] = 'route';
    words[2] = 'bleak';
    words[3] = 'rocket';
    words[4] = 'now';
    words[5] = 'tuna';
    words[6] = 'globe';
    words[7] = 'frown';
    words[8] = 'mimic';
    words[9] = 'grit';
    words[10] = 'faint';
    words[11] = 'resist';
    words[12] = 'truly';
    words[13] = 'reduce';
    words[14] = 'model';
    words[15] = 'lamp';
    words[16] = 'bind';
    words[17] = 'coffee';
    words[18] = 'rose';
    words[19] = 'odor';
    words[20] = 'tiny';
    words[21] = 'blind';
    words[22] = 'total';
    words[23] = 'second';

    return {
      words,
      showPay: false,
    }
  },
  methods: {
    async login(event) {
      let kp;
      try {
        kp = await getMyKeyPair(this.words);
        this.$tonkeys = kp;
        console.log(this.$tonkeys);
        this.showPay = true;
      } catch (e) {
        // случай в казино добавь сюда тост типа не залогинился
        console.log(e);
      }
    },

    async sendMoney(event) {
      const walletCKey = [
        3, 118, 78, 226, 213, 126,  58, 149,
        136,  38, 31, 181, 111,  17, 228,  66,
        167, 197, 54, 156,  24, 163, 192, 126,
        136, 250, 79,  63, 120, 104, 123, 111
      ];
      await makePayment(this.$tonweb, this.$tonkeys, walletCKey, 1);
    },
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