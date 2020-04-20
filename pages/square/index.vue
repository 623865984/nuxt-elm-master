<template>
  <div class="square-page">
    <mt-header 
      fixed 
      title="广场"/>
    <div>
      
    <NewsList />
    </div>

    <Tabbar page="1" />
  </div>
</template>

<script>
  import config from "~/config";
  import Tabbar from "~/components/tabbar";
  import NewsList from "./components/newslist"

  export default {
    components: {
      Tabbar,
      NewsList
    },
    head: {
      title: "广场"
    },
  };

</script>

<style lang="scss">
  @import "../../assets/styles/mixin";

  .square-page {
    padding: px2rem(88px) 0 53px 0;

  }

</style>
