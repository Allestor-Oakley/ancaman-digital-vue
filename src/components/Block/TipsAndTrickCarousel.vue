<template>
  <div id="tat-carousel">
    <img
      id="carousel-prev"
      class="carousel-button"
      src="../../assets/cyber-crime/button/prev.svg"
      @click="prevButton"
      :style="{opacity : getOpacity('left'), cursor : getOpacity('left') == 0 ? 'default' : 'pointer'}">
    <div id="carousel-wrapper">
      <div
        id="carousel-container"
        :style="{transform : 'translateX(-' + position + '%)'}">
        <TipsAndTrickItem
          :imageFolder="imageFolder"
          v-for="item in items"
          :key="item.image"
          :image="item.image"
          :context="item.context"
          :title="item.title"/>
      </div>
    </div>
    <img
      id="carousel-next"
      class="carousel-button"
      src="../../assets/cyber-crime/button/next.svg"
      @click="nextButton"
      :style="{opacity : getOpacity('right'), cursor : getOpacity('right') == 0 ? 'default' : 'pointer'}">
  </div>
</template>

<script>
import TipsAndTrickItem from './TipsAndTrickItem.vue'
export default {
  name : "TipsAndTrickCarousel",
  components : {
    TipsAndTrickItem
  },
  data() {
    return {
      position : 0,
      moving : false,
      duration : 600
    }
  },
  props : {
    imageFolder : String,
    items : Array
  },
  methods : {
    nextButton() {
      if (!this.moving && this.position/100 + 1 != this.items.length){
        this.position += 100;
        this.moving = true;
        setTimeout(() => {
          this.moving = false
        }, this.duration)
      }
    },
    prevButton() {
      if (!this.moving && this.position != 0){
        this.position -= 100;
        this.moving = true;
        setTimeout(() => {
          this.moving = false
        }, this.duration)
      }
    },
    getOpacity(pos) {
      if (pos == 'left' && this.position == 0) {
        return 0;
      }
      else if (pos == 'right' && this.position/100 + 1 == this.items.length) {
        return 0;
      }
      else {
        return 1;
      }
    }
  }
}
</script>

<style scoped>
#tat-carousel {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
#carousel-wrapper {
  width: 1140px;
  height: 300px;
  overflow: hidden;
  position: relative;
}
#carousel-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  position: relative;
  right: 0;
  transition: transform 600ms ease;
}
.carousel-button {
  transition: opacity 600ms ease;
  margin: 0 5px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  opacity: 1;
}
</style>
