<template>
  <section class="fm-sec" :style="{ backgroundColor: background }">
    <h1 :style="{ color: titleColor }">{{ title }}</h1>
    <div class="f-menu-container scroll-reveal fade-in">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "ForItemsSection",
  props: {
    title: String,
    background: String,
    titleColor: String,
  },
};
</script>

<style>
.fm-sec {
  width: 100%;
  height: 100vh;
  background-color: #fbfbfb;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-bottom: 20vh;
  align-items: center;
  position: relative;
}
.fm-sec h1 {
  font-family: "Titillium Web", sans-serif;
  font-size: 3rem;
  font-weight: normal;
  color: black;
  position: relative;
}
.f-menu-container {
  display: grid;
  grid-gap: 46px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 1140px;
  position: relative;
  top: 50px;
  pointer-events: none;
}
.f-menu-container > div {
  transition: transform 0.2s, opacity 0.3s;
  pointer-events: auto;
  opacity: 1;
}
.f-menu-container:hover > div:not(:hover) {
  opacity: 0.5;
}
.f-menu-container:hover > .ancaman-digital-submenu:hover {
  transform: scale(1.13);
}

@media (max-width: 1155px) {
  .f-menu-container {
    width: 960px;
  }
  .fm-sec h1 {
    font-size: 2.5rem;
  }
}
@media (max-width: 975px) {
  .f-menu-container {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    width: 740px;
  }
}
@media (max-width: 755px) {
  .f-menu-container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 540px;
    top: 10px;
  }
  .fm-sec {
    padding: 0;
  }
  .fm-sec h1 {
    font-size: 2.25rem;
  }
}
@media (max-height: 600px) {
  .fm-sec {
    justify-content: flex-start;
    height: 110vh;
  }
  .fm-sec h1 {
    margin: 30px 0;
  }
}
@media (max-width: 575px) {
  .f-menu-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    width: 240px;
  }
  .fm-sec {
    height: 1200px;
  }
  .fm-sec h1 {
    font-size: 2rem;
  }
}
</style>
