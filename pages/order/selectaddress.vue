<template>
  <div class="address-page">
    <mt-header 
      fixed 
      title="选择地址">
      <div 
        slot="left" 
        @click="$router.go(-1)">
        <mt-button icon="back"/>
      </div>
    </mt-header>
    <ul>
      <li 
        v-for="(item,index) in addressList" 
        :key="item.id" 
        class="address-item"
        @click='select(index)'>
        <div>
          <p>
            {{ item.name }}
            <span>{{ item.phone }}</span>
          </p>
          <p class="detail">{{ item.address }} {{ item.details }}</p>
        </div>
        <svg 
          width="15" 
          height="15" >
          <use xlink:href="#arrow-right"/>
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
  import {
    getAddress,
    deleteAddress,
    mapMutations,
  } from "~/assets/services/user";
  import {
    MessageBox,
    Toast
  } from "mint-ui";

  export default {
    head: {
      title: "选择地址"
    },
    data() {
      return {
        addressList: []
      };
    },
    mounted() {
      this.dataInit();
    },
    methods: {
      async dataInit() {
        const {
          data
        } = await getAddress();
        this.addressList = data;
      },
      select(index) {
        this.$router.replace({path: 'payment', query: {select: index}});
        console.log(index);
      },
      
    }
  };

</script>

<style lang="scss">
  @import "../../assets/styles/mixin";

  .address-page {
    padding: px2rem(88px) 0 0 0;

    .add-address {
      width: 100%;
      height: px2rem(100px);
      line-height: px2rem(100px);
      background: #fff;
      position: fixed;
      bottom: 0;
      @include fj(center);
      align-items: center;
      font-size: px2rem(32px);
      color: #3190e8;

      img {
        width: px2rem(40px);
        height: px2rem(40px);
        margin-right: 5px;
      }
    }

    .address-item {
      @include fj();
      align-items: center;
      height: px2rem(140px);
      font-size: px2rem(34px);
      padding: 0 px2rem(30px);
      background: #fff;

      span {
        color: #666;
      }

      .detail {
        font-size: px2rem(28px);
        color: #666;
      }
    }
  }

</style>
