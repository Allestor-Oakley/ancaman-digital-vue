<template>
  <section id="about-us">
    <h1>About us</h1>
    <div id="about-us-container">
      <AboutUsItem
        v-for="person in persons"
        :key="person.name"
        :name="person.name"
        :image="person.image"
        :contents="person.contents"
        :ypos="person.ypos"
        :whatsapp="person.whatsapp"
        :instagram="person.instagram"
      />
    </div>
  </section>
</template>

<script>
import AboutUsItem from "./AboutUsItem.vue";
import scrollEvent from '../../scrollEvent.js'

export default {
  name: "AboutUs",
  components: {
    AboutUsItem,
  },
  data() {
    return {
      persons: [
        {
          name: "M. Rafi Ramadhan",
          image: "rafi-kontingen.jpg",
          contents:
            "Nama saya Rafi, hobi saya menulis dan menggambar. Saya bekerja di tim ini sebagai konten kreator.",
          ypos: "19.94",
          whatsapp: "https://wa.me/6281322524858",
          instagram: "https://www.instagram.com/mrafirmdhn_/",
        },
        {
          name: "Yusuf Rahman P.",
          image: "foto-pramuka-yusuf.png",
          contents:
            "Halo, nama saya Yusuf, saya suka membaca dan coding. Saya bekerja sebagai web desainer di tim ini.",
          ypos: "34.62",
          whatsapp: "https://wa.me/6281380035179",
          instagram: "https://www.instagram.com/y.rahman.p/",
        },
      ],
      scrollEvent : scrollEvent(),
      throttleTimer : false,
    };
  },
  methods : {
    throttle(callback, time) {
      if (this.throttleTimer) {
        return;
      }
      this.throttleTimer = true;
      setTimeout(() => {
        callback();
        this.throttleTimer = false;
      }, time);
    },
    scrollHandler() {
      this.throttle(() => {
        if (this.scrollEvent.scrollElements.length > 0){
          this.scrollEvent.handleScrollAnimation();
        }
      }, 250);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandler)
  },
  unmounted() {
    window.addEventListener("scroll", this.scrollHandler)
  }
};
</script>

<style>
#about-us {
  width: 100%;
  height: 100vh;
  background-color: #f6f7fb;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
#about-us h1 {
  font-family: "Titillium Web", sans-serif;
  font-weight: normal;
  color: black;
  font-size: 48px;
}
#about-us-container {
  width: 740px;
  min-height: 400px;
  display: grid;
  grid-gap: 100px;
  grid-template-columns: 1fr 1fr;
  position: relative;
  bottom: 40px;
}

@media (max-width: 825px) {
  #about-us {
    height: 120vh;
  }
  #about-us-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    bottom: 10px;
    width: 450px;
  }
  #about-us h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 600px) {
  #about-us-container {
    width: 320px;
  }
  #about-us-container div {
    padding: 0 10px;
  }
  #about-us h1 {
    font-size: 2.25rem;
  }
  #about-us-container div h2 {
    font-size: 1.75rem;
  }
  #about-us-container div p {
    font-size: 0.9rem;
  }
}

@media (max-width: 400px) {
  #about-us {
    height: 1100px;
  }
  #about-us-container {
    width: 250px;
  }
}
</style>
