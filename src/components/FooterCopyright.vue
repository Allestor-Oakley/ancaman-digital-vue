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
  mounted() {
    window.addEventListener("scroll", this.scrollEvent.showBackToTop)
  },
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
