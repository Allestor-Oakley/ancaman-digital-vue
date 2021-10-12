<template>
  <FourItemsSection title="Ancaman Digital">
    <AncamanDigitalItem
      v-for="item in cybercrime"
      :key="item.title"
      :image="item.image"
      :title="item.title"
      :contents="item.content"
      :url="item.url"
    />
  </FourItemsSection>
</template>

<script>
import FourItemsSection from "./FourItemsSection.vue";
import AncamanDigitalItem from "./AncamanDigitalItem.vue";
export default {
  name: "AncamanDigitalMenu",
  components: {
    AncamanDigitalItem,
    FourItemsSection,
  },
  data() {
    return {
      cybercrime: [
        {
          title: "Hacking",
          image: "hacker.svg",
          content: "Peretasan atau pencurian data",
          url: "/Hacking",
        },
        {
          title: "Hoax",
          image: "fake-news.svg",
          content: "Berita palsu atau bohong",
          url: "/Hoax",
        },
        {
          title: "Malware",
          image: "virus-scan.svg",
          content: "Perangkat lunak berbahaya",
          url: "/Malware",
        },
        {
          title: "Scam",
          image: "scam.svg",
          content: "Penipuan dan phishing",
          url: "/Scam",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
