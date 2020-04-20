<template>
  
    <li class="orderItem">
      <div class="row" style="min-height:2rem;">
        <div class="shop_header">
          <img :src="todo.imgUrl" alt="">
          <div class="shop_text">
            <h2 class="fn-15 fw-2">
              <span style="font-size: 0.5rem;"> {{todo.shopName}}</span>
              <span>
                <svg fill="#bbb">
                  <use
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xlink:href="#arrow-right"/>
                </svg>
              </span>
            </h2>
            <span class="time">{{dateFormat(todo.created_at)}}</span>
          </div>
        </div>
        <div class="order_state">
          <p>订单已完成</p>
          <span>
            <svg fill="#bbb">
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#arrow-right"/>
            </svg>
          </span>
        </div>
      </div>
      <div class="row">
        <div class="shop_header">
          <div class="shop_text">
            <span style="padding-left:2rem;font-size: 0.5rem;" class="fn-c-memo"> {{todo.content}}</span>
            <p v-if="todo.count!=1">等{{todo.count}}件商品</p>
          </div>
        </div>
        <div class="order_state fn-13" style="padding-left:2rem;font-size: 0.5rem;">
          ￥{{todo.price}}
        </div>
      </div>
      <div class="row" style="justify-content: flex-end;">
        <mt-button class="fw-4" style="margin-right:0.4rem;height:1.4rem;font-size: 0.6rem;" plain size="small" type="primary">再来一单</mt-button>
        <mt-button class="fw-4" style="margin-right:0.4rem;height:1.4rem;font-size: 0.6rem;" plain size="small" type="danger">评价得190积分</mt-button>
      </div>
    </li>
  
</template>

<script>
  import config from "~/config";

  export default {
      data(){
        return{
          right : `${config.IMG_URL}227713.jpg`,
          
        };
      
      },
      props: ['todo'],
      methods: {
        // 格式化时间
        dateFormat:function(time) {
            var date=new Date(time);
            var year=date.getFullYear();
            /* 在日期格式中，月份是从0开始的，因此要加0
            * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
            * */
            var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
            var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
            var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
            var minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
            var seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds();
            // 拼接
            return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
        }

      }
    
};

</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/mixin";
  .orderItem {
    min-height: 120px;
    background: #fff;
    .row {
      align-items: center;
      min-height: 2.3rem;
      display: flex;
      justify-content: space-between; // border-bottom: .5px solid #e5e5e5;
      box-shadow: 0 0 1px rgba(0, 0, 0, .11);
      .shop_header {
        flex: 2;
        display: flex;
        align-items: center;
        .shop_text {
          
          p {
            float: left;
            font-size: 0.5rem;
            color: #000;

          }
          span {
            float: left;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 0.5rem;
            svg {
              @include wh(0.45rem,0.45rem);
              margin-left: 0.2rem;
            }
          }
          .time {
            font-size: 0.5rem;
          }
          h2 {
            width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis; // overflow: hidden;
            position: relative;
            display: flex;
            align-items: center;
            
            img {
              height: 15px;
              width: 15px; // top: -5px;
              // right: -15px;
              // position: absolute;
              margin: 5px;
            }
          }
        }
        img {
            height: 2rem;
            margin: 10px;
          }
      }
      .order_state {
        flex: .6; // flex: 0 0 100px;
        display: flex;
        align-items: center;
        p {
          font-size: 0.5rem;
        }
        span {
          
          svg {
            @include wh(0.45rem,0.45rem);
            margin-left: 0.2rem;
          }
        }
      }
    }
}  
  
</style>