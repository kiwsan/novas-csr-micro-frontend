<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <div>
      <router-link class="navbar-item" to="/">Home</router-link>
      <router-link class="navbar-item" to="/vue">VueJs</router-link>
      <router-link class="navbar-item" to="/react">ReactJs</router-link>
      <router-link class="navbar-item" to="/vue2">VueJs2</router-link>
    </div>

    <br />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
