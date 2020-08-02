<template>
    <div class="header">

      <ul class="navlist">
        <div class="logo"><img src="https://o.imgz.jp/pc/common/header-brand-logo.png" alt=""></div>
        <li><router-link to="/">ホーム</router-link></li>
        <li><router-link to="/about">Dlearningについて</router-link></li>
        <li><router-link to="/courses">コミュニティ</router-link></li>
        <li data-ms-content="all-learning">有料モード</li>
      </ul>

      <ul class="navlist">
        <li data-ms-content="members"><a href="#/ms/profile">アカウント情報</a></li>
        <li data-ms-content="!members"><a href="/login">ログイン</a></li>
        <li data-ms-content="!members"><a href="/signin">有料会員登録</a></li>
        
      </ul>

      <!-- スマホナビ -->
      <div class="header__menu">
          <div class="header__menu__line" @click="naviOpen" :class="{'is-active': active}">
            <span></span>
            <span></span>
            <span></span>
          </div>
      </div>
      <transition name="sp-navi">
        <nav class="sp-navi" v-show="navi">
          <ul class="navi__wrap">
            <li><router-link to="/">ホーム</router-link></li>
            <li><router-link to="/about">Dlearningについて</router-link></li>
            <li><router-link to="/courses">コース一覧</router-link></li>
            <li><a href="#/ms/signup/5ec0a84d19a6420004dd6245">新規登録</a></li>
            <li class="login"><a href="#/ms/login"> ログイン</a></li>
          </ul>
        </nav>
      </transition>

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
.header {
  &__menu {
    width: 60px;
    height: 60px;
    position: fixed;
    top: 0;
    right: 0;
    &__line {
      width: 36px;
      height: 30px;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      cursor: pointer;
      span {
        width: 100%;
        height: 2px;
        background: #fff;
        display: block;
        transition: .6s;
        position: absolute;
        &:first-child {
          top: 0;
          width: 80%;
          right: 0;
        }
        &:nth-child(2) {
          top: 8px;
          right: 0;
          width: 56%;
        }
        &:last-child {
          bottom: 11px;
          width: 32%;
          right: 0;
        }
      }
      &.is-active {
        span {
          transition: .6s;
          &:first-child {
            transform: rotate(45deg);
            top: 50%;
            width: 80%;
          }
          &:nth-child(2) {
            opacity: 0;
            width: 80%;
          }
          &:last-child {
            transform: rotate(-45deg);
            top: 50%;
            width: 80%;
          }
        }
      }
    }
  }
}

.header .navlist{
  margin: 0 16px;
}
.navi {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  &__wrap {
    list-style-type: none;
    text-align: center;
    background: $color-bgBase;
    padding: 144px 0;
    position: absolute;
    width: 100%;
    height: 85vh;
    margin-top: -3vh;
    left: 0px;
    z-index: -1;
    li {
      a {
        font-size: 16px;
        letter-spacing: 4px;
        text-decoration: none;
        color: #fff;
        display: block;
        padding: 20px 40px;
      }
    }
  }
  &-enter, &-leave-to {
    opacity: 0;
  }
  &-enter-to, &-leave {
    opacity: 1;
  }
  &-enter-active, &-leave-active {
    transition: .6s;
  }
}

}

</style>
