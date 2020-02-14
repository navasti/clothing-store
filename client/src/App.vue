<template>
  <div id="app">
    <Header />
    <h1>hello</h1>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
</style>
