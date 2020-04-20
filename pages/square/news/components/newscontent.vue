<template>
			<div class="topic-content">
				<div class="topic-header">
					<h1 class="topic-title">土豆炒肉的简单做法</h1>
					<p>
						<img  :src=avatar>
						<span class="topic-username">alsotang</span>
						<span>·</span>
						<span>
							2018-10-27
						</span>
					
					</p>
				</div>
        <div class="markdown-text"><div ><p><span>土豆炒肉的做法简单好吃，你会做吗？土豆。相信每一个人都吃过，它是一种非常好吃的佳肴，最主要的是营养丰富。科学家还说，土豆还是可以当主食的呢。最主要的是它还非常地便宜。适合好每一个人家庭的消费。但是怎样才能把土豆炒的好吃呢？这是一个令人思考的问题，很多人都不会炒，接下来呢，就教大家怎么才能把土豆炒的非常的好吃。</span></p><div><img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2623355428,3092065324&amp;fm=173&amp;app=25&amp;f=JPEG?w=520&amp;h=390&amp;s=F91E6A960E1370C2CCBB8A6F0300706B" data-loaded="0"></div><p><span>首先，先准备几个土豆？然后用我们家中的刀子把土豆的皮全部消去。但是，如果是绿色的土豆，千万不要拿来炒，绿色的是有毒的，吃了会引起食物中毒，所以，要当心啦。把土豆都削好之后就拿去把它清洗干净。然后把它切成一片一片的。不需要太大，但是也不能太小。就是切成土豆丝的那个样子。把土豆切成丝之后，接下来。还可以切一些肉。<span></span></span></p><div><img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2696312564,2081259362&amp;fm=173&amp;app=25&amp;f=JPEG?w=640&amp;h=480&amp;s=BDB05E91121255D298263A3E03005078" data-loaded="0"></div><p><span>切什么肉都可以，在这里就与热狗为例子。首先呢，把我们的热狗。切成一片一片的，热狗不需要太多，一条就可以了。当然一定要把外面的那一层皮去掉，因为那一层皮是胶来的，胶，大家都应该知道吧，对我们的身体是不好的，吃多味之源致癌的。材料都准备好之后。就锅洗干净。然后我就去红梢油打开煤气。放入适量的油。以后把。土豆放进锅中。<span></span></span></p><div><img  src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3476534232,1231338847&amp;fm=173&amp;app=25&amp;f=JPEG?w=320&amp;h=341&amp;s=9B20068F140B36E60C92C82A0300B05B" data-loaded="0"></div><p><span>火后也需要比较大。不然太小，永远跟开说桥头，到了时候，我后头是要大一些的。接下我们就不停地翻炒。找到差不多的时候，就到水，水也不能到了太多了。倒入雪菊后呢？接下来就可以把我们的煤气关小一点。不需要太大。等锅中的水沸腾了之后，又开始翻炒，但是。又能芳草地太大力，有个放小的，太大力，土豆就烂了。翻炒一会就可以把热狗给下锅了。<span ></span></span></p><div ><img  src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2196658944,1063287174&amp;fm=173&amp;app=25&amp;f=JPEG?w=590&amp;h=443&amp;s=4300F60F405567C248A7EA2C0300706C" data-loaded="0"></div><p><span>当是如果你真喜欢的歌我就没水的话我又想土豆不那么干我花也可以加入适量的水。但是不能太多，太多了就不好吃了。差不多之后，接下来就是放盐，还有糖，酱油这些东西。但是这些调料都是要适量，不能太多，但是也不能太少。多了会咸，放少了又没味，这都会影响土豆的质量，所以在放的时候就要格外小心了。这些调料都放下去之后。<span ></span></span></p><div ><img  src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3400232975,953189468&amp;fm=173&amp;app=25&amp;f=JPEG?w=450&amp;h=300&amp;s=DD006E9A42313D86D423CF640300F05F" data-loaded="0"></div><p><span >再过一会就可以把土豆给上锅了，一道香喷喷的土豆炒热狗就做好了。非常的好吃，而且做法也很简单。<span ></span></span></p><p><span ></span></p><p><span></span></p><p><span><span></span></span></p></div>
        </div>

			</div>
</template>

<script>
  import config from "~/config";
  

  export default {
    components: {

    },
    data() {
      return {
        avatar : `${config.IMG_URL}1147375.jpg`
      }
    },
   
  };

</script>

<style lang="scss">
  @import "../../../../assets/styles/mixin";
  .topic-content {
    padding: 0 0.5rem;
    .topic-header {
      & p {
        margin-top: 0.2rem;
        color: #9D9E9F;
        font-size: 0.4rem;
        position: relative;
      }

      & img {
        display: inline-block;
        width: 1.7rem;
        height: 1.7rem;
        margin-right: 0.2rem;
        vertical-align: middle;
        border-radius: 100%;
      }

      & p span.collect {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
      .topic-title {
        color: #414243;
        font-size: 0.80rem;
        font-weight: 400;
      }
    }
    .markdown-text {
      color: #414243;
      font-size: .28rem;
      line-height: 0.95rem;

      & a {
        color: #225D99;
        word-break: break-word;
      }

      & img {
        width: 100%;
        margin: 0.3rem auto 0.46rem;
      }

      & blockquote {
        padding-left: 0.3rem;
        margin: 0.3rem 0;
        border-left: 4px solid #E2E3E4;
      }

      & p {
        word-break: break-word;
        font-size: 0.60rem;
      }

      & h1, & h2 {
        font-size: 0.38rem;
        font-weight: 400;
      }

      & p, & h1, & h2 {
        margin: 0.3rem 0;
      }

      & ul {
        padding-left: 0.34rem;
        margin: 0.3rem 0;
      }

      & li {
        margin-top: 0.16rem;
        list-style: disc;
      }

      & .prettyprint {
        /* max-width: 5rem; */
        padding: 0.1rem 0.14rem;
        margin: 0.24rem 0;
        background-color: #F8F8F8;
        -webkit-overflow-scrolling: touch;
      }
    }

  }
 
 
</style>
