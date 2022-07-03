<template>
  <div class="flex flex-col	shadow-black w-full items-center border-2 border-gray-600 rounded-md py-4">
    <img :src="require(`../../assets/beer/${index+1}.jpg`)" alt="beerpic" class="beer_ava cursor-pointer mb-4"/>
    <h2 class="mb-4 cursor-pointer">Beer {{ index }}</h2>
    <div class="flex justify-between px-4 w-full">
        <span class="text-sm font-semibold text-slate-500">{{beer.country}}</span>
        <span class="text-sm italic decoration-black">{{beer.price}}$</span>
    </div>
  </div>
</template>

<script>
export default {
  props: { index: Number, beer: Object },
  created() {
    console.log(this.beer);
  }
  
};
</script>

<style scoped>
.beer_ava {
    max-width: 200px;
}
</style>
