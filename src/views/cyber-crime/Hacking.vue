<template>
  <Judul 
    :color1="color1"
    :color2="color2"
    :title="title"
    :context="context">
    <div id="illustration">
      <img src="../../assets/cyber-crime/hacking/judul/hacker-without-background.png" alt="" width="430">
    </div>
  </Judul>
</template>

<script>
import Judul from '../../components/Block/Judul.vue';
export default {
  name : "Hack",
  components : {
    Judul
  },
  data() {
    return {
      color1 : "#1a1a1a",
      color2 : "#555c66",
      title : "Hacking",
      context : "Kegiatan mengakses informasi digital tanpa kewenangan akses yang sah."
    }
  }
}
</script>

<style scoped>

</style>
