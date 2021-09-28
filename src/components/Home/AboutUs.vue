<template>
  <div id="about-us">
    <h1>About Us</h1>
    <div id="about-us-container">
      <AboutUsItem />
    </div>
  </div>
</template>

<script>
import AboutUsItem from './AboutUsItem.vue'

export default {
  name : "AboutUs",
  components : {
    AboutUsItem
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

#about-us-container {
  display: grid;
}
</style>
