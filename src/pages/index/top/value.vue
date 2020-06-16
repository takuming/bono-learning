
<template>
    <div class="value">
      <div class="title">
        <h2 class="catch">PEOPLE DESIGN</h2>
        <h3 class="">
          人間中心なデザインフローで学ぶ<br>UI/UX,Webデザイン
        </h3>
        <p>デザインの本来の役割は人のニーズを世の中が幸せに向かう価値に<br>
            つなぎ合わせることで、あるゆるモノづくりに応用できます。<br>
            この考えのもと、動画でUI/UX,Webデザインを学びましょう
        </p>
      </div>
      <div class="points">
        <div class="item">
          <span>CONTENTS</span>
          <h4>人が中心のデザインプロセスで学ぶ</h4>
          <p>綺麗なモノをつくる方法だけでなく、”人に届く”デザインフローを軸に現場のプロがコンテンツを作成します。</p>
          <div class="movie">
            
             <iframe  class="video" src="https://player.vimeo.com/video/415845155" width="560" height="315" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
        </div>
        <div class="item">
          <span class="sun">CONTENTS</span>
          <h4>人が中心のデザインプロセスで学ぶ</h4>
          <p>綺麗なモノをつくる方法だけでなく、”人に届く”デザインフローを軸に現場のプロがコンテンツを作成します。</p>
          <div class="movie">
             <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/pjWgXdshScM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div class="item">
          <span class="tea">CONTENTS</span>
          <h4>人が中心のデザインプロセスで学ぶ</h4>
          <p>綺麗なモノをつくる方法だけでなく、”人に届く”デザインフローを軸に現場のプロがコンテンツを作成します。</p>
          <div class="movie">
             <iframe class="video"  width="560" height="315" src="https://www.youtube.com/embed/pjWgXdshScM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
</template>


<script>

</script>


<style lang="scss">

@import "../../../assets/sass/main.scss";

#top{
   .value {
      .title {
        text-align: center;
        .catch {
          @include text-titleBigger;
          font-size: 64px;
          @include main-gradient;
          margin-bottom: $margin-2;
        }
        h3{
          @include text-titleSmall;
          color: $color-textWhite;
          margin-bottom: $margin-2;
        }
        p{
          @include text-titleTiny;
          color: $color-textGray0;
          margin-bottom: $margin-3;
        }
      }
      .points {
        .item {
          width: 800px;
          padding: 56px 80px;
          margin: 0 auto $margin-3;
          @include card;
          span{
            @include text-bodyTiny;
            font-family: futura;
            font-weight: bold;
            letter-spacing: 2px;
            display: block;
            color: $color-mainOrange;
            margin-bottom: $margin--2;
            padding: 0 40px;
          }
          span.sun{
            color: $color-accentSun;
          }
          span.tea{
            color: $color-accentTea;
          }
          h4{
            @include text-titleSmall;
            color: $color-textWhite;
            margin-bottom: $margin--1;
            padding: 0 40px;
          }
          p{
            @include text-bodyNormal;
            color: $color-textGray0;
            margin-bottom: $margin-2;
            padding: 0 40px;
          }
          .movie {
            width: 100%;
            .video{
              width: 100%;
              height: 450px;
            }
          }
        }
      }
    }
}
@media screen and (max-width: 640px){
  #top{
   .value {
      .title {
        text-align: left;
        padding:0 8%;
        .catch {
          @include text-titleBigger;
          font-size: 40px;
          margin: 0 auto $margin--1;
          width: 108%;
        }
        h3{
          @include text-titleTiny;
          margin: 0 auto $margin--1;
          
        }
        p{
          @include text-bodyNormal;
          margin: 0 auto $margin-2;
          line-height: 2.2;
          br{
            display: none;
          }
        }
      }
      .points {
        .item {
          width: 88%;
          margin: 0 8px $margin-1;
          padding: 32px 4%;
          border-radius: 12px;
          span{
            @include text-bodyTiny;
            font-family: futura;
            font-weight: bold;
            letter-spacing: 2px;
            display: block;
            color: $color-mainOrange;
            margin-bottom: $margin--3;
            padding: 0 16px;
          }
          span.sun{
          }
          span.tea{
          }
          h4{
            @include text-bodyBig;
            margin-bottom: $margin--3;
            font-weight: bold;
            padding: 0 16px;
          }
          p{
            @include text-bodySmall;
            margin-bottom: $margin--1;
            padding: 0 16px;
          }
          .movie {
            .video{
              width: 100%;
              height: 23vh;
            }
          }
        }
      }
    }
}
}
</style>
