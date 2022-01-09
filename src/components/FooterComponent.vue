<template>
  <footer>
    <div class="footer-div">
      <h2>About</h2>
      <p>Jani Peltonen</p>
      <p>
        Liikennetietojen lähde <a href="https://tmfg.fi">Fintraffic</a> /
        <a href="https://www.digitraffic.fi">Digitraffic</a>,
        <a href="https://creativecommons.org/licenses/by/4.0/">CC 4.0 BY</a>
      </p>
    </div>
    <nav></nav>
  </footer>
</template>


<script>
export default {
  name: "FooterComponent",
  props: {},
};
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #191919;
  height: 10vh;
  color: white;
  width: 100%;
}

.footer-div {
  text-align: center;
}

h2 {
  margin: 0.8rem 0 0.5rem 0;
}
</style>