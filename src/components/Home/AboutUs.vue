<template>
  <div id="about-us">
    <h1>About us</h1>
    <div id="about-us-container">
      <AboutUsItem 
        v-for="person in persons"
        :key="person.name"
        :name="person.name"
        :image="person.image"
        :contents="person.contents"
        :ypos="person.ypos"
      />
    </div>
  </div>
</template>

<script>
import AboutUsItem from './AboutUsItem.vue'

export default {
  name : "AboutUs",
  components : {
    AboutUsItem
  },
  data() {
    return {
      persons : [
        {
          name : "M. Rafi Ramadhan",
          image : "rafi-kontingen.jpg",
          contents : "Nama saya Rafi, hobi saya menulis dan menggambar. Saya bekerja di tim ini sebagai konten kreator.",
          ypos : "19.94",
        },
        {
          name : "Yusuf Rahman P.",
          image : "pramuka-yusuf.png",
          contents : "Halo, nama saya Yusuf, saya suka membaca dan coding. Saya bekerja sebagai web desainer di tim ini",
          ypos : "34.62",
        }
      ]
    }
  }
}
</script>

<style scoped>
#about-us{
  width: 100%;
  height: 100vh;
  background-color: #f6f7fb;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
#about-us h1 {
  font-family: 'Titillium Web', sans-serif;
  font-weight: normal;
  color: black;
  font-size: 48px;
}
#about-us-container {
  width: 740px;
  min-height: 400px;
  display: grid;
  grid-gap: 100px;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr;
  position: relative;
  bottom: 40px;
}
</style>
