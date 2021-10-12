<template>
  <MenuBar />
  <div id="to-top" @click="goToTop()">
    <img src="./assets/button/back-to-top.svg" alt="" />
  </div>
  <router-view />
  <Footer />
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import Footer from "./components/FooterCopyright.vue";
export default {
  name: "App",
  components: {
    MenuBar,
    Footer,
  },
  methods: {
    goToTop() {
      document.getElementsByClassName("top-section")[0].scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "Ancaman Digital";
      },
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* FONT */
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Orbitron&family=Roboto&family=Roboto+Mono&family=Roboto+Slab&family=Titillium+Web&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#to-top {
  position: fixed;
  bottom: 20px;
  right: 30px;
  height: 64px;
  width: 64px;
  background-color: #333333;
  border-radius: 50%;
  transition: opacity 600ms ease, visibility 600ms ease;
  cursor: pointer;
  z-index: 5;
  opacity: 0;
  visibility: hidden;
  box-shadow: rgb(51 51 51) 2px 2px 8px 0px;
}
#to-top img {
  padding: 20%;
  width: 100%;
  height: 100%;
}

#to-top.visible-to-top {
  opacity: 0.7;
  visibility: visible;
}

/* GLOBAL CLASS */
/*Scroll reveal element*/
.scroll-reveal {
  opacity: 0;
  transition: opacity 500ms;
}
.scroll-reveal.scrolled {
  opacity: 1;
}
.scrolled.fade-in {
  animation: fade-in 500ms ease-in-out both;
}
.scrolled.fade-in-bottom {
  animation: fade-in-bottom 500ms ease-in-out both;
}
.scrolled.slide-left {
  animation: slide-in-left 500ms ease-in-out both;
}
.scrolled.slide-right {
  animation: slide-in-right 500ms ease-in-out both;
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-100px);
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(100px);
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/*PARAGRAPH*/
p {
  line-height: 1.6;
}
</style>
