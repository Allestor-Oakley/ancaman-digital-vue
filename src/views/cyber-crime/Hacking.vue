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
    :imageFolder="name"
  />
  <TipsAndTrick 
    :items="tipsAndTrick.items"
    :imageFolder="name"
  />
</template>

<script>
import Judul from '../../components/Block/Judul.vue';
import ContohKasus from '../../components/Block/ContohKasus.vue'
import TipsAndTrick from '../../components/Block/TipsAndTrick.vue'

export default {
  name : "Hack",
  components : {
    Judul,
    ContohKasus,
    TipsAndTrick
  },
  data() {
    return {
      name : "hacking",
      judul : {
        color1 : "#1a1a1a",
        color2 : "#555c66",
        title : "Hacking",
        context : "Kegiatan mengakses informasi digital tanpa kewenangan akses yang sah."
      },
      contohKasus : {
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
      },
      tipsAndTrick : {
        items : [
          {
            image : "download.jpg",
            title : "Download dari Situs Resmi",
            context : "Jangan mengunduh dari situs-situs yang tidak resmi dan tidak jelas status keamanannya. Seringkali ada file-file bermuatan virus, malware, dan lain sebagainya pada situs yang tidak resmi, karena kurangnya regulasi keamanan disana. Periksa nama dan domain website. "
          },
          {
            image : "link.jpg",
            title : "Jangan Klik Tautan Sembarangan",
            context : "Jangan pernah menekan tautan yang tidak diketahui sembarangan. Periksa dahulu nama dan domain tautan tersebut. Berhati-hatilah, apabila nama dan domainnya terkesan aneh dan tidak wajar atau acak, bisa jadi itu merupakan jebakan phishing."
          },
          {
            image : "usb.jpg",
            title : "Pindai Hard Drive atau USB Sebelum Digunakan",
            context : "Pindai/Scan hard drive, usb, flashdisk, dan lainnya. Dengan demikian apabila ternyata ada suatu masalah seperti keberadaan malware di dalam perangkat penyimpanan tersebut, kita akan mengetahuinya sebelum terjadi kerusakan."
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
