

<template>
    <div class="eyecatch">
      <div class="text">
        <h1>Unleash Your<br>Creativity</h1>
        <p>XXXXは人間中心なデザインフローで<br>UI,UX,Webデザインを学べる動画サービスです。</p>
        <a class="btn" href="">
          <p>レッスンを見る</p>
        </a>
      </div>
      <div class="image">
        <div>
          <iframe class="movie" src="https://www.youtube.com/embed/pjWgXdshScM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
</template>


<script>

</script>


<style lang="scss">
@import "../../../assets/sass/main.scss";
#top{
  .eyecatch {
    padding: 8% 10%;
    @include flex-spacebetween;
    .text {
          position: absolute;
          z-index: 100;
          padding: 2% 0 ;
      h1{
        @include text-titleBigger;
        margin-bottom: $margin--1;
        font-size: 96px;
        line-height: 1.2;
        font-family: futura;
      }
      p{
        @include text-bodyBig;
        color: $color-textGray0;
        font-weight: bold;
        margin-bottom: $margin-2;
      }
      .btn {
        @include buttonMain;
        max-width: 320px;
        margin: 0;
        p{
          margin: 0
        }
      }
    }
    .image {
      position: relative;
      left: 38%;
      .movie {
          width: 800px;
          height: 448px;
      }
    }
  }
}

@media screen and (max-width: 640px){
  #top{
    .eyecatch {
      padding: 0 0 32px;
      display: block;
      .text {
        padding: 32% 10% 16%;
        position:inherit;
        h1{
          font-size: 48px;
        }
        p{
          line-height: 2.0;
        }
        .btn {
        }
      }
      .image {
        position: inline;
        left: 0%;
        .movie {
          width: 100%;
          height: 26vh;
        }
      }
    }
  }
}
</style>
