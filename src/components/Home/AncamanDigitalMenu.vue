<template>
  <div id="ad-menu">
    <h2>Ancaman Digital</h2>
    <div id="ad-menu-container" >
      <AncamanDigitalSubMenu 
        v-for="item in cybercrime" 
        :key="item.title" 
        :image="item.image" 
        :title="item.title" 
        :contents="item.content"/>
    </div>
  </div>
</template>

<script>
import AncamanDigitalSubMenu from './AncamanDigitalSubMenu.vue'
export default {
  name : 'AncamanDigitalMenu',
  components : {
    AncamanDigitalSubMenu
  },
  data() {
    return {
      cybercrime : [
        {
          title : "Hacking",
          image : "hacker.svg",
          content : "Peretasan atau pencurian data"
        },
        {
          title : "Hoax",
          image : "fake-news.svg",
          content : "Berita palsu atau bohong"
        },
        {
          title : "Malware",
          image : "virus-scan.svg",
          content : "Perangkat lunak berbahaya"
        },
        {
          title : "Scam",
          image : "scam.svg",
          content : "Penipuan dan \n phishing"
        }
      ]
    }
  }
}
</script>

<style scoped>
#ad-menu {
  width: 100%;
  height: 100vh;
  background-color: #fbfbfb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
#ad-menu h2 {
  font-family: 'Titillium Web', sans-serif;
  font-size: 3rem;
  font-weight: normal;
  color: black;
  position: absolute;
  right: 0;
  left: 0;
  top: 90px;
}
#ad-menu-container {
  display: grid;
  grid-gap: 46px;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 1140px;
  min-height: 253px;
  position: relative;
  top: 50px;
}
</style>
