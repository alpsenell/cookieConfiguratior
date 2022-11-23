<template>
  <div id="app">
    <CookieConfigurator/>
  </div>
</template>

<script>
import CookieConfigurator from "@/components/pages/CookieConfigurator";

export default {
  name: 'App',
  components: {
    CookieConfigurator
  }
}
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
