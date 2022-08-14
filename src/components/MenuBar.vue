<template>
  <div id="menubar">
    <div
      id="menu-burger"
      @click="toggleMenu()"
      :class="[{ 'menu-clicked': menuIsVisible }]"
    >
      <svg width="28" height="28" version="1.1" viewBox="0 0 31.75 31.75" xmlns="http://www.w3.org/2000/svg" >
        <g stroke="#000" stroke-linecap="round" stroke-width=".66743">
          <rect x="1.9255" y="2.7192" width="27.899" height="2.499" ry="1.2495" />
          <rect x="1.9255" y="14.626" width="27.899" height="2.499" ry="1.2495" />
          <rect x="1.9255" y="26.532" width="27.899" height="2.499" ry="1.2495" />
        </g>
      </svg>
    </div>
    <ol :class="[{ 'menu-visible': menuIsVisible }]">
      <li>
          <router-link class="link-no-style" to="/" @click="toggleMenu()" >Home</router-link>
      </li>
      <li>
          <router-link class="link-no-style" to="/Hacking" @click="toggleMenu()">Hacking</router-link>
      </li>
      <li @click="toggleMenu()" >
          <router-link class="link-no-style" to="/Hoax" @click="toggleMenu()">Hoax</router-link>
      </li>
      <li>
        <router-link class="link-no-style" to="/Malware" @click="toggleMenu()">Malware</router-link>
      </li>
      <li>
          <router-link class="link-no-style" to="/Scam" @click="toggleMenu()">Scam</router-link>
      </li>
    </ol>
    <div
      id="layer"
      :class="[{ 'layer-visible': menuIsVisible }]"
      @click="toggleMenu()"
    ></div>
  </div>
</template>

<script>
export default {
    name: "MenuBar",
    data() {
        return {
            menuIsVisible: false,
        };
    },
    methods: {
        toggleMenu() {
            const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
            if(vw <= 800 ){
                this.menuIsVisible = !this.menuIsVisible;
                document.documentElement.style.overflow = this.menuIsVisible
                    ? "hidden"
                    : "visible";
            }
        },
    },
};
</script>

<style scoped>
#menubar {
  font-family: "Montserrat", sans-serif;
  position: fixed;
  max-width: 100%;
  width: 100vw;
  top: 0;
  background-color: white;
  box-shadow: 0 2px 8px 0 rgb(128 128 128);
  z-index: 100;
  height: 90px;
  display: flex;
  justify-content: center;
}
#menubar #menu-burger {
  display: none;
  width: 24px;
  height: 24px;
}
#menubar ol {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 85px;
}
#menubar ol > li {
  padding: 0 20px;
  color: black;
}
#menubar #layer {
  display: none;
  position: fixed;
}
.link-no-style {
  text-decoration: none;
  color: black;
}
.link-no-style:hover {
  color: blue;
}
.link-no-style:active {
  color: darkcyan;
}
#layer {
  visibility: hidden;
  opacity: 0;
}
@media (min-width: 800px) {
}
@media (max-width: 800px) {
  #menubar ol {
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    top: 0;
    left: -100%;
    width: 50vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.95);
    transition: left 600ms ease;
    z-index: 5;
    padding-top: 100px;
  }
  #menubar ol > li {
    color: white;
    padding: 10px 0;
    font-size: 20px;
  }
  #menubar #layer {
    display: block;
    width: 100vw;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    transition: visibility 600ms ease, opacity 600ms ease;
  }
  .link-no-style {
    color: white;
  }
  .link-no-style:hover {
    color: grey;
  }
  #menubar #menu-burger {
    position: relative;
    display: block;
    margin: auto auto;
    z-index: 10;
    transition: transform 600ms ease;
  }
  #menubar #menu-burger {
    transition: transform 600ms ease;
  }
  #menubar #menu-burger svg {
    overflow: visible;
  }
  #menubar #menu-burger svg g {
    transition: stroke 600ms ease, fill 600ms ease;
  }
  #menubar #menu-burger svg rect {
    transition: transform 600ms ease, transform-origin 600ms ease,
      opacity 600ms ease;
  }
}

@media (max-height: 700px) and (max-width: 800px) {
  #menubar {
    height: 65px;
  }
}

#menubar .menu-visible {
  left: 0;
}
#menubar .layer-visible {
  opacity: 1;
  visibility: visible;
}

.menu-clicked {
  transform: translateX(-5vh);
}
.menu-clicked > svg g {
  stroke: #ffffff;
  fill: #ffffff;
}
.menu-clicked > svg rect:nth-child(1) {
  transform-origin: center center;
  transform: translateY(26.5%) rotate(-45deg);
}
.menu-clicked > svg rect:nth-child(2) {
  opacity: 0;
  transform: translateX(10vh);
}
.menu-clicked > svg rect:nth-child(3) {
  transform-origin: center center;
  transform: translateY(-26.5%) rotate(45deg);
}
</style>
