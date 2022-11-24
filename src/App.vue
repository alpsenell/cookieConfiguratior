<template>
  <div id="app">
    <CookieConfigurator />
  </div>
</template>

<script>
import CookieConfigurator from '@/components/pages/CookieConfigurator';

export default {
  name: 'App',
  components: {
    CookieConfigurator,
  },
  beforeCreate() {
    document.title = 'Cookie Configurator';
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
