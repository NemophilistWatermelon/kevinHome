<!-- 这是 模拟手机中的app按钮组件 -->
<template>
  <div class="appBtn">
    <router-link :to="aHref"  >
      <div class="appBox">
        <div class="top-app-icon" :style="[getImgUrl(), imgParams]">
          <!-- <img  /> -->
        </div>
        <section class="bottom-app-name">
          <span>{{ appName }}</span>
        </section>
      </div>
    </router-link>
  </div>
</template>
<script>
import iconPic from "../../assets/img/iconPic.png";
export default {
  name: "appBtn",
  data() {
    return {
      defaultImg: iconPic
    };
  },

  methods: {
    getImgUrl(strParmas) {
      // if (strParmas) {
      //   Object.assign({},str)
      // }
      var str = 
        {
          "background": `url(${this.defaultImg}) no-repeat`
        }
      ;
      return str;
    },
  },
  props: {
    appName: {
      type: String,
      default() {
        return "木得名字🙃";
      }
    },
    imgSrc: {
      type: String
    },
    // 用于指定每一项的链接
    aHref: {
      type: String,
      default() {
        return "javascript:void(0)";
      }
    },
    imgParams: {
      type: Object
    }
  }
};
</script>
<style lang='stylus'>
.appBtn {
  line-height: 1;
}

.appBox {
  display: inline-block;
  width: 62px;
  margin: 10px 0;
}

.appBox .top-app-icon {
  height: 62px;
  background-color: brown;
  border-radius: 9px;
  overflow: hidden;
  border:1px solid white;
}

.appBox .top-app-icon img {
  max-width: 100%;
  height: 100%;
}

.appBox .bottom-app-name {
  color: #717171;
  margin-top: 10px;
  text-align: center;
}
</style>
