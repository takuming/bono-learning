<template>
  <div id="app">
    <div id="top">
      <Title></Title>
      <CourseList></CourseList>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Title from '../../components/courses/title.vue'
import CourseList from '../../components/courses/course-list.vue'
import Footer from '../../components/footer.vue'

export default {
 components: {
    Title,
    CourseList,
    Footer
  }
}
</script>

<style lang="scss">
@import "../../assets/sass/main.scss";
@import "../../assets/sass/pretends.scss";
</style>
