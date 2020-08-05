<template>
<div id="app">
  
  <Header></Header>

  <div class="lesson">
      <ul class="lesson-list">
        <li class="content">
          <a href="/#/courses/uifirst">
            <div class="thumbnail uidesignflow"></div>
            <p class="title">UIデザインの基本フロー</p>
            <p class="subtext">UIの良し悪しを理由で判断するデザイン工程</p>
            <p class="tag">動画数16本</p>
          </a>
        </li>
        <li class="content future">
          <a href="">
            <div class="thumbnail portfolio"></div>
            <p class="title">ポートフォリオの作り方</p>
            <p class="subtext">磨くスキルもわかる現場で見られるポイント</p>
            <p class="tag">9月公開予定</p>
          </a>
        </li>
        <li class="content future">
          <a href="">
            <div class="thumbnail webdesignflow"></div>
            <p class="title">Webデザインフロー基礎</p>
            <p class="subtext">目的ストレートになるWebデザインフロー</p>
            <p class="tag">9月公開予定</p>
          </a>
        </li>
      </ul>

      <ul class="lesson-list">
        <li class="content future">
          <a>
            <div class="thumbnail uistyling"></div>
            <p class="title">UIスタイリング</p>
            <p class="subtext">機能とスタイルを両立したUI作成方法</p>
            <p class="tag">10月公開予定</p>
          </a>
        </li>
      </ul>

    </div>  

</div>

</template>

<script>
import Header from '../../components/Header.vue'

export default {
  data() {
    return {
      
      uifirst:[
        { id: "1", title: '1.スライム', text:'1:00'},
        { id: "2", title: '2.ゴブリン', text:'2:00'},
        { id: "3", title: '3.ドラゴン', text:'5:00'}
      ],
      isActive: '1',
      active: false,
      playerReady: false,
    }
  },
  components: {
    Header
  },
}
</script>

<style lang="scss">
@import "../../assets/sass/main.scss";
@import "../../assets/sass/pretends.scss";

//本家 ------------------------------------

.lesson {
  margin-bottom:$margin-5;
	.title{
    margin: 0 0 $margin-2;
    .catch{
      @include text-titleNormal;
         color: $color-textWhite;
           width: 33%;
          margin: 0 auto;
          font-family: futura;
          margin-bottom: $margin--4;
          text-align: center;
      }
    p{
      font-size: $text-bodySmall;
      color: $color-textWhite;
      font-weight: bold;
      text-align: center;
    }
  }
	.lesson-list {
    @include flex-spacebetween;
    width: 80%;
    max-width: 1100px;
    margin: 0 auto $margin-3;
		.content {
      color: $color-textWhite;
      transition: all 0.24s;
      top: 0;
      position: relative;
      &:hover{
        opacity: 0.92;
        top: -4px;
      }
      &.future{
        opacity: 0.16;
      }
      a{
        text-decoration: none;
         .thumbnail {
          width: 100%;
          height: 0;
          padding-top: 151.2%;
          border-radius: 0 24px 24px 0;
          background-size:cover ;
          background-repeat: no-repeat;
          top: 0;
          position: relative;
          box-shadow: 8px 8px 24px rgba($color: #000000, $alpha: 0.64);
              &.uidesignflow{
                background-image: url("books/book_uidesignflow.jpg");
              }
              &.portfolio{
                background-image: url("books/book_portfolio.png");
              }
              &.webdesignflow{
                background-image: url("books/book_webdesignflow.png");
              }
              &.uistyling{
                background-image: url("books/book_uistyling.png");
              }
          }
          .title {
            font-size: $text-bodyBig;
            color: $color-textWhite;
            font-weight: bold;
            margin: $margin--2 0 $margin--4;
            text-align: left;
            letter-spacing: 1px;
          }
          .subtext {
            font-size: $text-bodyNormal;
            color: $color-textGray1;
            margin: 0 0 $margin--3;
          }
          .tag {
            font-size: $text-bodySmall;
            color: $color-accentsibuTea;
            font-weight: bold;
          }
      }
		}
	}
}
@media screen and (max-width: 1100px){
  .lesson {
     margin-bottom:$margin-3;
	.title{
    .catch{
      width: 100%;
      font-size: $text-titleSmall;
      text-align: center;
    }
    p{
    }
  }
	.lesson-list {
    width: 92%;
    margin: 0 auto;
    flex-wrap: wrap;
		.content {
       width: calc(50% - 8px);
       margin-bottom:$margin-1;
      a{
        text-decoration: none;
         .thumbnail {
              &.uidesignflow{
                background-image: url("books/book_uidesignflow.jpg");
              }
              &.portfolio{
                background-image: url("books/book_portfolio.png");
              }
              &.webdesignflow{
                background-image: url("books/book_webdesignflow.png");
              }
          }
          .title {
            font-size: $text-bodyNormal;
          }
          .subtext {
            font-size: $text-bodySmall;
          }
          .tag {
            font-size: $text-bodyTiny;
          }
      }
		}
	}
}
}



//ssssss

.courselist {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 9%;
	.content {
		.content-list {
      @include flex-spacebetween;
			.item {
          width: 47.5%;
          a{
            color: $color-textWhite;
            text-decoration: none;
            &:hover{
              .thumnail{
                img{
                  opacity: 0.8;
                }
              }
              .text{
                .title{
                  color: $color-accentKiyoi;
                }
              }
            }
          }
				.thumnail {
          img{
            width: 100%;
            max-height:316px;
            height: 62vh;
            overflow: hidden;
          }
				}
				.text {
          padding: 16px 8px 8px;
          
					.title {
            text-align: left;
            @include text-titleTiny;
            letter-spacing: 1px;
            font-weight: bold;
            margin: 0;
            padding: 0;
					}
					.detail {
            @include text-bodySmall;
					}
				}
				.lists {
          height: 260px;
          overflow: hidden;
          padding: 0;
						.content {
              @include flex-spacebetween ;
              border-bottom: 1px solid $color-bgLight1;
              padding: 16px 8px;
							.copy {
								.title {
                  margin: 0;
                  padding: 0;
                  color: $color-textGray0;
                  @include text-bodySmall;
                  
								}
							}
							.time {
                margin: 0;
                  padding: 0;
                @include text-bodyTiny;
                height: 10px;
							}
						}
					}
			}
		}
	}
}

</style>
