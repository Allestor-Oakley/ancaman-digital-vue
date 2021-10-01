<template>
  <Judul 
    :color1="judul.color1"
    :color2="judul.color2"
    :title="judul.title"
    :context="judul.context">
    <div id="illustration">
      <img src="../../assets/cyber-crime/hacking/judul/hacker-without-background.png" alt="" width="430">
    </div>
  </Judul>
  <ContohKasus 
    :items="contohKasus.items"
    :imageFolder="contohKasus.imageFolder"
  />
</template>

<script>
import Judul from '../../components/Block/Judul.vue';
import ContohKasus from '../../components/Block/ContohKasus.vue'

export default {
  name : "Hack",
  components : {
    Judul,
    ContohKasus
  },
  data() {
    return {
      judul : {
        color1 : "#1a1a1a",
        color2 : "#555c66",
        title : "Hacking",
        context : "Kegiatan mengakses informasi digital tanpa kewenangan akses yang sah."
      },
      contohKasus : {
        imageFolder : "hacking",
        items: [
          {
            image : "dewan-penghianat-rakyat.jpg",
            context : "Pada 2020, situs website DPR RI diretas oleh aktivis, singkatan yang tertera pada website berubah menjadi “Dewan Penghianat Rakyat”. Serangan ini merupakan jenis serangan DOS."
          },
          {
            image : "3-tiket-rugi-miliaran-rupiah.png",
            context : "Pada 2017, seorang remaja berumur 19 tahun memimpin dua orang lainnya untuk menyerang Tiket.com dan Citilink. Mereka mencuri kode booking penerbangan dan menjualnya di facebook dengan potongan harga sehingga banyak dibeli orang lain."
          },
          {
            image : "yahoo-logo.jpg",
            context : "Situs Yahoo terkena serangan pencurian data besar-besaran pada 2014, mengakibatkan setidaknya kebocoran data 500 juta pengguna."
          },
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
