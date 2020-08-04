<template>
  <div id="app">
    
    <Header></Header>

    <div id="course-detail">

      <div class="title">
          <h2>UI DESIGN FLOW BASIC</h2>
          <span class="tag">Spotifyに友人が聴いている音楽が表示されるUIを作ろう</span>
      </div>

      <div class="content">
        
        <ul class="content-list">
          <li class="item pc" v-for="item in courses" v-bind:key="item.id" v-if="isActive === item.id"> 
            <div class="movie">
                <vueVimeoPlayer ref="player" :video-id="item.videoID" @ready="onReady">
                </vueVimeoPlayer>
            </div>
            <div class="text"  v-on:click='active=!active'>
              <h4 class="title">{{item.title}}</h4>
              <p class="detail" v-bind:class='{open:active}' v-html="item.description"></p>
            </div>
          </li>

          <li class="item sp" v-for="item in courses" v-bind:key="item.id" v-if="isActive === item.id" > 
            <div class="movie">
                <vueVimeoPlayer class="player" ref="player" :video-id="item.videoID" @ready="onReady">
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
            <div class="steps">
              <p class="tag">STEP1</p> <p class="steptitle">アイデア出し</p>
            </div>
            <li v-for="item in courses" v-bind:key="item.id" v-on:click="change(item.id)" v-bind:class="{'active': isActive === item.id}" class="content">
              <div class="copy">
                <span class="icon"></span>
                <p class="title">{{item.title}}</p>
              </div>
              <p class="time" v-html="item.text"></p>
            </li>

            <div style="display:block; margin-bottom:32px"></div>

            <div class="steps">
              <p class="tag">STEP2</p> <p class="steptitle">UIパターン</p>
            </div>
            <li v-for="item in courses2" v-bind:key="item.id" v-on:click="change(item.id)" v-bind:class="{'active': isActive === item.id}" class="content">
              <div class="copy">
                <span class="icon"></span>
                <p class="title">{{item.title}}</p>
              </div>
              <p class="time" v-html="item.text"></p>
            </li>

            <div style="display:block; margin-bottom:32px"></div>

            <div class="steps">
              <p class="tag">STEP3</p> <p class="steptitle">アイデア出し</p>
            </div>
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
import Header from '../../components/Header.vue'


export default {
  data() {
    return {
      
      courses:[
        { id: "1", 
          title: '1.デザインするお題とフローを解説します', 
          text:'12:36', 
          description:
            '<span>Spotifyという音楽サービスを題材にしてお題をデザインしていきます。デザインフローのイメージとお題の内容についてみていきましょう。<br>Spotifyのアプリを触ったことがない人はぜひダウンロードして使いましょう。<br>※撮影はiOSのSpotifyアプリ(2020年7月時)を題材にしています。Androidでも問題はございません。<br><br>▼ ダウンロード<br><a href="https://support.spotify.com/jp/using_spotify/getting_started/download-the-spotify-player/">https://support.spotify.com/jp/using_spotify/getting_started/download-the-spotify-player/</a></span>', 
          videoID: '332768034'},
        { id: "2", title: '2.目的の達成に必要な要素を洗い出そう', text:'5:34', 
          description:'<span>まずはお題を達成するために何が必要なのか。要素を洗い出していきましょう。達成状態のユーザーの行動フローをもとに考えていきます。</span>',
           videoID: '141851770'
          },
        { id: "3", title: '3.既存のサービスフローを元にアイデアを出す', text:'10:17',
           description:'<span>Spotifyのユーザフローに沿って今回のお題のアイデアを自然に入れられる場所がないか、探していきます。</span>', videoID: '443916826'},
        { id: "4", 
          title: '4.出したアイデアで必要な要素を洗い出す', 
          text:'14:00', 
          description:
            '<span>決めたアイデアの方向性の中で、必要な要素を洗い出します。UIのアイデアを具体化するときに考えなくてはいけない要素を出していきます。</span>', 
          videoID: '332768034'},
        { id: "5", title: '5.アイデア出しのまとめ', text:'3:30',
          description:'<span>方向性が決まったので、アイデア出しのステップをまとめました。決めたアイデアと目的や課題感を振り返っていきます。</span>', videoID: '141851770'}
      ],
      courses2:[
        { id: "1", 
          title: '6.UIオブジェクトに必要な情報をアイデア出し', 
          text:'9:25', 
          description:
            '<span>いきなりビジュアルを作る前にUIのアイデアを考えていきます。まずは表示しユーザーが操作する”オブジェクト”に必要な情報を考えていきましょう。</span>', 
          videoID: '332768034'},
        { id: "2", title: '7. 既存のSpotifyの中で最適な表示場所を考える', text:'9:16',
          description:'<span>前回考えた"オブジェクト"を表示する場所を、既存のSpotifyの情報を整理して考えていきます。</span>', videoID: '141851770'},
        { id: "3", title: '8.My Libraryの中での情報の表示場所を考える', text:'7:37',
          description:'<span>MyLibraryの中で"オブジェクト"をどう表示するのか考えていきます。</span>', videoID: '141851772'},
        { id: "4", 
          title: '9.UIグラフィックのリサーチ', 
          text:'6:59', 
          description:
            '<span>UIアイデアの方向性が決まったので、具体化する前に参考になるサービスを探してスクリーンショットを集めていきましょう。</span>', 
          videoID: '332768034'},
        { id: "5", title: '10.UIラフを紙に描く', text:'12:02', description:'<span>参考サービスを見ながらUIビジュアルのラフスケッチをしてアイデアパターンを出していきます。</span>', videoID: '141851770'},
      ],
      courses3:[
        { id: "1", 
          title: '11. UIパターン出し-Spotifyの参考パターン', 
          text:'22:38', 
          description:
            '<span>既存のSpotifyを参考にUIビジュアルのパターンを作成していきましょう。</span>', 
          videoID: '332768034'},
        { id: "2", title: '12. UIパターン出し-参考デザインのパターン', text:'12:43',
          description:'<span>参考デザインを元にUIビジュアルのパターンを作成していきましょう。</span>', videoID: '141851770'},
        { id: "3", title: '13.  UIパターン出し - 実機確認して作成UIをチェック', text:'12:47',
          description:'<span>自分で作成したUIビジュアルをチェックして、ベストなアイデア選びとフィードバックをしていきましょう。</span>', videoID: '141851772'},
        { id: "4", 
          title: '14. UIパターン出し - フィードバック内容を修正して完成', 
          text:'16:37', 
          description:
            '<span>チェックをして出てきたポイントを改善して、UIを完成させていきます。</span>', 
          videoID: '332768034'},
        { id: "5", title: '15. 追加お題', text:'4:54',
          description:'<span>今回の内容をそのまま使って解けるお題です。動画の内容やフローを参考にして、自分なりにトライしていきましょう。<br>あくまで参考ですが、カイクンがやった場合のアンサー動画は別の動画シリーズ「UI DESIGN FLOW BASIC PLUS」で解説していきます。</span>', videoID: '141851770'},
      ],
      isActive: '1',
      active: false,
      playerReady: false,
    }
  },
  components: { 
    vueVimeoPlayer,
    Header
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
    margin-bottom: $margin-2;
    padding: 0 0 $margin-1;
    border-bottom: 1px solid #333;
    h2{
        @include text-titleSmall;
        font-family: futura;
      }
		.tag {
      @include text-bodyNormal;
      color: $color-textWhite;
      margin-bottom: $margin--1;
      letter-spacing: 1px;
		}
	}
	.content {
    @include flex-spacebetween;
    justify-content: flex-start;
    .content-list{
      width: 67%;
      .item {
          display: contents;
          .movie {
            border-radius: 8px;
            margin-bottom: $margin--1;
            position: relative;
            width: 100%;
            padding-top: 56.25%;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
              iframe{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: none;
                display: block;
            }
          }
          .text {
            width: 100%;
            cursor: pointer;
            .title{
              @include text-bodyNormal;
              font-weight: bold;
              color:$color-textWhite;
              margin-bottom: $margin--3;
              padding: 0;
              border: none;
            }
            .detail{
              @include text-bodyNormal;
              color:$color-textGray0;
              margin-bottom: $margin--2;
              height: 56px;
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
    }
		
		.list {
      width: 33%;
      margin: 0px 0 0 32px;
			.lists {
        max-height:356px;
        overflow:scroll;
        padding-bottom: 32px;
        border-bottom: 1px solid rgba(255,255,255,0.08);
        .steps{
          display: flex;
          justify-content: flex-start;
          padding-bottom: 12px;
          border-bottom: 1px solid #6C6C6F;
          margin-bottom: 20px;
          .tag{
            font-size: $text-bodyTiny;
            font-family: futura;
            padding: 11px 0px;
            line-height: 1;
            border-radius: 100px;
            margin-right: 12px;
            font-weight: bold;
          }
          .steptitle{
            font-size: 14px;
            font-weight: bold;
            line-height: 2;
          }
        }
				.content {
           @include flex-spacebetween;
           padding: 16px 16px;
           border-radius: 8px;
           margin-bottom: 4px;
           cursor: pointer;
           &.active,&:hover{
             background-color:$color-bgLight0 ;
             .copy{
               .title{
                 font-weight: bold;
                 color: white;
                 padding: 0;
               }
             }
           }
          .copy{
            @include flex-spacebetween;
            color:$color-textWhite;
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
              @include text-bodySmall;
              line-height: 1.2;
              margin: 0;
              padding: 0;
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

@media screen and (max-width: 1100px){
 .item.pc{
      display: none!important;
  }
  .item.sp{
    display: block!important;
  }

  $coursepage-padding:0 7%;

  #course-detail {
    padding: 88px 0 ;
    .title {
      padding:$coursepage-padding;
      margin:0 auto $margin--3;
      padding: 0;
      width: 90%;
      h2{
          @include text-titleTiny;
          margin-right: $margin--2;
        }
      .tag {
        display: block;
        @include text-bodySmall;
        color: $color-textGray0;
        margin-bottom: $margin--1;
      }
    }
    .content {
      display: block;
      .content-list{
        width: 100%;
          .item {
          display: contents;
          .movie {
            border-radius: 0px!important;
            .player{
            }
          }
          .text {
            margin: 0px auto 32px;
            padding: 0;
            width: 88%;
            .title{
              @include text-bodyNormal;
              font-weight: bold;
              color:$color-textWhite;
              margin:0 0 $margin--3;
              padding: 0;
            }
            .detail{
              @include text-bodySmall;
              color:$color-textGray0;
              line-height: 2;
              height: 0px;
              margin-bottom: $margin--2;
              padding-bottom: 11%;
              border-bottom: 1px solid $color-bgLight1;;
            }
          }
        }
      }
      
      .list {
        padding: 3% 0%;
        width: 88%;
        margin: 0 auto;
        .lists {
          max-height:none;
          overflow:visible;
          .steps{
            padding-bottom: 0px;
            .tag{
              font-size: 8px;
              padding: 9px 0px;
              height: 16px;
            }
            .steptitle{
              font-size: 12px;
            }
          }
          .content {
            @include flex-spacebetween;
            padding: 16px 8px;
            &.active,&:hover{
              background-color:$color-bgLight0 ;
            }
            .copy{
              @include flex-spacebetween;
              font-size: 13px;
              height: 16px;
              overflow: hidden;
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

@media screen and (max-width: 640px){

  .item.pc{
      display: none!important;
  }
  .item.sp{
    display: block!important;
  }

  $coursepage-padding:0 7%;

  #course-detail {
    padding: 20% 0 ;
    .title {
      padding:$coursepage-padding;
      margin:0 auto $margin-1;
      padding: 0;
      width: 92%;
      h2{
          @include text-titleTiny;
          margin-right: $margin--2;
        }
      .tag {
        display: block;
        @include text-bodySmall;
        color: $color-textGray0;
        margin-bottom: $margin--1;
      }
    }
    .content {
      display: block;
      .content-list{
        width: 100%;
          .item {
          display: contents;
          .movie {
            border-radius: 0px!important;
            .player{
            }
          }
          .text {
            margin: 0px auto 32px;
            padding: 0;
            width: 88%;
            .title{
              @include text-bodyNormal;
              font-weight: bold;
              color:$color-textWhite;
              margin:0 0 $margin--3;
              padding: 0;
            }
            .detail{
              @include text-bodySmall;
              color:$color-textGray0;
              line-height: 2;
              height: 0px;
              margin-bottom: $margin--2;
              padding-bottom: 11%;
              border-bottom: 1px solid $color-bgLight1;;
            }
          }
        }
      }
      
      .list {
        padding: 3% 0%;
        width: 88%;
        margin: 0 auto;
        .lists {
          max-height:none;
          overflow:visible;
          .steps{
            padding-bottom: 0px;
            .tag{
              font-size: 8px;
              padding: 9px 0px;
              height: 16px;
            }
            .steptitle{
              font-size: 12px;
            }
          }
          .content {
            @include flex-spacebetween;
            padding: 16px 8px;
            &.active,&:hover{
              background-color:$color-bgLight0 ;
            }
            .copy{
              @include flex-spacebetween;
              font-size: 13px;
              height: 16px;
              overflow: hidden;
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
