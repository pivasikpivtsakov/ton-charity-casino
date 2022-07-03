<template>
	<div class="max-w-fit h-1/2 flex flex-col items-center space-y-6">
		<h3 class="header-checkout">Checkout</h3>
		<div class="content-wrap">
			<aside class="beer-pic">
				<img
					:src="require(`../assets/beer/beer${index+1}.jpg`)"
					alt="beerpic"
					class="beer-img"/>
			</aside>
			<article class="beer-content w-96 text-green-100 flex flex-col items-center justify-around">
        <p>{{ beerData.name }}</p>
				<p class="">A bottle of beer you can buy with <strong>TON</strong> <br>and donate a little bit to charity</p>
				<p>Price: {{beerData.price}} TON</p>

				<div class="space-y-1 flex flex-col items-center ">
					<p class="text-sm">Choose how much you want to donate: </p>
          <p class="text-xs">You can even give 1 nanoton</p>
					<input class="relative flex m-1 h-10 w-48 text-center
						bg-neutral-700 border-0
						placeholder-neutral-800 
						text-green-100 font-bold

						focus:outline-none focus:border-2 focus:border-green-600 
						focus:ring-green-600 focus:text-green-600 rounded-md focus:ring-1 

						hover:bg-neutral-600
						hover:text-green-600">
				</div>
				

				<button class="inline-block px-6 py-2 bg-green-600 border-4 border-green-600 
					text-white font-medium text-xs 
					leading-tight uppercase rounded-full shadow-md font-bold
					hover:bg-green-600 hover:shadow-lg 
					focus:shadow-lg focus:outline-none focus:ring-0 
					active:bg-green-700 active:shadow-lg 

					transition duration-150 ease-in-out"
				v-on:click="buy">
					Buy + donate
				</button>
			</article>
		</div>
	</div>
</template>

<script>
export default {
  name: "CheckoutPage",
  props: {
    beerData: Object,
    index: Number,
  },
  methods: {
    buy() {

    }
  }
}
</script>

<style scoped>
.content-wrap {
	display: flex;
	flex-direction: row;
	height: 300px;
}

.header-checkout {
	font-size: 30pt;
	font-weight: bold;
	background-color: rgb(32, 204, 96);
	background-image: linear-gradient(45deg, rgb(32, 204, 96), rgb(6, 21, 12));
	background-size: 100%;
	-webkit-background-clip: text;
	-moz-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
}

.beer-pic {
	width: 300px;
	height: 300px;
	object-fit: contain;
}

.beer-img {
	width: 300px;
	height: 300px;
	object-fit: contain;
}
</style>