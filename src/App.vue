<template>
  <MenuBar />
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>
  <Footer />
</template>

<script>
import MenuBar from "./components/MenuBar.vue"
import Footer from './components/FooterCopyright.vue'
export default {
  name : "App",
  components : {
    MenuBar,
    Footer
  },
  watch: {
        $route: {
          immediate: true,
          handler(to) {
            document.title = to.meta.title || 'Ancaman Digital';
          }
        },
    }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* FONT */
/*TODO : change this to just one line at the end*/
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
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
/* TODO : responsive grid */

</style>
