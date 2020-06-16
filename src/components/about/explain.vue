<template>

  <div class="explain">

    <div class="content">
      <p class="tag">WHY THIS - なぜスタートしたか</p>
      <h3>"狭義的"デザイン<br>からの脱皮</h3>
      <p>一般的な”デザイン”の解釈は”見た目を綺麗にする”という狭義なものです。スクールで見かける”Webデザイナーになれる”定義もツールの使い方を覚えるなど狭く閉ざされています。
  デザインの本当の役割は表面を整えることにとどまらず、人の気持ちやニーズを読み解き、幸せな方向に繋がる価値とつなぎあわせ、当事者の思想やビジョンを基に具現化していくことです。
  このデザインを知る/学ぶ場所を作ることがXXXXを始めた理由です。</p>
      <img src="" alt="狭義的デザインからの脱皮">
    </div>

    <div class="content">
      <p class="tag">UNLEASH YOUR CREATIVITY</p>
      <h3>万人のための<br>”創造性”の開放</h3>
      <p>NEWPEACEは、独自メソッドであるVISIONING®︎を武器に、新たな社会文脈を創り出していく企画集団です。生活様式・関係性・公共・学び方・働き方など、アップデートが求められる領域において、ビジョンを描き、アクションによって現象化します。私たちは事業開発・資本参加・他社との協業など、市場に最適な方法論で、ライフスタイルや価値観の転換を仕掛けていきます。</p>
      <img src="" alt="コンテンツで必要なフロー">
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
  .explain {
    padding: 0% 20% 4%;
    .content {
      margin-bottom: 160px;
      .tag {
        @include text-bodySmall;
        font-weight: bold;
        margin-bottom: $margin--1;
      }
      h3 {
        @include text-titleNormal;
        letter-spacing: 2px;
        margin-bottom: $margin-1;
        br{
          display: none;
        }
      }
      p {
        @include text-bodyBig;
        font-weight: normal;
        line-height: 2.4;
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
@media screen and (max-width: 640px){
#about{
  .explain {
    padding: 0% 6% 4%;
    .content {
      margin-bottom: 80px;
      .tag {
        @include text-bodyTiny;
        margin-bottom: $margin--2;
        color: white;
        font-weight: bold;
      }
      h3 {
        @include text-titleNormal;
        margin-bottom: $margin--2;
        letter-spacing: 2px;
        br{
          display: block;
        }
      }
      p {
        @include text-bodyNormal;
        line-height: 2;
        font-weight: bold;
        color: $color-textGray1;
        font-weight: normal;
      }
      img {
        width: 100%;
      }
    }
  }
}
}

</style>
