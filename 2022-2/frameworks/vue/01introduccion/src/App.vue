<template>
  <div id="app">
      <Header/>

        <router-view></router-view>
        
      <Footer/>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Principal from './components/Principal.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Principal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
