<template>
  <div class="slider-items">
    <div class="d-layout">
      <section class="appCategoryName">
        <slot name="first_title"></slot>
      </section>
      <ul class="appList utliClearFloat">
        <slot name="appItem">
          <slot name="app"></slot>
        </slot>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "swiperItem",
  data() {
    // 资料区域
    return {};
  }
};
</script>


<style lang='stylus'>
.appCategoryName, .appList {
  width: 95%;
  margin: 0 auto;
}

.appList {
  padding: 5px 0;
  list-style-type: none;
  // background-color: #120e10;
  background-color: #f0f0f0;
  border-radius: 0px 0px 6px 6px;
  // border-top: 1px solid #000;
}

.appList .appItem {
  float: left;
  width: 25%;
  font-size: 0.875rem;
  word-wrap: break-word;
}

.appCategoryName {
  background-color: #2d2727;
  // orginColor
  // background-color: #734d4d;
  padding: 5px 10px;
  text-align: left;
}

.slider-items {
  display: inline-block;
  height: 100%;
  width: 100%;
  flex-shrink: 0;
}

.iterater {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: background-color 1s;
}
</style>
