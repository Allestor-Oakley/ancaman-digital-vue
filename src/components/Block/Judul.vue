<template>
  <section id="title" :style="{background: 'linear-gradient(' + color1 + ',' + color2 + ')'}">
    <div id="title-context">
      <h1>{{title}}</h1>
      <p>{{context}}</p>
    </div>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props : {
    color1 : String,
    color2 : String,
    title : String,
    context : String
  },
}
</script>

<style scoped>
#title {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color : white;
  padding: 0 15vh;
}
#title-context {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  position: relative;
  left: 10px;
  top: 15px;
}
#title-context h1 {
  font-family: 'Orbitron', sans-serif;
  font-size: 72px;
  font-weight: normal;
  text-align: left;
  margin-bottom: 18px;
}
#title-context p {
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  width: 570px;
  text-align: left;
  margin-top: 40px;
  line-height: 1.6;
}
</style>
