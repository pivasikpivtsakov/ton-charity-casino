<template>
<div class="grid gap-4 beer_catalog">
 <CatalogCard v-for="(beer,index) in beers" :key="index" :index="index" :beer="beer"/>
</div>
</template>

<script>
import CatalogCard from "@/components/catatlog/CatalogCard";
export default {
    components: {CatalogCard},
    data() {
    return {
      beers: [
        {
          name: "Beer 1",
          price: 1.99,
          country: "Belgium",
        },
        {
          name: "Beer 2",
          price: 1.99,
          country: "USA",
        },
        {
          name: "Beer 3",
          price: 1.99,
          country: "Germany",
        },
        {
          name: "Beer 4",
          price: 1.99,
          country: "Czech Republic",
        },
        {
          name: "Beer 5",
          price: 1.99,
          country: "USA",
        },
        {
          name: "Beer 6",
          price: 1.99,
          country: "Netherlands",
        },
        {
          name: "Beer 7",
          price: 1.99,
          country: "Italy",
        },
        {
          name: "Beer 8",
          price: 1.99,
          country: "Russia",
        },
      ],
    };
  },
}
</script>

<style scoped>
.beer_catalog {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>