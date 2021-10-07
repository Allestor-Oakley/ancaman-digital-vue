<template>
  <Judul 
    :color1="judul.color1"
    :color2="judul.color2"
    :title="judul.title"
    :context="judul.context">
    <div id="illustration">
      <img src="../../assets/cyber-crime/scam/judul/scam.png" alt="" width="430">
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
  data() {
    return {
      name : "hacking",
      judul : {
        color1 : "#478ac9",
        color2 : "#2cccc4",
        title : "Scam",
        context : "Kontent elektronik yang bersifat menipu, sehingga pengirimnya akan mendapat manfaat dan keuntungan tertentu."
      },
      contohKasus : {
        items: [
          {
            image : "dewan-penghianat-rakyat.jpg",
            context : "Pelaku mengirim SMS secara acak yang berisi iming-iming hadiah. SMS itu berisi bahwa penerima SMS akan mendapatkan uang Rp 100 juta dalam rangka M-Kios. SMS itu akan tersebar ke 2000 nomor acak. Beberapa korban tergiur dengan hadiah dalam pesan ini dan akhirnya tertipu. 2 orang telah ditangkap.",
            url : "https://news.detik.com/berita/d-4016215/tawarkan-hadiah-rp-100-juta-penipu-modus-m-kios-dibekuk "
          },
          {
            image : "3-tiket-rugi-miliaran-rupiah.png",
            context : "Penipuan ini bermoduskan mengaku-ngaku sebagai kasir sebuah minimarket lewat pesan singkat. Dalam pesannya, si pelaku mengaku salah kirim kode voucher game dan meminta korban mengirimkan kode vouchernya, tapi kode yang diberikan korban bukanlah voucher game, melainkan kode OTP (One Time Passwords) untuk membajak akun WhatsApp korban.",
            url : "https://m.tribunnews.com/nasional/2021/02/17/cerita-pria-jadi-korban-penipuan-online-ada-orang-yang-mengaku-kasir-minimarket-meminta-kode-otp "
          },
          {
            image : "yahoo-logo.jpg",
            context : "Pelaku menipu korbannya dengan menawarkan beberapa produk kebutuhan bahan pokok dengan harga yang lebih murah. Korban melihat unggahan facebook pelaku, dan memesan 10 sak beras basmati, saat korban sudah transfer uang ke rekening pelaku, pelaku tidak mengirimkan barang yang dijanjikan.",
            url : "https://jogja.suara.com/read/2021/04/15/174000/modus-tawarkan-bahan-pokok-harga-miring-penipu-raup-untung-rp500-juta "
          },
        ]
      },
      tipsAndTrick : {
        items : [
          {
            image : "download.jpg",
            title : "Memeriksa Identitas Penjual",
            context : "Identitas penjual yang sangat penting diketahui adalah nama perusahaan, alamat, email, kontak yang dapat dihubungi. Perhatikan juga tanda verifikasi yang tertera pada identitas penjual. Biasanya tanda tersebut berada di setiap web misalnya top seller, star seller, verified seller, dan lain-lain."
          },
          {
            image : "link.jpg",
            title : "Melihat Testimoni atau Ulasan Pembeli",
            context : "Ulasan dari pembeli sebelumnya dapat menjadi pegangan untuk mengetahui kredibilitas online shop tersebut. Hal ini dilakukan agar konsumen baru dapat memastikan perusahaan yang akan berurusan dengan tanpa ada masalah. Ulasan yang terlalu berlebihan perlu diwaspadai."
          },
          {
            image : "usb.jpg",
            title : "Lindungi Informasi Pribadi",
            context : "Biasanya situs web online shop akan meminta rincian kartu kredit, alamat dan nomor telepon. Jika situs web tersebut meminta sesuatu yang berlebihan, Anda perlu curiga."
          },
          {
            image : "password.jpg",
            title : "Perhatikan Harga",
            context : "Pembeli akan tertarik dengan harga yang terjangkau dengan kualitas baik. Tetapi, jika harga yang diberikan terlalu murah, hal itu perlu dicurigai. Kita juga perlu berpikir realistis, bahwa barang yang berkualitas akan sebanding dengan harga yang diberikan."
          },
          {
            image : "akun.jpg",
            title : "Pembayaran yang Aman",
            context : "Anda perlu berhati-hati dalam mengeluarkan uang terutama dalam proses transaksi secara online. Sebagai perhatian khusus dan paling penting untuk membayar pada halaman yang diamankan (terdapat logo kunci dengan URL yang dimulai dengan “http”)."
          },
        ]
      },
      penanganan : {
        image : 'programmer.svg',
        content : [
          'Catat informasi apapun tentang penipu dan kumpulkan semua bukti',
          'Laporkan penipuan ke pihak berwenang',
          'Hubungi bank atau penyedia jasa transaksi online untuk membatalkan transaksi',
          'Beritahu orang terdekat untuk lebih waspada dengan penipu ini',
          'Beritahu orang yang kita percaya, agar kita bisa terbantu',
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
