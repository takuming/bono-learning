<template>
  <div id="app">
    <div id="course-detail">

      <div class="title">
          <h2>はじめてのUIコース</h2>
          <span class="tag">8本の動画</span>
      </div>

      <div class="content">
        
        <ul class="content-list">
          <li class="item pc" v-for="item in courses" v-bind:key="item.id" v-if="isActive === item.id"> 
            <div class="movie">
                <vueVimeoPlayer ref="player" :video-id="item.videoID" @ready="onReady" :player-height="440" :player-width="720">
                </vueVimeoPlayer>
            </div>
            <div class="text"  v-on:click='active=!active'>
              <h4 class="title">{{item.title}}</h4>
              <p class="detail" v-bind:class='{open:active}' v-html="item.description"></p>
            </div>
          </li>

          <li class="item sp" v-for="item in courses" v-bind:key="item.id" v-if="isActive === item.id" > 
            <div class="movie">
                <vueVimeoPlayer ref="player" :video-id="item.videoID" @ready="onReady" :player-height="200" :player-width="356">
                </vueVimeoPlayer>
            </div>
            <div class="text" v-on:click='active=!active'>
              <h4 class="title">{{item.title}}</h4>
              <p class="detail" v-bind:class='{open:active}' v-html="item.description"></p>
            </div>
          </li>

        </ul>

        <div class="list">
          <ul class="lists">

            <li v-for="item in courses" v-bind:key="item.id" v-on:click="change(item.id)" v-bind:class="{'active': isActive === item.id}" class="content">
              <div class="copy">
                <span class="icon"></span>
                <p class="title">{{item.title}}</p>
              </div>
              <p class="time" v-html="item.text"></p>
            </li>

          </ul>
        </div>
      </div>

    </div>
    
  </div>

</template>



<script>
import { vueVimeoPlayer } from 'vue-vimeo-player'

export default {
  data() {
    return {
      
      courses:[
        { id: "1", 
          title: '1.スライム', 
          text:'1:00', 
          description:
            '<span>あかさたなはまやらわかかいkどふぁdさfdsfdfjだslkfjdヵjfldさkあかさたなはまやらわかかいkどふぁdさfdsfdfjだslkfjdヵjfldさkあかさたなはまやらわかかいkどふぁdさfdsfdfjだslkfjdヵjfldさkあかさたなはまやらわかかいkどふぁdさfdsfdfjだ<br>slkfj<a href="https://twitter.com">as</a>dヵjfldさkらわかかいkどふぁdさfdsfdfjだslkfjdヵjfldさkあかさたなはまやらわかかいkどふぁdさfdsfdfjだslkfjdヵjfldさkあかさたなはまやらわかかいkどふぁdさfdsfdfjだslkfjdヵjfldさkらわかかいkどふぁdさfdsfdfjだslkfjdヵjfldさkあかさたなはまやらわかかいkどふぁdさfdsfdfjだslkfjdヵjfldさkあかさたなはまやらわかかいkどふぁdさfdsfdfjだslkfjdヵjfldさk</span>', 
          videoID: '332768034'},
        { id: "2", title: '2.ゴブリン', text:'2:00', description:'あかさたなはまやらわかかいkどふぁdさfdsfdfjだslkfjdヵjfldさk', videoID: '141851770'},
        { id: "3", title: '3.ドラゴン', text:'5:00', description:'あかさたなはまやらわかかいkどふぁdさfdsfdfjだslkfjdヵjfldさk', videoID: '141851772'}
      ],
      isActive: '1',
      active: false,
      playerReady: false,
    }
  },
  components: { 
    vueVimeoPlayer 
  },
  methods: {
    change: function(num){
      this.isActive = num
    },
    onReady() {
        this.playerReady = true
    },
    play () {
        this.$refs.player.play()
    },
    stop () {
        this.$refs.player.stop()
    },
  }
};

</script>

<style lang="scss">
@import "../../assets/sass/main.scss";
@import "../../assets/sass/pretends.scss";


.item.pc{
    display: block!important;
  }
.item.sp{
      display: none!important;
}


#course-detail {
  margin-bottom: $margin-0;
  padding: 8% 8%;
	.title {
    margin-bottom: $margin-0;
    h2{
        @include text-titleNormal;
        margin-right: $margin--2;
      }
		.tag {
      @include text-bodySmall;
      color: $color-textGray0;
      margin-bottom: $margin--1;
		}
	}
	.content {
    @include flex-spacebetween;
		.item {
      display: contents;
			.movie {
        width: 720px;
        height:420px;
        border-radius: 8px;
        margin-bottom: $margin--2;
			}
			.text {
        width: 720px;
        .title{
          @include text-bodyNormal;
          font-weight: bold;
          color:$color-textWhite;
          margin-bottom: $margin--3;
        }
        .detail{
          @include text-bodySmall;
          color:$color-textGray0;
          margin-bottom: $margin--2;
          height: 28px;
          overflow: hidden;
          transition: all;
          &.open{
            height: auto;
            overflow:auto;
             transition: all;
          }
        }
			}
		}
		.list {
      width: 388px;
			.lists {
        max-height:410px;
        overflow:scroll;
        padding-bottom: 32px;
        border-bottom: 1px solid rgba(255,255,255,0.08);
				.content {
           @include flex-spacebetween;
           padding: 20px 16px;
           border-radius: 8px;
           margin-bottom: 4px;
           cursor: pointer;
           &.active,&:hover{
             background-color:$color-bgLight0 ;
           }
          .copy{
            @include flex-spacebetween;
            color:$color-textGray0;
            justify-content: flex-start;
            .icon {
              width: 16px;
              height: 16px;
              display: block;
              background-color: #dadbdd;
              border-radius:100px;
              opacity: 0.4;
              margin-right: $margin--2;
            }
            .title {
              @include text-bodyNormal;
              line-height: 1;
              margin: 0;
            }
          }
					.time {
            @include text-bodyTiny;
					}
				}
			}
		}
	}
}

@media screen and (max-width: 640px){

  .item.pc{
      display: none!important;
  }
  .item.sp{
    display: block!important;
  }

  $coursepage-padding:0 6%;

  #course-detail {
    padding: 20% 0 ;
    .title {
      padding:$coursepage-padding;
      margin-bottom: $margin-0;
      h2{
          @include text-titleTiny;
          margin-right: $margin--2;
        }
      .tag {
        @include text-bodySmall;
        color: $color-textGray0;
      }
    }
    .content {
      display: block;

      .item {
        display: contents;
        .movie {
          width: 356px;
          margin: 0 auto 24px;
          height: 24vh;
        }
        .text {
          margin: 16px auto 0;
          padding: 0;
          width: 90%;
          .title{
            @include text-bodyNormal;
            font-weight: bold;
            color:$color-textWhite;
            margin-bottom:$margin--3;
            padding: 0;
          }
          .detail{
            @include text-bodySmall;
            color:$color-textGray0;
            line-height: 2;
            margin-bottom: $margin--2;
            padding-bottom: 8%;
            border-bottom: 1px solid $color-bgLight1;;
          }
        }
      }
      .list {
        padding: 3% 2%;
        width: 96%;
        margin: 0 auto;
        .lists {
          max-height:240px;
          overflow:scroll;
          .content {
            @include flex-spacebetween;
            padding: 20px 16px;
            &.active,&:hover{
              background-color:$color-bgLight0 ;
            }
            .copy{
              @include flex-spacebetween;
              color:$color-textGray0;
              justify-content: flex-start;
              width: 100%;
              .icon {
                width: 16px;
                height: 16px;
              }
              .title {
                @include text-bodyNormal;
                line-height: 1;
                margin: 0;
                padding: 0;
                width: 100%;
                .detail{
                  line-height: 2;
                }
              }
            }
            .time {
              @include text-bodyTiny;
            }
          }
        }
      }
    }
  }
}

</style>
