<template >
  <div class="blog-container">
    <div class="blogTop-bar b-layout">
      <router-link to="/">首页</router-link>
    </div>
    <blogImg>
      <span slot="blog-topFont" class="blog-topFont">於捨雜談</span>
    </blogImg>
    <!-- TODO test for loop blogContent  -->
    <article class="b-layout" v-if="!toggleTip">
      <blogContent
        v-for="(item, index) in blogLimits"
        :key="index"
        :content="item.blogBody"
        :artIndex="item.id"
        :tit="item.blogTitle"
        :time="item.blogCreateTime"
      />
    </article>
    <p v-if="toggleTip">抱歉没有数据哦~</p>
    <div class="page-container">
      <span v-if="greaterThanOne" @click="limitBlog('prev',defaultIndex)">上一篇</span>
      <span class="page-ite">{{defaultIndex}}/{{ parseInt(allBlogNum / 6) + 1}}</span>
      <span  v-if='defaultIndex < parseInt(allBlogNum / 6) + 1' @click="limitBlog('next',defaultIndex)">下一篇</span>
      <span>就 {{ allBlogNum }} 篇</span>
    </div>
  </div>
</template>

<script>
// components
// blog 展示页面 banner
import blogImg from "./blogComp/blogImg.vue";
// blog 展示页面 条目
import blogContent from "./blogContent/index.vue";

const log = console.log.bind(console);
const dir = console.dir.bind(console);

// blog.vue
export default {
  name: "blog",
  data() {
    return {
      blogLimits: null,
      allBlogNum: 0,
      toggleTip: false,
      defaultIndex: 1,
      greaterThanOne: false,
    };
  },
  components: {
    blogImg,
    blogContent
  },
  created() {
   
    this.getBlogLimit(0);
    // log(this.$blogApi.apiGetBlogLimit())
  },
  methods: {
    limitBlog(str, index) {
      this.blogLimits = null;
      switch (str) {
        case (str = "prev"):
          index -= 1;
          this.defaultIndex -= 1;
          index <= 1 ? (this.greaterThanOne = false) : "";
          // log('prev',index)
          this.getBlogLimit(index);
          break;
        case (str = "next"):
          index += 1;
          this.defaultIndex += 1;
          index > 1 ? (this.greaterThanOne = true) : "";
          // log('next',index)
          this.getBlogLimit(index);
          break;
        default:
      }
    },
    // 格式化时间
    momentTime(t) {
      var time = t;
      if (typeof time === "string") {
        time = parseInt(t);
      }
      return this.$moment(time).format("YY/MM/DD h:mm");
    },
    setPage(totalPageNum) {
      this.allBlogNum = totalPageNum;
    },
    blogResultArray(data) {
      data.forEach((ele, index) => {
        var t = ele.blogCreateTime;
        ele.id = String(ele.id);
        ele.blogCreateTime = this.momentTime(t);
        // ele.blogBody = `<p class="red">${ele.blogBody.split('<p>').join("").split('</p>')[0]}</p>`
      });
      return data;
    },
    async getBlogLimit(getNum = 0) {
      log(getNum)
      var data = await this.$blogApi.apiGetBlogLimit(getNum);
      var secondData = data.data;
      var arrayData = secondData.data;
      var pageNum = 0;
      data.length < 0 ? (pageNum = 0) : (pageNum = secondData.length);
      this.setPage(pageNum);
      if (arrayData.length === 0) {
        this.toggleTip = true;
      } else {
        this.toggleTip = false;
        this.blogLimits = this.blogResultArray(arrayData);
      }
    }
  }
};
</script>

<style lang='stylus'>
#app {
  height: unset;
  padding-bottom: 15px;
}

.b-layout {
  width: 1200px;
  margin: 0 auto;
}

.page-container {
  margin-top: 30px;
}

.page-container .page-ite {
  background-color: unset;
  border: unset;
  box-shadow: unset;
}

.blog-container .blogTop-bar {
  padding: 10px 10px;
  text-align: right;
}

.blog-container .blogTop-bar a {
  display: inline-block;
  width: 8%;
  padding: 10px 0;
  text-align: center;
  color: #fff;
  font-size: 1.35rem;
  text-decoration: none;
  font-family: sans-serif;
  transition: 0.3s;
}

.blog-container .blogTop-bar a:hover {
  box-shadow: 0 5px 5px 0 #3f3f3f;
  transform: translateY(-5px);
}

.blog-container .blogTop-bar a:active {
  transform: translateY(0px);
}

.page-container span {
  display: inline-block;
  width: 5%;
  margin: 0 10px;
  line-height: 30px;
  font-family: fantasy;
  color: #fff;
  border: 5px dashed #000;
  background-color: #353535;
  transition-property: transform;
  transform: translateY(0);
  transition-duration: 0.3s;
}

.page-container span:active {
  transform: translateY(-10px);
}
</style>
