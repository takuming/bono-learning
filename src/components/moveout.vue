<template>
<div id="app">

  <Header></Header>

  <div class="moveout">
    <h2>サイトへ戻る</h2>
    <div class="button">
      <a href="">戻る</a>
    </div>
  </div>
</div>
</template>

<script>
import Header from './Head_login.vue'

export default {
   components: {
    Header,
  }
}
</script>

<style lang="scss">
@import "../assets/sass/main.scss";
@import "../assets/sass/pretends.scss";

.moveout{
  width: 480px;
  max-width: calc(100% - 20px);
  margin: 0 auto;
  position: absolute;
	top: 50%;
	left: 50%;
  transform: translate(-50%, -50%);
  background-color: $color-bgLight1;
  padding:32px;
  border-radius: 8px;
  text-align: center;
  h2{
    font-size: $text-titleTiny;
    margin-bottom: $margin--1;
  }
  .button{

    a{
      padding: 16px;
      width: 240px;
      font-weight: bold;
      display: block;
      margin: 0 auto;
      border-radius: 8px;
      background-color: white;
      text-decoration: none;
      color: $color-bgBase;
      position: relative;
      transition: all 0.24s;
      top: 0;
      &:hover{
        top: -2px;
        position: relative;
        transition:all 0.24s;
        opacity: 0.72;
      }
    }
  }
}
</style>
