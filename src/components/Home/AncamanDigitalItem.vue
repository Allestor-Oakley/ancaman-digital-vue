<template>
  <div class="ancaman-digital-submenu">
    <img :src="getImgUrl(image)" :alt="image" width="48" height="48">
    <h5>{{ title }}</h5>
    <p>{{ contents }}</p>
  </div>
</template>

<script>
export default {
  name : 'AncamanDigitalItem',
  props : {
    title : String,
    image : String, 
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
.ancaman-digital-submenu {
  background-color: #f2f2f2;
  color: black;
  border-radius: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 2px 8px 0 rgb(128 128 128);
  padding: 50px 32px;
}
.ancaman-digital-submenu img {
  position: relative;
  bottom: 10px;
}
.ancaman-digital-submenu h5{
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: normal;
}
.ancaman-digital-submenu p {
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
}
</style>
