<template>
    <div class="header">

      <ul class="navlist">
        <div class="logo"><img src="https://o.imgz.jp/pc/common/header-brand-logo.png" alt=""></div>
      </ul>

      <ul class="navlist">
        <li><a href="/login">新規登録</a></li>
      </ul>

      

    </div>

    
</template>

<script>
export default {
  data() {
    return{
      active: false,
      navi: false,
    }
  },
  methods: {
    naviOpen: function() {
      this.active = !this.active;
      this.navi = !this.navi;
    }
  }
}

</script>

<style lang="scss" scoped>

@import "../assets/sass/main.scss";

.header__menu{
  display: none;
}
.header {
  position: absolute;
  top: 0;
  position:fixed;
  z-index: 100000;
  width: 100%;
  padding: 24px 0px;
  @include flex-spacebetween;
	.navlist {
    margin: 0 24px;
    display: flex;
		.logo {
      margin-right: $margin-0;
      img{
        display: block;
        width: 128px;
        height: auto;
        position: relative;
        top: -4px;
      }
    }
    li{
      margin-right: $margin--2;
      a{
        @include text-bodySmall;
        padding: 10px 20px;
        text-decoration: none;
        color: $color-textWhite;
        font-weight: bold;
        border-radius: 100px;
        &:hover{
          background-color: $color-bgLight0;
        }
      }
    }
    .login{
      a{
        color: $color-bgBase;
        border-radius: 8px;
        background-color: $color-textWhite;
      }
      
    }
	}
}

@media screen and (max-width: 640px){
  .navlist li{
      display: none;
  }
  .header__menu{
    display: block;
    margin: 0 4px;
  }
}
</style>
