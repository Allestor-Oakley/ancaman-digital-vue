<template>
  <footer>
    <p>© Copyright 2021 YuRa Group. All Rights Reserved</p>
  </footer>
</template>

<script>
import scrollEvent from '../scrollEvent';
export default {
  name: "Footer",
  data() {
    return {
      throttleTimer : false,
      scrollEvent : scrollEvent()
    }
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
        this.scrollEvent.showBackToTop();
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

<style scoped>
footer {
  background-color: #333333;
  min-height: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
footer p {
  font-family: "Montserrat", sans-serif;
  color: white;
}
</style>
