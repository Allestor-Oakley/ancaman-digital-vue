<template>
  <section id="tips-and-trick">
    <h1>Tips and Trick</h1>
      <TipsAndTrickCarousel 
        :imageFolder="imageFolder"
        :items="items"
      />
  </section>
</template>

<script>
import TipsAndTrickCarousel from './TipsAndTrickCarousel.vue'

export default {
  name : "TipsAndTrick",
  components : {
    TipsAndTrickCarousel
  },
  props : {
    imageFolder : String,
    items : Array
  }
}
</script>

<style scoped>
#tips-and-trick {
  width: 100%;
  height: 100vh;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 20px;
  color: black;
}
#tips-and-trick h1 {
  font-size: 48px;
  font-family: 'Titillium Web', sans-serif;
  font-weight: normal;
  position: relative;
  bottom: 30px;
}

@media (max-width : 545px) {
  #tips-and-trick {
    height : 850px;
  }
}
</style>
