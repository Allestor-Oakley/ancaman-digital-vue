<template>
  <section id="contoh-kasus">
    <h1>Contoh Kasus</h1>
    <div id="contoh-kasus-menu">
      <ContohKasusItem 
        :imageFolder="imageFolder"
        v-for="item in items"
        :key="item.image"
        :image="item.image"
        :context="item.context"
      />
    </div>
  </section>
</template>

<script>
import ContohKasusItem from '../Block/ContohKasusItem.vue'

export default {
  components : {
    ContohKasusItem
  },
  props : {
    items : Array,
    imageFolder : String
  },
}
</script>

<style scoped>
#contoh-kasus {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 100px;
}
#contoh-kasus h1{
  font-family: 'Titillium Web', sans-serif;
  font-size: 48px;
  font-weight: normal;
  color: black;
}
#contoh-kasus-menu {
  width: 1140px;
  height: 372px;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 17px;
}
</style>
