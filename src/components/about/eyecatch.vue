<template>
 <div class="eyecatch">
   <h1>Unleash<br class="br1">Your <br class="br2">Creativity</h1>
   <p>毎月1テーマの学習動画コンテンツで仲間と議論・共有して成長していく<br>デザイン動画サービスです</p>
 </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../../assets/sass/main.scss";
@import "../../assets/sass/pretends.scss";
#about{
  .eyecatch{
    padding: 16% 20%;
    margin: 0 0 $margin-3;
    h1{
      @include text-titleBigger;
      @include main-gradient;
      font-size: 104px;
      line-height: 1.2;
      margin-bottom: $margin-2;
      letter-spacing: 2px;
      .br2{
        display: none;
      }
    }
    p{
      @include text-bodyBig;
      font-weight: normal;
      line-height: 2;
      margin-bottom: $margin-2;
      letter-spacing: 4px;
    }
  }
}

@media screen and (max-width: 640px){
  #about{
    .eyecatch{
      padding: 56% 6% 32%;
      overflow: auto;
      h1{
        @include text-titleBigger;
        line-height: 1.2;
        margin-bottom: $margin-2;
        .br2{
          display:block;
        }
      }
      p{
        @include text-bodyNormal;
        font-weight: bold;
        line-height: 2;
        color: $color-textGray1;
        margin-bottom: $margin-2;
        letter-spacing: 4px;
      }
    }
  }
}

</style>
