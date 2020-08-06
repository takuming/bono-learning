<template>
<div id="app">

  <Header></Header>

  <div class="form">
     <div class="title">
       <p>ログイン</p>
       <h2>デザインを再開しよう</h2> 
    </div>

     <form class="wrap" action="" data-ms-form="login">
      <div class="email">
        <label>E-mail</label>
        <input type="email" data-ms-member="email" placeholder="メールアドレスを入力">
      </div>
      <div class="password">
        <label>パスワード</label>
        <input type="password" data-ms-member="password" placeholder="パスワードを入力">
      </div>
      <input type="submit" value="ログイン" data-wait="Please wait..." class="button full-button w-button">
    </form>
     <div class="another">
      <a href="/#/signin">アカウントをお持ちでない方はこちら</a>
    </div>

    
  </div>
</div>
  
</template>

<script>
import Header from './Head_signin.vue'

export default {
   components: {
    Header,
  }
}
</script>

<style lang="scss" >
@import "../assets/sass/main.scss";
@import "../assets/sass/pretends.scss";
@import "../assets/sass/base/form.scss";

</style>
