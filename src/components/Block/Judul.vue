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

<style>
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
  width: 70%;
  text-align: left;
  margin-top: 40px;
  line-height: 1.6;
}

@media (max-width : 1060px) {
  #title {
    flex-direction: column-reverse;
    justify-content: center;
  }
  #title-context {
    height: 25%;
  }
  #title-context h1{
    margin-top: 75px;
    text-align: center;
    font-size: 3.75rem;
  }
  #title-context p{
    text-align: center;
    width: 450px;
  }
}

@media (max-width : 500px) {
  #title {
    padding: 0 4vw;
  }
  #illustration {
    display: none;
  }
  #title-context {
    top: 0;
    width: 100%;
  }
  #title-context h1{
    font-size: 3.25rem;
    width: 100%;
  }
  #title-context p{
    font-size: 1.1rem;
    width: 100%;
  }
}
</style>
