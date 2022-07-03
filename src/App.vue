<template>
	<div class="absolute top-0 w-full h-full bg-neutral-800 flex flex-col justify-around items-center">


		<WordsLogin v-if="showLogin" />

		<CheckoutPage v-if="showCheckout" />

		<ThanksNigga v-if="showNigga" />

		<!-- заглушка дадаа -->
		<div></div>
		<!-- верся тоншеба не трогать -->
		<div class="absolute bottom-0 w-full bg-green-800 text-green-100 text-center">
			<h3>tonweb ver. {{v}}</h3>
		</div>

	</div>

</template>

<script>
import WordsLogin from "@/components/WordsLogin.vue";
import CheckoutPage from "@/components/CheckoutPage.vue";
import ThanksNigga from "@/components/ThanksNigga.vue"

export default {
	name: 'App',
	components: {
		WordsLogin,
		CheckoutPage,
		ThanksNigga
	},

<<<<<<< HEAD
	data () {
		return {
		v: this.$tonweb.version,
		showLogin: false,
		showCheckout: false,
		showNigga: true
		}
	},

	computed: {
		// если есть тонключ значит залогинились мама родная
		showMarket: () => this.$tonkeys,
	}
}
</script>
=======
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
>>>>>>> origin/a
