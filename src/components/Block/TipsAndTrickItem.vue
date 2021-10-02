<template>
  <div class="tat-item">
    <img :src="require('@/assets/cyber-crime/' + imageFolder + '/tips-and-trick/' + image)" alt="">
    <h3>{{title}}</h3>
    <p>{{context}}</p>
  </div>
</template>

<script>
export default {
  name : "TipsAndTrickItem",
  props : {
    image : String,
    imageFolder : String,
    title : String,
    context : String
  },
}
</script>

<style scoped>
.tat-item {
  width: 100%;
  height: 100%;
  padding: 0 25px;
  display: grid;
  grid-template-rows: 1fr 3fr;
  grid-template-columns: 1fr 3fr;
  grid-gap: 0 50px;
  text-align: left;
}
.tat-item img{
  width: 467px;
  height: 293px;
  object-fit: contain;
  height: 293px;
  grid-row: 1/3;
  align-self: center;
  padding: 0 auto;
  margin: 0 auto;
}
.tat-item h3{
  grid-column: 2;
  align-self: center;
  font-size: 30px;
  font-family: 'Montserrat', sans-serif;
  font-weight: normal;
}
.tat-item p {
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
}
</style>
