<template>
  <div class="w-full h-full bg-neutral-800 flex flex-col justify-around items-center">


		<WordsLogin v-if="showLogin" />

		<CheckoutPage v-if="showCheckout" />

		<ThanksNigga v-if="showNigga" />

		<!-- заглушка дадаа -->
		<div></div>
		<!-- верся тоншеба не трогать -->
		<div class="fixed bottom-0 w-full bg-green-800 text-green-100 text-center">
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

	data () {
		return {
		v: this.$tonweb.version,
		showLogin: true,
		showCheckout: false,
		showNigga: false
		}
	},

	computed: {
		// если есть тонключ значит залогинились мама родная
		showMarket: () => this.$tonkeys,
	}
}
</script>
