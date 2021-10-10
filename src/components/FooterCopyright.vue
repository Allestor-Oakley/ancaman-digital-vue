<template>
  <footer>
    <p> © Copyright 2021 YuRa Group. All Rights Reserved </p>
  </footer>
</template>

<script>
import scrollEvent from '../scrollEvent.js'
export default {
  name : "Footer",
  mounted() {
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
    const {scrollElements, handleScrollAnimation, showBackToTop} = scrollEvent()
    
    window.addEventListener('scroll', () => {
      throttle(() => {
        if (scrollElements.length > 0) {
          handleScrollAnimation()
        }
        showBackToTop()
      }, 250)
    });
  }
}
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
  font-family: 'Montserrat', sans-serif;
  color: white;
}
</style>
