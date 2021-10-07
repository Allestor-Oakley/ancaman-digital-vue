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
        :url="item.url"
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

@media (max-width : 1200px) {
  #contoh-kasus {
    justify-content: flex-start;
    margin-top: 50px;
    height: 900px;
  }
  #contoh-kasus-menu {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    width: 820px;
    height: 700px;
    margin-top: 80px;
  }
}
@media (max-width : 900px) {
  #contoh-kasus-menu {
    width: 640px;
    height: 600px;
  }
}
@media (max-width : 680px) {
  #contoh-kasus {
    height: 1400px;
  }
  #contoh-kasus h1{
    font-size: 2.25rem;
  }
  #contoh-kasus-menu {
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr 1fr;
    width: 400px;
    height: 1200px;
  }
}
@media (max-width : 440px) {
  #contoh-kasus {
    height: 900px;
  }
  #contoh-kasus-menu {
    margin: 50px;
    width: 250px;
    height: 700px;
  }
}
</style>
