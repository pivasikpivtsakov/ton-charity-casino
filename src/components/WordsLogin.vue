<template>
  <div class="wordgrid">
    <input class="singleword" v-for="i in 24" :key="i">
  </div>
</template>

<script>
export default {
  name: "WordsLogin"
}
</script>

<style scoped>
.wordgrid {
  display: grid;
  grid-template-columns: 100px 100px;
  gap: 1rem;
}
</style>