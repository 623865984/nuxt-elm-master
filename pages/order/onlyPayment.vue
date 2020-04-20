<template>
  <div class="payment-page">
    <mt-header 
        fixed 
        title="在线支付">
        <div 
        slot="left" 
        @click="$router.go(-1)">
        <mt-button icon="back"/>
        </div>
    </mt-header>
    <div>
        这是在线支付页面
    </div>
  </div>
</template>

<script>
  import config from "~/config";
  

  export default {
    
  };

</script>

<style lang="scss">
  @import "../../assets/styles/mixin";



</style>
