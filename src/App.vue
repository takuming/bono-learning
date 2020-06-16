<template>
  <div id="app">
    <Header></Header>
    <Side></Side>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Side from './components/side.vue'

export default {
  name: 'App',
   components: {
    Header,
    Side
  }
}
</script>

<style>

</style>
