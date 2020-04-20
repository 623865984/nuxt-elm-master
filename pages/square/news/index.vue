<template>
  <div class="news-page">
    <mt-header 
      fixed 
      title="帖子正文">
      <div 
        slot="left" 
        @click="$router.go(-1)">
        <mt-button icon="back"/>
      </div>
    </mt-header>
    <div>
    <NewsContent />

    <NewsComment />
    </div>
   
  </div>
</template>

<script>
  import config from "~/config";
  import NewsComment from "./components/newscomment"
  import NewsContent from "./components/newscontent"

  export default {
    components: {
        NewsContent,
        NewsComment
    },
    head: {
      title: "帖子正文"
    },
    data() {
      return {
        discover1: `${config.IMG_URL}discover/discover1.jpg`,
        discover2: `${config.IMG_URL}discover/discover2.jpg`,
      }
    }
  };

</script>

<style lang="scss">
  @import "../../../assets/styles/mixin";

  .news-page {
    padding: px2rem(88px) 0 53px 0;
    background-color: #fff;

  }

</style>
