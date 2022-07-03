<template>
	<div class="absolute top-0 w-full h-full bg-neutral-800 flex flex-col justify-around items-center">


		<WordsLogin v-if="showLogin"/>

		<CheckoutPage v-if="showCheckout"/>

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
import CheckoutPage from "@/components/CheckoutPage.vue";

export default {
	name: 'App',
	components: {
		WordsLogin,
		CheckoutPage
	},

	data () {
		return {
		v: this.$tonweb.version,
		showLogin: false,
		showCheckout: true,
		}
	},

	computed: {
		// если есть тонключ значит залогинились мама родная
		showMarket: () => this.$tonkeys,
	}
}
</script>