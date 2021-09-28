<template>
  <div class="about-us-item">
    <img src="" alt="">
    <h2>{{ require }}</h2>
    <p></p>
  </div>
</template>

<script>
export default {
  name : "AboutUsItem",
  props : {
    image : String,
    name : String,
    contents : String
  },
  methods : {
    getImgUrl(pic) {
      return require("@/assets/home/cybercrime-icon/" + pic)
    }
  }
}
</script>

<style scoped>
.about-us-item {
  background-color: #e2e6e9;
  width: 740px;
  min-height: 400px;
  border-radius: 20px;
  box-shadow: 2px 2px 8px 0 rgb(128 128 128);
}
</style>

