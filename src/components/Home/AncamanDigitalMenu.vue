<template>
  <FourItemsSection title="Ancaman Digital">
    <AncamanDigitalItem
      v-for="item in cybercrime" 
      :key="item.title" 
      :image="item.image" 
      :title="item.title" 
      :contents="item.content"/>
  </FourItemsSection>

</template>

<script>
import FourItemsSection from './FourItemsSection.vue'
import AncamanDigitalItem from './AncamanDigitalItem.vue'
export default {
  name : 'AncamanDigitalMenu',
  components : {
    AncamanDigitalItem,
    FourItemsSection
  },
  data() {
    return {
      cybercrime : [
        {
          title : "Hacking",
          image : "hacker.svg",
          content : "Peretasan atau pencurian data"
        },
        {
          title : "Hoax",
          image : "fake-news.svg",
          content : "Berita palsu atau bohong"
        },
        {
          title : "Malware",
          image : "virus-scan.svg",
          content : "Perangkat lunak berbahaya"
        },
        {
          title : "Scam",
          image : "scam.svg",
          content : "Penipuan dan \n phishing"
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
