<template>
  <div id="helpdesk">
    <h1>Helpdesk</h1>
    <div id="helpdesk-menu">
      <HelpDeskItem
        v-for="item in items"
        :key="item.title"
        :image="item.image"
        :title="item.title"
        :contents="item.contents"/>
    </div>

  </div>
</template>

<script>
import HelpDeskItem from './HelpDeskItem.vue'

export default {
  name : 'HelpDesk',
  components : {
    HelpDeskItem
  },
  data() {
    return {
      items : [
        {
          image : "lapor-logo.jpeg", 
          title : "LAPOR!",
          contents : "Buatlah pengaduan ke situs LAPOR!."
        },
        {
          image : "aduankonten.jpg", 
          title : "AduanKonten",
          contents : "Laporkan konten negatif ke aduankonten."
        },
        {
          image : "ikon-polisi-siber.png", 
          title : "Patroli Siber",
          contents : "Laporkan kejahatan siber ke situs Patroli siber."
        },
        {
          image : "pikobar.jpg", 
          title : "Pikobar",
          contents : "Pusat informasi COVID 19 Jawa Barat."
        },
      ]
    }
  }
}
</script>

<style scoped>
#helpdesk {
  background-color: #292e32;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
#helpdesk h1 {
  color: white;
  font-family: 'Titillium Web';
  font-weight: normal;
  font-size: 48px;
  position: relative;
  top: 100px;
}
#helpdesk-menu {
  width: 1140px;
  min-height: 315px;
  display: grid;
  grid-gap: 10px;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: relative;
  bottom: 10px;
}
</style>
