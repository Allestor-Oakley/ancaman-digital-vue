<template>
  <div class="ancaman-digital-submenu">
    <router-link class="link-no-style" :to="this.url"> </router-link>
    <div class="ancaman-digital-submenu-container">
      <img :src="getImgUrl(image)" :alt="image" width="48" height="48" />
      <h4>{{ title }}</h4>
      <p>{{ contents }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AncamanDigitalItem",
  props: {
    title: String,
    image: String,
    contents: String,
    url: String,
  },
  methods: {
    getImgUrl(pic) {
      return require("@/assets/home/cybercrime-icon/" + pic);
    },
  },
};
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
  position: relative;
}
.ancaman-digital-submenu-container {
  width: 100%;
  height: 100%;
  padding: 50px 32px;
}
.ancaman-digital-submenu img {
  position: relative;
  bottom: 10px;
}
.ancaman-digital-submenu h4 {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: normal;
}
.ancaman-digital-submenu p {
  font-family: "Montserrat", sans-serif;
  line-height: 1.6;
}
.link-no-style {
  text-decoration: none;
  cursor: pointer;
  color: black;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
}
</style>
