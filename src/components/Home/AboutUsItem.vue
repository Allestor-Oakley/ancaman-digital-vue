<template>
  <div class="about-us-item">
    <div class="about-us-avatar"
    :style="{ backgroundImage: 'url(' + getImgUrl(image) + ')', backgroundPosition: '50%'+ ypos +'%'}"></div>
    <h2>{{name}}</h2>
    <p>{{contents}}</p>
  </div>
</template>

<script>
export default {
  name : "AboutUsItem",
  props : {
    image : String,
    name : String,
    contents : String,
    ypos : String
  },
  methods : {
    getImgUrl(pic) {
      return require("@/assets/home/about-us/" + pic)
    }
  }
}
</script>

<style scoped>
.about-us-item {
  background-color: #e2e6e9;
  border-radius: 20px;
  box-shadow: 2px 2px 8px 0 rgb(128 128 128);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 30px;
  color: black;
}
.about-us-avatar {
  width: 130px;
  height: 130px;
  background-size: cover;
  border-radius: 50%;
  box-shadow: 2px 2px 8px 0 rgba(128,128,128,1);
  margin-top: 10px;
}
.about-us-item h2 {
  font-family: 'Roboto Condensed',sans-serif;
  font-weight: normal;
  font-size: 36px;
  margin-top: 30px;
}
.about-us-item p {
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
  margin-top: 12px;
}
</style>

