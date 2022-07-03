<template>

  <div class="max-w-fit h-1/2 flex flex-col items-center space-y-6">

    <!-- табица -->
    <div class="grid grid-cols-4">

      <div v-for="i in 24" :key="i" class="relative flex">

        <p class="absolute flex top-1.5 left-2 text-green-600 z-20 text-xs font-bold">
          {{i}}
        </p>

        <input v-model="words[i-1]"
          class="relative flex m-1 h-10 w-28 text-center
          bg-neutral-700 border-0
          placeholder-neutral-800 
          text-neutral-900 font-bold

          focus:outline-none focus:border-2 focus:border-green-600 
          focus:ring-green-600 focus:text-green-600 rounded-md focus:ring-1 

          hover:bg-neutral-600
          hover:text-green-600
          " 
          >

      </div>

    </div>

    <button v-on:click="login"
    class="inline-block px-6 py-2 bg-green-neutral-800 border-4 border-green-600 
      text-white font-medium text-xs 
      leading-tight uppercase rounded-full shadow-md font-bold
      hover:bg-green-600 hover:shadow-lg 
      focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 
      active:bg-green-700 active:shadow-lg 

      transition duration-150 ease-in-out"
    >
      Log In
    </button>

    <div v-if="showPay">
      <button v-on:click="sendMoney">Send Nudes</button>
    </div>

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
    words = [ 'stairs','route','bleak','rocket','now','tuna',
    'globe','frown','mimic','grit', 'faint', 'resist', 
    'truly', 'reduce', 'model', 'lamp', 'bind', 'coffee', 
    'rose', 'odor', 'tiny', 'blind', 'total', 'second']

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