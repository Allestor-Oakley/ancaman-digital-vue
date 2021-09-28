<template>
  <div id="home">
    <h1>Ancaman Digital</h1>
    <p>Ancaman terhadap informasi sensitif pada sistem komputer atau jaringan internet. </p>
  </div>
  <AncamanDigitalMenu />
  <HelpDesk />
  <AboutUs />
</template>

<script>
import AncamanDigitalMenu from '../components/Home/AncamanDigitalMenu.vue'
import HelpDesk from '../components/Home/HelpDesk.vue'
import AboutUs from '../components/Home/AboutUs.vue'
export default {
  name: 'Home',
  components: {
    AncamanDigitalMenu,
    HelpDesk,
    AboutUs
  }
}
</script>

<style scoped>
#home {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url("../assets/home/title/background.png");
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#home > h1 {
  font-family: 'Orbitron', sans-serif;
  font-size: 4.5rem;
  color: white;
  font-weight: normal;
  position: relative;
  top: 20px;
}
#home > p {
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  line-height: 1.6;
  width: 826px;
  position: relative;
  top: 30px;
}
</style>
