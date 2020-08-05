<template>
 <div class="title">
     <h2>LESSON</h2>
     <span class="tag">コース一覧</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../../assets/sass/main.scss";
@import "../../assets/sass/pretends.scss";

.title{
  margin: $margin-2;
  text-align: center;
  font-family: futura;
  letter-spacing: 2px;
  padding: 6% 0 1%;
  h2{
    @include text-titleBig;
    letter-spacing: 4px;
  }
  .tag{
    @include text-bodyNormal;
  }
}

</style>
