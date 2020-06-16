<template>
 <div class="problem">
      <h2>現場に必要とされるデザイナーになるのに<br>どんなスキルを学べば良いのかわからない...</h2>
      <p>ツールの使い方。お洒落なバナーのHOWTO...<br>本当にこれでキャリアを築けるのか不安</p>
      <div class="img">
        <img src="" alt="">
      </div>
  </div>  
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../../../assets/sass/main.scss";
#top{
  .problem {
    margin-bottom: 196px;
    text-align: center;
    h2{
      @include text-titleNormal;
      margin-bottom: $margin-1;
    }
    p{
       @include text-titleTiny;
       color: $color-textGray0;
       margin-bottom: $margin-2;
    }
    .img{
      width: 860px;
      height: 312px;
      background-color: black;
      margin: 0 auto;
      img{
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 640px){
  #top{
  .problem {
    text-align: left;
    margin: 0 0 112px;
    h2{
      @include text-titleTiny;
      margin-bottom: $margin--1;
      padding: 0 32px;
      br{
        display: none;
      }
    }
    p{
      @include text-bodyBig;
      line-height: 2.0;
      padding: 0 32px;
    }
    .img{
      width: 88%;
      margin: 0 auto;
      img{
      }
    }
  }
}
}

</style>
