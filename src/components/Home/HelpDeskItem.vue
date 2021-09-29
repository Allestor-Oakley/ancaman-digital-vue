<template>
  <div class="helpdesk-submenu scroll-reveal fade-in">
    <img :src="getImgUrl(image)" :alt="image" width="107">
    <h4>{{ title }}</h4>
    <p>{{ contents }}</p>
  </div>
</template>

<script>
export default {
  name : "HelpDeskItem",
  props : {
    image : String,
    title : String,
    contents : String
  },
  methods : {
    getImgUrl(pic) {
      '../../assets/home/helpdesk/'
      return require("@/assets/home/helpdesk/" + pic)
    }
  },
  mounted() {
    // thanks:
    // https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671 

    let throttleTimer = false;

    const throttle = (callback, time) => {
      //don't run the function while throttle timer is true
      if (throttleTimer) return;

      //first set throttle timer to true so the function doesn't run
      throttleTimer = true;

      setTimeout(() => {
        //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed 
        callback();
        throttleTimer = false;
      }, time);
    }
    const scrollElements = document.querySelectorAll(".scroll-reveal");

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop <=
          (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const elementOutofView = (el) => {
      const elementTop = el.getBoundingClientRect().top;

      return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add("scrolled");
    };

    const hideScrollElement = (element) => {
      element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () =>{
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else if (elementOutofView(el)) {
          hideScrollElement(el);
        }
      })
    };

    window.addEventListener('scroll', () => {
      throttle(handleScrollAnimation, 250);
    });

  }
}
</script>

<style scoped>
.helpdesk-submenu {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 17px 30px;
}
.helpdesk-submenu img {
  border-radius: 50%;
}
.helpdesk-submenu h4 {
  font-family: 'Roboto Slab', sans-serif;
  font-weight: normal;
  font-size: 24px;
  margin: 11px 0;
}
.helpdesk-submenu p {
  font-family: 'Montserrat', sans-serif;
  margin: 11px 0;
  line-height: 1.6;
}
</style>
