<template>
<div class="other">
      <ul>
        <li class="item">
          <a href="">
            <p>料金プラン</p>
          </a>
        </li>
        <li class="item">
          <a href="">
            <p>Q&A</p>
          </a>
        </li>
      </ul>
</div>  
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../../../assets/sass/main.scss";
#top{
  .other {
    width: 720px;
    margin: 0 auto;
      ul {
        padding: 64px 0;
        @include flex-spacebetween;
        .item {
          width: 48%;
          border-radius: 4px;
          a {
            background-color: $color-bgLight0;
            padding: 16px;
            display: block;
            text-decoration: none;
            &:hover{
              background-color: $color-bgLight1;
            }
            p {
              font-size: $text-bodySmall;
              line-height: 1;
              text-align: center;
              color: $color-textWhite;
            }
          }
        }
      }
  }
}
@media screen and (max-width: 640px){
  #top{
  .other {
    width: 100%;
    margin: 0 auto;
      ul {
        padding: 32px 0;
        display: block;
        .item {
          width: 80%;
          margin: 0 auto $margin--2;
          border-radius: 4px;
          a {
            padding: 16px;
            p {
              font-size: $text-bodyTiny;
            }
          }
        }
      }
    }
  }
}

</style>
