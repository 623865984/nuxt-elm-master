<template>
  <div class="order-page">
    <mt-header
      fixed
      title="订单"/>
    <div v-if="!userInfo||!userInfo.user_id" class="no-login">
      <img
        :src="nologin"
        class="nologin"
        alt="">
      <p>登陆后查看外卖订单</p>
      <button
        v-if="!userInfo||!userInfo.user_id"
        class="login"
        @click="$router.push('/login')">立即登录</button>
    </div>

    <div v-if="userInfo&&userInfo.user_id" class="yes-login">
      <p v-if="!orderList.length">您还没有订单，赶紧去下单吧！</p>
      <OrderList
      v-for="(item,index) in orderList"
      v-bind:todo="item"
      v-bind:key="index">
      </OrderList>
    </div>
    <Tabbar page="2" />
  </div>
</template>

<script>
  import config from "~/config";
  import Tabbar from "~/components/tabbar";
  import OrderList from "./components/orderlist"
  import {
    mapGetters
  } from "vuex";
  import {
    getOrderData
  } from "~/assets/services/order";

  export default {
    components: {
      Tabbar,
      OrderList,
    },
    head: {
      title: "订单"
    },
    data() {
      return {
        nologin: `${config.IMG_URL}nologin.png`,
        orderList: [],
      }
    },
    async asyncData() {
          const res = await getOrderData();
          res.data.map(item => {
            item.imgUrl = config.IMG_URL + item.imgUrl;
          });
          return {
            orderList: res.data
          };
        },
    computed: {
      ...mapGetters(["userInfo"])
    },

  };

</script>

<style lang="scss">
  @import "../../assets/styles/mixin";

  .order-page {
    padding: px2rem(88px) 0 53px 0;

    .no-login {
      text-align: center;

      .nologin {
        width: px2rem(400px);
        height: px2rem(400px);
        margin: 15vh auto px2rem(10px) auto;
      }

      p {
        color: #6a6a6a;
        font-size: px2rem(32px);
        margin-bottom: px2rem(15px);
      }

      .login {
        width: px2rem(240px);
        height: px2rem(80px);
        background: $primary;
        border: none;
        color: #fff;
        font-size: px2rem(28px);
        border-radius: 2px;
      }
    }
    .yes-login {
      text-align: center;
      p {
        color: #6a6a6a;
        font-size: px2rem(32px);
        margin-bottom: px2rem(15px);
      }

    }
  }

</style>
