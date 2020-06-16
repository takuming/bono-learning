<template>
  <div class="content-conept">
    <div class="content">
      <p class="tag">UNLEASH YOUR CREATIVITY</p>
      <h3>XXXのコンテンツ方針</h3>
      <p>デザインも広い。まずはスマートフォンやウェブアプリケーションのデザインに重点を置き<br>
         コンテンツを作成していきます。</p>
      <img src="" alt="コンテンツの大まかな目的">
    </div>
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
  .content-conept {
    padding: 0% 20% 4%;
    .content {
      text-align: center;
      .tag {
        @include text-bodySmall;
        font-weight: bold;
        margin-bottom: $margin--1;
      }
      h3 {
        @include text-titleNormal;
        letter-spacing: 2px;
        margin-bottom: $margin-1;
      }
      p {
        @include text-bodyNormal;
        line-height: 2;
        font-weight: bold;
        color: $color-textGray1;
        font-weight: normal;
        br{
          display: none;
        }
      }
      img {
        width: 100%;
        display: block;
        height: 496px;
        background-color: #333;
        border-radius: 16px;
      }
    }
  }
}
@media screen and (max-width: 640px){
  #about{
    .content-conept {
      padding: 0% 6% 4%;
      .content {
        text-align: center;
        .tag {
          @include text-bodySmall;
          font-weight: bold;
          color: white;
          margin-bottom: $margin--1;
        }
        h3 {
          @include text-titleNormal;
          letter-spacing: 1px;
          margin-bottom: $margin--1;
        }
        p {
          @include text-bodyBig;
          font-weight: normal;
          line-height:  2;
          margin-bottom: $margin-2;
          letter-spacing: 2px;
        }
        img {
          width: 100%;
          display: block;
          height: 496px;
          background-color: #333;
          border-radius: 16px;
        }
      }
    }
}
}

</style>
