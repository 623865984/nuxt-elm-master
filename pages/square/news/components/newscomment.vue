<template>
  	<div class="reply" ref="reply">
				<div class="reply-count">
				190条评论
				</div>
				<ul>
          <li v-for="(item,index) in list" :key="index">
          <div class="reply-item">
            <div class="left">
              <a target="_blank" href="https://cnodejs.org/user/zengxs"><img :src="item.img" class="avatar"></a>
            </div>
            <div class="right">  
              <a class="reply-name" target="_blank" >{{item.username}}</a>
              <p class="reply-content">{{item.content}}</p>
              <p class="reply-ft">
                <span>
                {{item.time}}
                </span>
                <template >
                  <span class="like">赞</span>
                  <span class="like-count" v-text="item.zancount + ' 赞'"></span>
                </template>
              </p>
            </div>  
          </div>
          </li>
				</ul>
			</div>
</template>

<script>
  import config from "~/config";


  export default {
    components: {

    },
    data(){
      return{
        list: [
        { img: `${config.IMG_URL}227713.jpg`,
          username : "吴彦祖",
          time : "2019-4-11",
          content : "哇！楼主好厉害！",
          zancount : "1500",
         
        },
         {img: `${config.IMG_URL}1147375.jpg`,
          username : "张家辉",
          time : "2019-5-03",
          content : "进来学习一下",
          zancount : "25100",
         
        },
         {img: `${config.IMG_URL}19516344.jpg`,
          username : "古天乐",
          time : "2018-1-11",
          content : "看起来不是很难做",
          zancount : "15840",
         
        },
         {img: `${config.IMG_URL}41500847.png`,
          username : "周星驰",
          time : "2017-5-11",
          content : "应该挺简单的",
          zancount : "15000",
          
        },
        {img: `${config.IMG_URL}49425206.png`,
          username : "刘德华",
          time : "2018-5-11",
          content : "66666666666",
          zancount : "15000",
          
        },
       ]
      }
      
    }
   
  };

</script>

<style lang="scss">
  @import "../../../../assets/styles/mixin";
    .reply{
      padding: 0 0.5rem;
      .reply-count {
        padding: 0.46rem 0.26rem 0.16rem;
        color: #9D9E9F;
        font-size: .28rem;
        border-top: 1px solid #F1F2F3;
      }
      .reply-item {
        
        display: flex;
        justify-content: space-between;
        padding: 0.23rem 0.26rem 0.08rem;
        border-bottom: 1px solid #F1F2F3;
        .left{
          width: 2.5rem;
          
          & .avatar {
            display: inline-block;
            width: 1.7rem;
            height: 1.7rem;
            margin-right: 0.2rem;
            vertical-align: middle;
            border-radius: 100%;
            }
        }
        .right{
           width: 11.5rem;
           
          .reply-name {
            color: #225D99;
            font-size: 0.5rem;
          }
          .reply-ft {
            margin-top: 0.5rem;
            position: relative;
            color: #9D9E9F;
            font-size: 0.55rem;
            .like {
              margin-left: 0.2rem;
            }
            .like-count {
              position: absolute;
              right: 0;
            }
          }

          & p {
            margin: 0.35rem 0;
          }

          

          & .reply-content {
            color: #414243;
            font-size: 0.6rem;
          }
       }
      }
        
    }


</style>
