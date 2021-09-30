<template>
  <div id="menubar">
    <ol>
      <li><router-link class="link-no-style" to="/">Home</router-link></li>
      <li><router-link class="link-no-style" to="/Hack">Hacking</router-link></li>
      <li>Hoax</li>
      <li>Malware</li>
      <li>Scam</li>
    </ol>
  </div>
</template>

<script>
export default {
  name : "MenuBar"
}
</script>

<style scoped>
#menubar {
  font-family: 'Montserrat', sans-serif;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  background-color: white;
  box-shadow: 0 2px 8px 0 rgb(128 128 128);
  z-index: 100;
}
#menubar ol{
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
.link-no-style {
  text-decoration: none;
  color: inherit;
}
</style>
