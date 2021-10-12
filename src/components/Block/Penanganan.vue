<template>
  <section id="penanganan">
    <h1>Penanganan</h1>
    <img
      :src="require(`@/assets/cyber-crime/${imageFolder}/penanganan/${image}`)"
      alt=""
    />
    <p>{{ formatContent() }}</p>
  </section>
</template>

<script>
export default {
  name: "Penanganan",
  props: {
    image: String,
    imageFolder: String,
    content: Array,
  },
  methods: {
    formatContent() {
      let formatted_content = "";
      for (let i = 0; i < this.content.length; i++) {
        formatted_content += `${i + 1}. ${this.content[i]}\n`;
      }
      return formatted_content;
    },
  },
};
</script>

<style scoped>
#penanganan {
  width: 100%;
  height: 100vh;
  background: white;
  color: black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  grid-column-gap: 55px;
}
#penanganan h1 {
  font-weight: normal;
  font-size: 48px;
  font-family: "Titillium Web", sans-serif;
  grid-column: 1/3;
  margin: auto 0;
}
#penanganan img {
  width: 570px;
  height: 391px;
  object-fit: cover;
  grid-row: 2;
  margin-left: auto;
}
#penanganan p {
  white-space: pre-wrap;
  grid-row: 2;
  text-align: left;
  font-size: 1.125rem;
  font-family: "Montserrat", sans-serif;
  padding-right: 30%;
  -webkit-font-smoothing: antialiased;
}

@media (max-width: 1199px) {
  #penanganan {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 3fr;
    grid-gap: 0;
  }
  #penanganan img {
    display: none;
  }
  #penanganan p {
    padding: 0 15%;
  }
}
@media (max-width: 760px) {
  #penanganan {
    height: 850px;
  }
  #penanganan p {
    padding: 0 80px;
  }
}
@media (max-width: 495px) {
  #penanganan p {
    padding: 0 30px;
  }
}
</style>
