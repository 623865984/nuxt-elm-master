<template>
  <div class="payment-page">
    <mt-header 
        fixed 
        title="确认支付">
        <div 
        slot="left" 
        @click="$router.go(-1)">
        <mt-button icon="back"/>
        </div>
    </mt-header>
    <!-- 地址信息 -->
    <div class="cart-address" v-if="addressList">
        <div class="address-item">
            <div class="title">
                <span>订单配送至</span>
                <span>学校</span>
            </div>
            <div class="address-detail"
                 @click="$router.replace('selectaddress')"
                 >
                <span>{{ addressList.address }} {{ addressList.details }}</span>
                <span class="address">
                  <svg fill="#bbb">
                    <use
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="#arrow-right"/>
                  </svg>
                </span>
            </div>
            <div class="address-name">
                <span>{{addressList.name}}</span>
                <span>{{addressList.phone}}</span>
            </div>     
        </div>    
    </div>
    <div class="noaddress" v-else>
      <p>请先完善地址信息</p>
    </div>

    <!-- 支付内容 -->
    <div class="msg_content">
    	<!-- 配送方式 -->
        <div class="time">
        	<div class="peisong">
        		<p>配送方式</p>
        		<span class="arrow-right">
                  <svg fill="#bbb">
                    <use
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="#arrow-right"/>
                  </svg>
                </span>
        		<a href="#">自取/配送</a>
            
        	</div>
        	<div class="pay">
        		<p>支付方式</p>
        		<span class="arrow-right">
                  <svg fill="#bbb">
                    <use
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xlink:href="#arrow-right"/>
                  </svg>
                </span>
        		<a href="#">在线支付</a>
            
        	</div>
        </div>

        <!-- 商品展示 -->
        <div class="order">
            <h2 class="title">
                <font>{{orderInfo.shopName}}</font>
            </h2>
            <div v-for="(food,index) in orderInfo.selectFoods" :key="index" class="order_item">
                <div class="left">
                    <h2>
                        <font>{{food.name}}</font>
                        <font>X{{food.count}}</font>
                    </h2>
                    <span>{{food.description}}</span>
                </div>
                <div class="right">
                    <h2>￥{{food.price*food.count}}</h2>
                </div>
            </div>
            <div class="peisong order_item">
                <div class="left">
                    <h2>
                        配送费
                    </h2>
                </div>
                <div class="right">
                    <h2>{{orderInfo.deliveryPrice}}</h2>
                </div>
            </div>
            <div class="count">
            	<p>{{totalPrice+orderInfo.deliveryPrice}}</p>
            	<p>小计￥</p>
            </div>
        </div>
    </div>

    <!-- 底部导航 -->
    <div class="footer">
        
        <div class="left ">￥{{totalPrice+orderInfo.deliveryPrice}}</div>
        <div class="right" @click="submit()">去支付</div>
        
    </div>

  </div>
</template>

<script>
  import config from "~/config";
  import {
    Toast
  } from "mint-ui";
  import {
    getAddress,
  } from "~/assets/services/user";
  import {
    addOrder
  } from "~/assets/services/order";
  import { mapGetters,
           mapMutations,
  } from 'vuex'
  import selectaddressVue from './selectaddress.vue';

  export default {
    data(){
    return{
      right : `${config.IMG_URL}227713.jpg`,
      addressList: [],
      select: 0,
    } 
  },
   
    mounted() {
      this.dataInit();
    },
    methods: {
    async dataInit() {
        const {
          data
        } = await getAddress();
        if(this.$route.query.select) {
          this.select = this.$route.query.select;
        };
        this.addressList = data[this.select];   
    },
    // 提交订单
    async submit() {
        if (!this.addressList) {
          Toast({
            message: "请先填写地址",
            position: "bottom",
            duration: 1500
          });
          return;
        }
        const {
          code
        } = await addOrder({
          shopName: this.orderInfo.shopName,
          imgUrl: 'xiuyuan-s.png',
          content: this.orderInfo.selectFoods[0].name,
          price: this.totalPrice+this.orderInfo.deliveryPrice,
          shop_id: '1',
          count: this.totalcaount,
        });
        if (code === 0) {
          Toast({
            message: "下单成功!",
            position: "bottom",
            duration: 1500
          });
          this.$router.go(-1);
        }
      }
    
  },
  
  computed: {
      ...mapGetters(["userInfo"]),
      ...mapGetters({
        orderInfo: 'orderInfo'
      }),
      //总价
      totalPrice() {
        let total = 0;
        if(this.orderInfo.selectFoods.length) {
          this.orderInfo.selectFoods.forEach(food => {
          total += food.price * food.count;
        });
        } 
        return total;
      },
      //商品总数
      totalcaount() {
        let total = 0;
        this.orderInfo.selectFoods.forEach(food => {
          total += food.count;
        });
        return total;
      }
    },   
  };

</script>

<style lang="scss">
  @import "../../assets/styles/mixin";
  .payment-page {
    .cart-address{
        padding-top: px2rem(88px);
        .address-item{
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            background: $primary;
            flex-direction:column;
            .title{
             	margin-bottom: 10px;
             	display: flex;
				      width: 15rem;
             	justify-content: flex-start;
             
              
                span{
                  height: 18px;
                  font-size: .373333rem;
                  color: hsla(0,0%,100%,.8);
             	  
                
                
                  
              }

            }
            .address-detail{
              margin-bottom: 10px;
              width: 15rem;
              display: flex;

            	span {
            		font-size: 16px;
                color: #fff;
                width: 360px;
                &:first-child {
                  justify-content: flex-start;
                }
                &:last-child {
                  @include wh(0.46667rem, 0.98rem);
                  justify-content:flex-end;
                  svg {
                    @include wh(10px,10px);
                  }
                }
            	}

            }
            .address-name{
            	margin-bottom: 10px;
            	width: 15rem;
            	span {
            		font-size: 12px;
            		color: #e6f6ff;
            	}

            }
        }
    }
    .noaddress {
      padding-top: px2rem(88px);

      p {
        text-align: center;
        
      }
    }
    .msg_content {
        padding: 0px $pd-md 10rem $pd-md;
        background: -webkit-gradient(linear, left top, right top, from(#348F50), to(#56B4D3));
        .order {
            background: $white-color;
            margin: $mg-lg 0px;
            min-height: 80px;
            .title {
            text-align: center;
            width: 100%;
            padding: 10px;
            font {
                &::before {
                content: "-------";
                color: $divider-color;
                margin-right: 10px;
                }
                &::after {
                content: "-------";
                color: $divider-color;
                }
            }
            }
            .order_item {
            padding: $pd-md;
            display: flex;
            .left {
                flex: 1;
                h2 {
                font-size: $fn-lg;
                padding: 8px 0px;
                display: flex;
                justify-content: space-between;
                }
                span {
                font-size: $fn-sm;
                color: $description-color;
                }
            }
            .right {
                flex: 0 0 80px;
                h2 {
                font-size: $fn-lg;
                padding: 8px 0px;
                display: flex;
                justify-content: flex-end;
                }
            }
            }
            .peisong {
	            border-top: 1px dotted $divider-color;
	            }
            .count {
            	display: flex;
            	flex-direction: row-reverse;
            	border-top: 1px dotted $divider-color;
            	height: 60px;
            	p {
            		height: 60px;
            		line-height: 60px;
            		
					&:first-child {
						font-size: 20px;
						margin-right: 18px;
					}
					&:last-child {
						font-size: 16px;
					}
            	}
            }
        }
        .time {
        	background-color: #fff;
        	.peisong {
        		
        		height: 50px;
        		line-height: 50px;
        		p {
        			float: left;
        			font-size: 15px;
        			margin-left: 20px;
        			color: #575757;
        		}
        		a {
        			float: right;
        			color: #00e067;
        			margin-right: 10px;
        		}
        		span {
        			float: right;
        			svg {
        				@include wh(12px,12px);
        				margin-right: 0.3rem;
        			}
        		}
        	}
        	.pay {
        		
        		height: 50px;
        		line-height: 50px;
        		p {
        			float: left;
        			font-size: 15px;
        			margin-left: 20px;
        			color: #575757;
        		}
        		a {
        			float: right;
        			color: #00e067;
        			margin-right: 10px;
        		}
        		span {
        			float: right;
        			svg {
        				@include wh(12px,12px);
        				margin-right: 0.3rem;
        			}
        		}
        	}
        }
    }
	.footer {
		height: 44px;
		width: 100%;
		background-color: pink;
		position: fixed;
		z-index: 100;
		left: 0;
		bottom: 0;
		display: flex;
		.left {
			
			height: 44px;
			line-height: 44px;
			color: #fff;
			font-size: 16px;
			background-color: #3c3c3c;
			flex: 1;
		}
		.right {
			background-color: #00e067;
			width: 105px;
			height: 44px;
			line-height: 44px;
			text-align: center;
			color: #fff;
			font-size: 16px;
			flex: 0 0 105px;
		}
	}
}





</style>
