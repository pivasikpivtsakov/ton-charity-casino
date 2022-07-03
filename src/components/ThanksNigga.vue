<template>

	<div class="p-10 max-w-fit h-2/5 flex flex-col items-center justify-around space-y-6 
		bg-neutral-900 shadow-2xl shadow-black hover:shadow-green-900 
		transition duration-500 ease-in-out">

		<div class="flex flex-col items-center space-y-0">
			<h1 class="text-green-600 font-bold text-7xl">Thank You</h1>
		</div>
	

		<p class="text-green-200 font-semibold text-center">For donating for Charity <br> and buying pivasik</p>
		<p>You paid: {{beerPrice}} TON</p>
    <p>And donated: {{donatePrice}} TON</p>
		
		<button class="inline-block px-6 py-2 bg-green-600 border-4 border-green-600 
			text-white font-medium text-xs 
			leading-tight uppercase rounded-full shadow-md font-bold
			hover:bg-green-600 hover:shadow-lg 
			focus:shadow-lg focus:outline-none focus:ring-0 
			active:bg-green-700 active:shadow-lg 

			transition duration-150 ease-in-out"
		>
			Go back
		</button>

	</div>

</template>

<script>
export default {
	name: 'ThanksNigga',
	components: { },
  props: {
    beerPrice: String,
    donatePrice: String,
  }
}
</script>