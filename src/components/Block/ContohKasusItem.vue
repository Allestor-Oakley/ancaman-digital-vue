<template>
  <div class="contoh-kasus-item">
    <a :href="`${url}`" target="_blank">
      <img :src="getImageUrl()" alt="">
      <div class="hidden-text">
        <p>{{context}}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name : "ContohKasusItem",
  props : {
    imageFolder : String,
    image : String,
    context : String,
    url : String
  },
  methods : {
    getImageUrl() {
      return require(`@/assets/cyber-crime/${this.imageFolder}/contoh-kasus/${this.image}`)
    }
  }
}
</script>


<style scoped>
.contoh-kasus-item {
  box-shadow: 0px 5px 13px 0px rgb(128 128 128);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}
.contoh-kasus-item img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.contoh-kasus-item .hidden-text{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  position: absolute;
  left: -100%;
  top: 0;
  background-image: linear-gradient(0deg, rgba(64,64,64,0.8), rgba(64,64,64,0.8));
  color: white;
  padding: 0 20px;
  transition: transform 500ms ease;
}
.contoh-kasus-item:hover .hidden-text {
  transform: translateX(100%);
}
.contoh-kasus-item p {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
}
</style>
