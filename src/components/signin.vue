<template>
<div id="app">

  <Header></Header>

  <div class="form">

    <div class="title">
       <p>新規登録</p>
       <h2>さあ、はじめよう</h2> 
    </div>
   
    <form class="wrap"  action="" data-ms-form="signup">
      <div class="email">
        <label>E-mail</label>
        <input type="email" data-name="email" data-ms-member="email" placeholder="メールアドレスを入力">
      </div>
      <div class="password">
        <label>パスワード</label>
        <input type="password" data-ms-member="password"  placeholder="パスワードを入力">
      </div>
      <input type="submit" value="登録する" data-name="Password" data-wait="Please wait..." class="button full-button w-button">

    </form>

    <div class="another">
      <a href="/login">ログインはこちら</a>
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

<style  lang="scss" >
@import "../assets/sass/main.scss";
@import "../assets/sass/pretends.scss";
@import "../assets/sass/base/form.scss";


</style>
