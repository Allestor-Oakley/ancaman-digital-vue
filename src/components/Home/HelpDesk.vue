<template>
  <FourItemsSection
    :titleColor="titleColor"
    :background="color"
    title="Helpdesk"
  >
    <HelpDeskItem
      v-for="item in items"
      :key="item.title"
      :image="item.image"
      :title="item.title"
      :contents="item.contents"
      :link="item.link"
    />
  </FourItemsSection>
</template>

<script>
import FourItemsSection from "./FourItemsSection.vue";
import HelpDeskItem from "./HelpDeskItem.vue";

export default {
  name: "HelpDesk",
  components: {
    HelpDeskItem,
    FourItemsSection,
  },
  data() {
    return {
      color: "#292e32",
      titleColor: "white",
      items: [
        {
          image: "lapor-logo.jpeg",
          title: "LAPOR!",
          contents: "Buatlah pengaduan ke situs LAPOR!.",
          link: "https://www.lapor.go.id/",
        },
        {
          image: "aduankonten.jpg",
          title: "AduanKonten",
          contents: "Laporkan konten negatif ke aduankonten.",
          link: "https://www.aduankonten.id/",
        },
        {
          image: "ikon-polisi-siber.png",
          title: "Patroli Siber",
          contents: "Laporkan kejahatan siber ke situs Patroli siber.",
          link: "https://patrolisiber.id/report/my-account",
        },
        {
          image: "pikobar.jpg",
          title: "Pikobar",
          contents: "Pusat informasi COVID 19 Jawa Barat.",
          link: "https://pikobar.jabarprov.go.id/",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
