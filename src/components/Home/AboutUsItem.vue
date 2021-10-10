<template>
  <div class="about-us-item">
    <div class="about-us-avatar"
    :style="{ backgroundImage: 'url(' + getImgUrl(image) + ')', backgroundPosition: '50%'+ ypos +'%'}"></div>
    <h2>{{name}}</h2>
    <p>{{contents}}</p>
    <div class="hidden-icon">
      <a :href="`${whatsapp}`" target="_blank">
        <img src="../../assets/home/about-us/whatsapp-logo.png" alt="whatsapp-logo">
      </a>
      <a :href="`${instagram}`" target="_blank">
        <img src="../../assets/home/about-us/instagram-logo.png" alt="instagram-logo">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name : "AboutUsItem",
  props : {
    image : String,
    name : String,
    contents : String,
    ypos : String,
    whatsapp : String,
    instagram : String,
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
  transition: transform 600ms;
}
.about-us-item:hover {
  transform: scale(1.15);
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
  font-size: 30px;
  margin-top: 30px;
}
.about-us-item p {
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
  margin-top: 12px;
  z-index: 10;
}
.hidden-icon {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20%;
  position: relative;

  top: -50px;
  opacity: 0;
  transition: opacity 600ms, top 600ms;
}
.about-us-item:hover .hidden-icon {
  top: 0px;
  opacity: 1;
}
.hidden-icon img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  box-shadow: 2px 2px 8px 0 rgba(128,128,128,1);
  transition: transform 300ms;
}
.hidden-icon img:hover {
  transform: scale(1.13);
}

.contact-icon {
	opacity : 0;
	top : -50px;
	transition : opacity var(--s4-dur), top var(--s4-dur), transform 0.4s;
}
.contact-icon:hover {
	transform : scale(1.13);
}
.about-us-button > div > div:hover > div > div.contact-icon {
	opacity : 1;
	top : 0;
}
</style>

