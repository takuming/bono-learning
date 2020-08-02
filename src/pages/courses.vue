<template>
  <div id="app">
    <Header></Header>
    <div id="courses">

      <Title></Title>
      <CourseList></CourseList>
      <Footer></Footer>

    </div>
    
  </div>
</template>

<script>
import Header from '../components/Header.vue'

import Title from '../components/courses/title.vue'
import CourseList from '../components/courses/course-list.vue'
import Footer from '../components/footer.vue'

export default {
  components: {
    Header,
    Title,
    CourseList,
    Footer
  }
}
</script>

<style>

.title {
}
.course-list {
}
.course-list ul{
}
.course-list ul li{
  list-style: none;
  padding: 32px;
  background-color: bisque;
  width: 350px;
  height: auto;
  border-radius: 40px;
  margin:0 auto;
}
.course-list ul li .img{
}

.course-list ul li .detail{
}

</style>
