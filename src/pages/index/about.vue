<template>
  <div id="app">
    <div id="about">
      <Eyecatch></Eyecatch>
      <Explain></Explain>
      <ContentConcept></ContentConcept>
      <Dawn></Dawn>
      <Footer></Footer>
    </div>
    
  </div>
</template>

<script>
import Eyecatch from '../../../src/components/about/eyecatch.vue'
import Explain from '../../../src/components/about/explain.vue'
import ContentConcept from '../../../src/components/about/contentconcept.vue'
import Dawn from '../../../src/components/about/dawn.vue'
import Footer from '../../components/footer.vue'

export default {
  components: {
    Eyecatch,
    Explain,
    ContentConcept,
    Dawn,
    Footer
  }
}
</script>

<style>

</style>
