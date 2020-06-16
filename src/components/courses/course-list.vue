<template>
 <div class="courselist">
   <div class="content">

        <ul class="content-list">

          <li class="item"> 
            <a href="">
                <div class="thumnail">
                  <img src="https://prtimes.jp/i/39762/20/resize/d39762-20-959961-8.jpg" alt="">
                </div>
                <div class="text">
                  <h4 class="title">はじめてのUIデザイン</h4>
                  <p class="detail">HTMLやCSSの書き方は独学でも学べますが、コードが書けるだけでは仕事はできません。 デイ</p>
                </div>
              <ul class="lists">
                <li v-for="item in uifirst" v-bind:key="item.id" class="content">
                  <div class="copy">
                    <p class="title">{{item.title}}</p>
                  </div>
                  <p class="time" v-html="item.text"></p>
                </li>
              </ul>
            </a>
          </li>

          <li class="item"> 
            <a href="">
                <div class="thumnail">
                  <img src="https://prtimes.jp/i/39762/20/resize/d39762-20-959961-8.jpg" alt="">
                </div>
                <div class="text">
                  <h4 class="title">3角目のレッスン</h4>
                  <p class="detail">HTMLやCSSの書き方は独学でも学べますが、コードが書けるだけでは仕事はできません。 デイ</p>
                </div>
              <ul class="lists">
                <li v-for="item in uifirst" v-bind:key="item.id" class="content">
                  <div class="copy">
                    <p class="title">{{item.title}}</p>
                  </div>
                  <p class="time" v-html="item.text"></p>
                </li>
              </ul>
            </a>
          </li>

        </ul>
      </div>
 </div>
</template>

<script>
// import courseDetail from './course_detail.js'
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
  },
}
</script>

<style lang="scss">
@import "../../assets/sass/main.scss";
@import "../../assets/sass/pretends.scss";

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
