<template>
  <div class="helpdesk-submenu">
    <a :href="`${link}`" target="_blank">
      <img :src="getImgUrl(image)" :alt="image" width="107">
      <h4>{{ title }}</h4>
      <p>{{ contents }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name : "HelpDeskItem",
  props : {
    image : String,
    title : String,
    contents : String,
    link : String
  },
  methods : {
    getImgUrl(pic) {
      '../../assets/home/helpdesk/'
      return require("@/assets/home/helpdesk/" + pic)
    }
  },
}
</script>

<style scoped>
a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}
.helpdesk-submenu {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 17px 30px;
  height: 220px;
}
.helpdesk-submenu img {
  border-radius: 50%;
}
.helpdesk-submenu h4 {
  font-family: 'Roboto Slab', sans-serif;
  font-weight: normal;
  font-size: 24px;
  margin: 11px 0;
}
.helpdesk-submenu p {
  font-family: 'Montserrat', sans-serif;
  margin: 11px 0;
  line-height: 1.6;
}
</style>
