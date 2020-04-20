<template>
  		<div class="container">
        <ul>
          <li class="item" v-for="(item,index) in list" :key="index">
            <router-link to="square/news">
            <div class="item-user-bar">
              <!-- <img class="avatar" src="../images/loading.png"> -->
            <div class="avatar">
              <img :src="item.img">
            </div>
            <div class="item-detail">
                <span class="username">{{item.username}}</span>
                <span class="label" v-if="item.zd==1" >置顶</span>
                <span class="label" v-if="item.jh==1">精华</span>
                <span class="label" v-if="item.fx==1">
                  分享
                </span>
                <p class="item-time">
                {{item.time}}
                </p>
              </div>
            </div>
            <div class="item-content">
              
                <p style="font-size: 0.65rem;">{{item.content}}</p>
              
            </div>
            <div class="item-btn-wrap">
              <div class="btn visit-btn">
                <span>
                   <i class="iconfont icon-new"></i>
                  {{item.clickcount}}
                </span>
              </div>
              <div class="btn reply-btn">
                
                  <span>
                     <i class="iconfont icon-shoucang"></i>
                    {{item.comment}}
                  </span>
                
              </div>
              <div class="btn share_btn">
                <i class="iconfont icon-fenxiang"></i>
                分享
              </div>
            </div>
            </router-link>
          </li>
        </ul>
		</div>
</template>

<script>
  import config from "~/config";

  export default {
    data(){
      return{
        list: [
        { img: `${config.IMG_URL}227713.jpg`,
          username : "吴彦祖",
          time : "2019-4-11",
          content : "演员的自我修养   快点来看看！！",
          clickcount : "1500",
          comment : "21" ,
          fx : 1,
          jh : 0,
          zd : 1,
        },
          {img: `${config.IMG_URL}1147375.jpg`,
            username : "alsotang",
            time : "2019-5-03",
            content : "土豆炒肉的简单做法",
            clickcount : "25100",
            comment : "35",
            fx : 1,
            jh : 0,
            zd : 0,
        },
         {img: `${config.IMG_URL}19516344.jpg`,
          username : "古天乐",
          time : "2018-1-11",
          content : "点一下玩一年！！",
          clickcount : "15840",
          comment : "48",
          fx : 0,
          jh : 0,
          zd : 0,
        },
         {img: `${config.IMG_URL}41500847.png`,
          username : "周星驰",
          time : "2017-5-11",
          content : "《美人鱼》   快点看看！！",
          clickcount : "15000",
          comment : "60",
          fx : 1,
          jh : 0,
          zd : 0,
        },
        {img: `${config.IMG_URL}49425206.png`,
          username : "刘德华",
          time : "2018-5-11",
          content : "演员的自我修养   快点看看！！",
          clickcount : "15000",
          comment : "40",
          fx : 0,
          jh : 0,
          zd : 1,
        },
       ]
      }
      
    }
 
  };

</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/mixin";
  @import "../../../assets/styles/test";
    .container {
      padding-top: 0.1rem;
      transition: all .25s ease;
      background-color: #F2F2F2;
      will-change: transform;
      .item {
        padding-top: 0.3rem;
        margin-top: .2rem;
        background-color: #FFF;
      }
        .item-user-bar {
          @include flex;
          align-items: flex-start;
          padding: 0 0.2rem;
          @include margin-bottom;
          .avatar {
            width: 1.8rem;
            @include avatar;
            margin-right: 0.3rem;
            
            background-size: .4rem;
            & img{
                display: inline-block;
                width: 1.7rem;
                height: 1.7rem;
                margin-right: 0.2rem;
                vertical-align: middle;
                border-radius: 100%;
              }
            
          }
          .item-detail {
            flex: 1;
            .username {
              margin-right: 0.1rem;
              color: #F68030;
              font-size: .28rem;
            }
            .label {
              padding: 1px 0.08rem;
              margin-right: 0.1rem;
              color: #1ABC9C;
              font-size: .22rem;
              border: 1px solid #1ABC9C;
            }
            .item-time {
              margin-top: 0.1rem;
              color: #999;
              font-size: .22rem;
            }
          }
        }
        .item-content {
          @include margin-bottom;
          padding: 0 0.2rem;
          color: #333;
          p {
             

           }
        }
        .item-btn-wrap {
          @include flex;
          color: #929292;
          @include text-align;
          font-size: 0.26rem;
          line-height: 1.4rem;
          border-top: 1px solid #EEE;

          & .btn {
            flex: 1;
            position: relative;

            &::after {
              content: "";
              width: 1px;
              height: 70%;
              position: absolute;
              top: 50%;
              right: 0;
              transform: translateY(-50%);
              background-image: linear-gradient(#FFF, #E7E7E7, #FFF);
            }
          }

          & .iconfont {
            
            vertical-align: middle;
          }
          .reply-btn a {
            display: block;
            color: #929292;
          }
        }
              
    }

  
</style>
