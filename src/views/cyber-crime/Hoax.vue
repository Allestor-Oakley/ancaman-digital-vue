<template>
  <Judul
    :color1="judul.color1"
    :color2="judul.color2"
    :title="judul.title"
    :context="judul.context"
  >
    <div id="illustration">
      <div
        class="question-mark"
        v-for="item in getQuestionMarkData()"
        :key="item.duration"
        :style="{
          top: item.top + 'px',
          left: item.left + 'px',
          animationDuration: item.duration + 's',
        }"
      >
        <img
          src="@/assets/cyber-crime/hoax/judul/question-mark-white.svg"
          alt=""
          width="43"
        />
      </div>
      <img
        src="../../assets/cyber-crime/hoax/judul/fake-news-without-bubble.png"
        alt=""
        width="340"
      />
      <div id="bubble-text">
        <img
          src="../../assets/cyber-crime/hoax/judul/fake-news-bubble.png"
          alt=""
          width="200"
        />
      </div>
    </div>
  </Judul>
  <ContohKasus :items="contohKasus.items" :imageFolder="name" />
  <TipsAndTrick :items="tipsAndTrick.items" :imageFolder="name" />
  <Penanganan
    :image="penanganan.image"
    :imageFolder="name"
    :content="penanganan.content"
  />
</template>

<script>
import Judul from "../../components/Block/Judul.vue";
import ContohKasus from "../../components/Block/ContohKasus.vue";
import TipsAndTrick from "../../components/Block/TipsAndTrick.vue";
import Penanganan from "../../components/Block/Penanganan.vue";

export default {
  components: {
    Judul,
    ContohKasus,
    TipsAndTrick,
    Penanganan,
  },
  methods: {
    getRandom(top, left) {
      let duration = Math.round((Math.random() * 0.5 + 1.5) * 10) / 10;
      return {
        top: top,
        left: left,
        duration: duration,
      };
    },
    getQuestionMarkData() {
      let top = [60, 50, 20, 60];
      let left = [10, 120, 240, 350];
      let result = [];
      for (let i = 0; i < top.length; i++)
        [result.push(this.getRandom(top[i], left[i]))];
      return result;
    },
  },
  data() {
    return {
      name: "hoax",
      judul: {
        color1: "#9933ff",
        color2: "#bf80ff",
        title: "Hoax",
        context:
          "Informasi palsu, berita bohong, atau fakta yang dipelintir atau direkayasa untuk tujuan lelucon hingga tujuan serius.",
      },
      contohKasus: {
        items: [
          {
            image: "ratna-sarumpaet.jpg",
            context:
              "Hoax ini dulu sempat ramai di Indonesia, pada 2018, Ratna Sarumpaet ditangkap atas kasus penyebaran berita bohong atau hoax. Kala itu Ratna mengklaim bahwa dirinya telah dianiaya. Klaimnya beredar di Facebook dan kemudian dibenarkan oleh politisi. Setelah kepolisian melakukan penyelidikan, terungkaplah bahwa hal itu tidak benar. Ratna pun mengakuinya dan dia ditangkap. ",
            url:
              "https://nasional.tempo.co/read/1133129/begini-kronologi-kasus-hoax-ratna-sarumpaet",
          },
          {
            image: "foto-vaksin.jpg",
            context:
              "Beredar kabar tentang vaksin COVID-19 yang megandung mikrocip magnetis. Hoax ini tersebar dalam bentuk video, dalam video tersebut penyebar memperlihatkan koin nikel yang menempel di tempat dimana vaksin disuntikkan. Berita ini adalah hoaks, karena jarum vaksin terlalu kecil untuk bisa dilalui oleh bahan seperti mikrocip.",
            url:
              "https://sehatnegeriku.kemkes.go.id/baca/berita-utama/20210528/1137831/hoax-vaksin-covid-19-mengandung-mikrocip-magnetis/",
          },
          {
            image: "hoaks-vaksin.jpg",
            context:
              "Postingan ini berisi informasi bahwa vaksin Covid-19 akan membunuh penerimanya, postingan ini juga mengatakan bahwa sumber dari informasi ini berasal dari seorang ilmuwan yang sebelumnya bekerja dalam pembuatan vaksin tersebut.",
            url:
              "https://www.jawapos.com/hoax-atau-bukan/22/06/2021/hoax-vaksin-covid-19-mempercepat-kematian/",
          },
        ],
      },
      tipsAndTrick: {
        items: [
          {
            image: "blog-title.jpg",
            title: "Hati-hati dengan Judul Provokatif",
            context:
              "Berita hoax seringkali menggunakan judul sensasional yang provokatif. Oleh karena itu, apabila menjumpai berita denga judul provokatif, sebaiknya Anda mencari referensi berupa berita serupa dari situs online resmi, kemudian bandingkan isinya.",
          },
          {
            image: "situs.jpg",
            title: "Cermati Alamat Situs",
            context:
              "Untuk informasi yang diperoleh dari website atau mencantumkan link, cermatilah alamat URL situs dimaksud. Apabila berasal dari situs yang belum terverifikasi sebagai institusi pers resmi -misalnya menggunakan domain blog, maka informasinya bisa dibilang meragukan.",
          },
          {
            image: "fakta.jpg",
            title: "Periksa Fakta",
            context:
              "Perhatikan dari mana berita berasal dan siapa sumbernya? Apakah dari institusi resmi seperti KPK atau Polri? Sebaiknya jangan cepat percaya apabila informasi berasal dari pegiat ormas, tokoh politik, atau pengamat. Perhatikan juga keberimbangan sumber berita. Jika hanya ada satu sumber, pembaca tidak bisa mendapatkan gambaran yang utuh.",
          },
          {
            image: "foto.jpg",
            title: "Cek Keaslian Foto",
            context:
              "Cara untuk mengecek keaslian foto bisa dengan memanfaatkan mesin pencari Google, yakni dengan melakukan drag-and-drop ke kolom pencarian Google Images. Hasil pencarian akan menyajikan gambar-gambar serupa yang terdapat di internet sehingga bisa dibandingkan.",
          },
          {
            image: "grup.jpg",
            title: "Ikut Serta Group Anti-hoax",
            context:
              "Jangan memberikan nama pengguna dan password/kata sandi kepada orang lain. Simpan informasi tersebut sebagai rahasia dan jangan sampai orang lain bisa mengetahui atau menebak informasi tersebut.",
          },
        ],
      },
      penanganan: {
        image: "mobile-user.svg",
        content: [
          "Berikan klarifikasi apabila terlanjur menyebar berita hoaks",
          "Cari tahu sumber berita tersebut dan catat, jangan sampai terjatuh ke lubang yang sama",
          "Perkirakan siapa yang mungkin ada dibalik hoax tersebut, waspadai pihak-pihak tersebut",
          "Cari informasi dari sudut pandang dan sumber lain untuk mencegah subjektivitas",
        ],
      },
    };
  },
};
</script>

<style scoped>
#illustration {
  position: relative;
}
#illustration > img {
  z-index: 2;
  position: relative;
  top: 30px;
}
.question-mark {
  position: absolute;
  z-index: 1;
  animation: slide-up-opacity infinite ease;
}
@keyframes slide-up-opacity {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-200px);
  }
}
#bubble-text {
  position: absolute;
  z-index: 3;
  top: 45px;
  left: 190px;
}
</style>
