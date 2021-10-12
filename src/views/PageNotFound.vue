<template>
  <section id="home" class="top-section">
    <h1>404</h1>
    <p>Page Not Found</p>
  </section>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped>
#home {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#home h1 {
  font-size: 64px;
  font-weight: normal;
  font-family: "Titillium Web", sans-serif;
}
#home p {
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
}
</style>
