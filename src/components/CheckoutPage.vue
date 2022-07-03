<template>
  <div class="container bg-neutral-800">
    <h3 class="header-checkout">Checkout</h3>
    <div class="content-wrap">
      <aside class="beer-pic">
        <img
          :src="require(`../assets/beer/beer${index+1}.jpg`)"
          alt="beerpic"
          class="beer-img"/>
      </aside>
      <article class="beer-content">
        <p>{{ beerData.name }}</p>
        <p>
          A bottle of beer you can buy with TON and donate a little bit to charity.
        </p>
        <p>Price: 1 TON</p>
        <p>Choose how much you want to donate: </p>
        <input>
          <button class="rounded bg-green-800 text-neutral-100 action-button">Buy + donate</button>
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

.action-button {
  width: 10em;
  height: 3em;
}

.action-button:hover {
  box-shadow: 0px 10px 13px -7px #000000;
}

.beer-content {

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