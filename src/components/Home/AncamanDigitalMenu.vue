<template>
  <section id="an-di-menu">
    <h2>Ancaman Digital</h2>
    <div id="an-di-menu-container" >
      <AncamanDigitalItem
        v-for="item in cybercrime" 
        :key="item.title" 
        :image="item.image" 
        :title="item.title" 
        :contents="item.content"/>
    </div>
  </section>
</template>

<script>
import AncamanDigitalItem from './AncamanDigitalItem.vue'
export default {
  name : 'AncamanDigitalMenu',
  components : {
    AncamanDigitalItem
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
#an-di-menu {
  width: 100%;
  height: 100vh;
  background-color: #fbfbfb;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-bottom: 20vh;
  align-items: center;
  position: relative;
}
#an-di-menu h2 {
  font-family: 'Titillium Web', sans-serif;
  font-size: 3rem;
  font-weight: normal;
  color: black;
  position: relative;
}
#an-di-menu-container {
  display: grid;
  grid-gap: 46px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 1140px;
  position: relative;
  top: 50px;
  pointer-events: none;
}
#an-di-menu-container > div{
	transition: transform 0.2s, opacity 0.1s;
	pointer-events : auto;
  opacity: 1;
}
#an-di-menu-container:hover > div:not(:hover)  {
  opacity: 0.5;
}
#an-di-menu-container:hover > div:hover {
  transform: scale(1.13);
}

@media (max-width : 1155px) {
  #an-di-menu-container {
    width: 960px;
  }
  #an-di-menu h2 {
    font-size: 2.5rem;
  }
}
@media (max-width : 975px) {
  #an-di-menu-container {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    width: 740px;
  }
}
@media (max-width: 755px) {
  #an-di-menu-container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 540px;
    top: 10px;
  }
  #an-di-menu {
    padding: 0;
  }
  #an-di-menu h2 {
    font-size: 2.25rem;
  }
}
@media (max-height : 600px){
  #an-di-menu {
    justify-content: flex-start;
    height: 110vh;
  }
  #an-di-menu h2{
    margin: 30px 0;
  }
}
@media (max-width: 575px) {
  #an-di-menu-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    width: 240px;
  }
  #an-di-menu {
    height: 1200px;
  }
  #an-di-menu h2 {
    font-size: 2rem;
  }
}
</style>
