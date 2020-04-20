<template>
  <div class="news-page">
   这里是测试模块2<p>{{this.$route.query.select}}</p>
   <div v-for="(item,index) in getcount" :key="index">
      <p>{{item.name}}</p>
      <p>{{item.title}}</p>
      <p>{{item.price}}</p>
   </div>
   <router-link  to='test3'>
     去test3
   </router-link>  
   
   
   <div style="margin-top:10px;background:white" v-for="(item,index) in orderList" :key="index">
        <p>{{item.content}}</p>
   </div>
   <div style="margin-top:10px;background:white" v-for="(item,index) in navList" :key="index">
        <p>{{item.text}}</p>
        
   </div>
   
   
  </div>
</template>

<script>
  import config from "~/config";
  import {
    getOrderData
  } from "~/assets/services/order";
  import {
    getHomeData
  } from "~/assets/services/common";
  import { mapGetters,
           mapMutations,
  } from 'vuex'

  export default {
    components: {

    },
    data() {
    return {
      orderList: [],
      navList: [],
      testList: [
          {
          name: 'liudehua',
          title: 'xixixi',
          price: 60
          },
          {
          name: 'afasf',
          title: 'xixihgerhxi',
          price: 70
          }
      ]
      
    };
  },
    methods: {
      setcount(){
        this.$store.commit('setcount',this.testList);
      }
    },
    computed: {
      ...mapGetters(["getcount"]),
      ...mapGetters(["orderInfo"]),
      ...mapGetters(["userInfo"]),
      
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
  async asyncData() {
      const res = await getHomeData();
      res.data.map(item => {
        item.imgUrl = config.IMG_URL + item.imgUrl;
      });
      return {
        navList: res.data
      };
    },
  
   
  };

</script>

<style lang="scss">
  @import "../assets/styles/mixin";



</style>
 