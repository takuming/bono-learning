<template>
<div id="app">

  <Header></Header>

  <div class="form">

    <div class="title">
       <p>新規有料会員登録</p>
       <h2>毎月1冊の本同等の<br>実践コンテンツが見放題</h2>
       <p>月額3,980円。今すぐ始めよう</p> 
    </div>
   
    <form class="wrap"  action="" data-ms-form="signup">
      <div class="email">
        <label>メールアドレス</label>
        <input type="email" data-name="email" data-ms-member="email" placeholder="メールアドレスを入力">
      </div>
      <div class="password">
        <label>パスワード</label>
        <input type="password" data-ms-member="password"  placeholder="パスワードを入力">
      </div>
      <input type="submit" value="クレジットカードの入力へ" data-name="Password" data-wait="Please wait..." class="button full-button w-button">

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

.form {
	.title {
    margin: 0 auto 16px;
    h2{
      margin-bottom: 8px;
    }
	}
	.wrap {
		.email {
		}
		.password {
		}
		.button.full-button.w-button {
		}
	}
	.another {
	}
}
</style>
