<template>
  <div id="home" class="top-section">
    <h1>Ancaman Digital</h1>
    <p>
      Ancaman terhadap informasi sensitif pada sistem komputer atau jaringan
      internet.
    </p>
  </div>
  <AncamanDigitalMenu />
  <HelpDesk />
  <AboutUs />
</template>

<script>
import AncamanDigitalMenu from "../components/Home/AncamanDigitalMenu.vue";
import HelpDesk from "../components/Home/HelpDesk.vue";
import AboutUs from "../components/Home/AboutUs.vue";
export default {
  name: "Home",
  components: {
    AncamanDigitalMenu,
    HelpDesk,
    AboutUs,
  },
};
</script>

<style scoped>
#home {
  max-width: 100%;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url("../assets/home/title/background.png");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position-x: 50%, 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#home > h1 {
  font-family: "Orbitron", sans-serif;
  font-size: 4.5rem;
  color: white;
  font-weight: normal;
  position: relative;
  top: 20px;
}
@media (max-width: 767px) {
  #home > h1 {
    font-size: 3.75rem;
  }
}
@media (max-width: 575px) {
  #home > h1 {
    font-size: 3rem;
  }
}

#home > p {
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 1.25rem;
  line-height: 1.6;
  position: relative;
  top: 30px;
  max-width: 100%;
  width: 100vh;
  padding: 20px;
}
</style>
