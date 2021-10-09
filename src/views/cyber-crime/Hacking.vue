<template>
  <Judul 
    :color1="judul.color1"
    :color2="judul.color2"
    :title="judul.title"
    :context="judul.context">
    <div id="illustration">
      <div 
        class="matrix-animation"
        v-for="item in getMatrixData()"
        :key="item.number"
        :style="{top : item.top + 'px', left : item.left + 'px'}">
        <p :style="{animationDuration : item.duration + 's'}">{{item.number}}</p>
      </div>
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
  <Penanganan 
    :image="penanganan.image"
    :imageFolder="name"
    :content="penanganan.content"
  />
</template>

<script>
import Judul from '../../components/Block/Judul.vue';
import ContohKasus from '../../components/Block/ContohKasus.vue'
import TipsAndTrick from '../../components/Block/TipsAndTrick.vue'
import Penanganan from '../../components/Block/Penanganan.vue'

export default {
  name : "Hack",
  components : {
    Judul,
    ContohKasus,
    TipsAndTrick,
    Penanganan
  },
  methods : {
    getRandom(top, left) {
      let number = "";
      for (let i = 0; i < 5; i++) {
        number += Math.round(Math.random())
      }
      let duration = Math.round((Math.random() * 0.5 + 1.5) * 10) / 10
      return {
        "top" : top,
        "left" : left,
        "number" : number,
        "duration" : duration
      }
    },
    getMatrixData() {
      let top = [110, 70, 10, 83, 105]
      let left = [25, 85, 150, 248, 340]
      let result = []

      for (let i = 0;i < top.length; i++) {
        result.push(this.getRandom(top[i], left[i]));
      }
      return result
    }
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
            context : "Pada 2020, situs website DPR RI diretas oleh aktivis, singkatan yang tertera pada website berubah menjadi “Dewan Penghianat Rakyat”. Serangan ini merupakan jenis serangan DOS.",
            url : "https://www.kompas.tv/article/114276/situs-dpr-diretas-hacker-berubah-jadi-dewan-pengkhianat-rakyat"
          },
          {
            image : "3-tiket-rugi-miliaran-rupiah.png",
            context : "Pada 2017, seorang remaja berumur 19 tahun memimpin dua orang lainnya untuk menyerang Tiket.com dan Citilink. Mereka mencuri kode booking penerbangan dan menjualnya di facebook dengan potongan harga sehingga banyak dibeli orang lain.",
            url : "https://news.detik.com/berita/d-3460864/kasus-pembobolan-situs-tiket-online-ini-penjelasan-citilink"
          },
          {
            image : "yahoo-logo.jpg",
            context : "Situs Yahoo terkena serangan pencurian data besar-besaran pada 2014, mengakibatkan setidaknya kebocoran data 500 juta pengguna.",
            url : "https://www.reuters.com/article/us-yahoo-cyber-idUSKCN11S16P"
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
          },
          {
            image : "password.jpg",
            title : "Gunakan Password yang Aman",
            context : "Pakai password yang bervariasi dan sulit ditebak. Kombinasi yang aman adalah dengan memakai huruf kecil, huruf besar, angka, dan simbol seperti \"#\", jangan memakai informasi yang mudah ditebak seperti nama diri sendiri atau tanggal ulang tahun."
          },
          {
            image : "akun.jpg",
            title : "Jangan Membagikan Informasi Akun kepada Orang Lain",
            context : "Jangan memberikan nama pengguna dan password/kata sandi kepada orang lain. Simpan informasi tersebut sebagai rahasia dan jangan sampai orang lain bisa mengetahui atau menebak informasi tersebut."
          },
          {
            image : "update.jpg",
            title : "Selalu Perbarui Perangkat Lunak",
            context : "Perbaharui/update perangkat lunak agar galat/bug serta masalah pada versi lama hilang dengan adanya versi baru. Biasanya versi baru akan berisi perbaikan untuk masalah-masalah tersebut."
          },
          {
            image : "antivirus.jpg",
            title : "Gunakan Produk Anti Malware",
            context : "Gunakan antivirus dan program/perangkat lunak lainnya yang berfungsi untuk mencari dan mengatasi virus dan malware, dengan begitu ancaman bisa diketahui dan langsung dihilangkan."
          },
          {
            image : "usb.jpg",
            title : "Pindai Hard Drive atau USB Sebelum Digunakan",
            context : "Pindai/Scan hard drive, usb, flashdisk, dan lainnya. Dengan demikian apabila ternyata ada suatu masalah seperti keberadaan malware di dalam perangkat penyimpanan tersebut, kita akan mengetahuinya sebelum terjadi kerusakan."
          },
        ]
      },
      penanganan : {
        image : 'programmer.svg',
        content : [
          'Cari data apa saja yang sudah terkena hacking',
          'Hubungi pihak-pihak yang terkait, seperti bank atau lembaga lainnya',
          'Ganti password/kata sandi  dengan yang lebih kuat sesegera mungkin',
          'Laporkan insiden kepada pemerintah dan penegak hukum',
          'Perhatikan aktivitas mencurigakan yang terjadi setelahnya',
          'Periksa apakah ada backdoor yang ditanam di sistem kita',
          'Beritahu orang yang terhubung kepada kita secara digital bahwa kita sudah dihack'
        ]
      }
    }
  }
}
</script>

<style scoped>
#illustration {
  position: relative;
}
#illustration img {
  position: relative;
  z-index: 2;
}
.matrix-animation {
  overflow: hidden;
  height: 100px;
  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.4)), to(rgba(0,0,0,1)));
  mask-image: gradient(linear,top, bottom, from(rgba(0,0,0,0.4)), to(rgba(0,0,0,1)));
  font-size: 19px;
  position: absolute;
  z-index: 1;
}
.matrix-animation p {
  writing-mode: vertical-rl;
  text-orientation: upright;
  color: white;
  font-family: 'Titillium Web', sans-serif;
  font-weight: 600;
  animation: slidedown infinite linear;
}
@keyframes slidedown {
    0%{
      transform: translateY(-150px);
    }
    100%{
      transform: translateY(100px);
    }
}
</style>
