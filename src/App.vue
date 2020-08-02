<template>
  <div id="app">
    
    <Side></Side>
    <router-view/>
  </div>
</template>

<script>
import Side from './components/side.vue'

export default {
  name: 'App',
   components: {
    Side
  }
}
</script>

<style>

</style>
