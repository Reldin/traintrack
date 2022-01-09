<template>
  <header class="header">
    <h1 class="header_title">
      <router-link class="icon_link" to="/">Home</router-link>
    </h1>
    <nav class="header-nav">
      <ul class="header_nav-ul">
        <li class="header_nav_ul-li">
          <router-link to="/">help</router-link>
        </li>
        <li class="header_nav_ul-li">
          <router-link to="/">about</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  methods: {},
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #191919;
  height: 10vh;
  min-height: 5rem;
  color: white;
  position: fixed;
  width: 100%;
  z-index: 1000;
}
a,
a:hover,
a:active {
  text-decoration: none;
  color: inherit;
}
.header-nav {
  margin: 0 0.5rem 0 0;
}
.header_nav-ul {
  display: flex;
  flex-direction: row;
}
.header_nav_ul-li {
  margin: 0 1rem 0 0;
}
li {
  list-style: none;
}

.icon_link {
  margin: 0 0 0 1rem;
}
</style>