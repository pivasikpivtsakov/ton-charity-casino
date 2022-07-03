<template>
  <div class="grid gap-4 beer_catalog">
    <CatalogCard v-for="(beer,index) in beers" :key="index" :index="index" :beer="beer"
                 v-on:click="openCheckout(index)"/>
    <CheckoutPage v-if="showCheckout" :beer-data="beers[selectedIndex]" :index="selectedIndex"/>
  </div>
</template>

<script>
import CatalogCard from "@/components/catatlog/CatalogCard";
import CheckoutPage from "@/components/CheckoutPage";

export default {
  components: {CheckoutPage, CatalogCard},
  data() {
    return {
      showCheckout: false,
      selectedIndex: null,
      beers: [
        {
          name: "Armageddon",
          price: 1.98,
          country: "Belgium",
        },
        {
          name: "BRLD",
          price: 1.99999999,
          country: "USA",
        },
        {
          name: "Punk IPA",
          price: 1.3,
          country: "Germany",
        },
        {
          name: "Whatever",
          price: 1.35,
          country: "Czech Republic",
        },
        {
          name: "Okay",
          price: 0.99,
          country: "USA",
        },
        {
          name: "TolyaYaNot was here",
          price: 6.99,
          country: "Netherlands",
        },
        {
          name: "Maybe",
          price: 2.99,
          country: "Italy",
        },
        {
          name: "мы верстаки",
          price: 1,
          country: "Russia",
        },
      ],
    };
  },

  methods: {
    openCheckout(index, event) {
      this.selectedIndex = index;
      this.showCheckout = true;
    }
  }
}
</script>

<style scoped>
.beer_catalog {
  grid-template-columns: 300px 300px;
}
</style>