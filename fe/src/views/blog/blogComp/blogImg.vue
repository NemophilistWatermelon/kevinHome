<template>
  <div class="BlogImg-Content b-layout">
    <img src="@/assets/img/blog.gif" alt />
    <slot name="blog-topFont"></slot>
  </div>
</template>
<script lang="" scoped>
export default {
  name: "blogImg"
};
</script>
<style lang="stylus" >
.BlogImg-Content {
  position: relative;
  height: 400px;
  margin: 0 auto;
  padding-top: 20px;
}

.BlogImg-Content img {
  width: 100%;
  height: 100%;
  filter: blur(2px);
  animation: filterImgBlur 3s infinite;
}

@keyframes filterImgBlur {
  0% {
    filter: blur(2px);
  }

  50% {
    filter: blur(0px);
  }

  100% {
    filter: blur(2px);
  }
}

.BlogImg-Content .blog-topFont {
  position: absolute;
  top: 32%;
  left: 0;
  color: #fff;
  font-size: 4rem;
  // background red
  transform-origin: left top;
  transform: rotateZ(35deg);
  animation: rotaSpan 1s forwards cubic-bezier(0.04, 0.65, 1, 1);
}

@keyframes rotaSpan {
  0% {
    transform: rotateZ(15deg);
  }

  100% {
    color: #000;
    transform: rotateZ(80deg);
  }
}

@media (max-width: 768px) {
  

  .blog-container .blogTop-bar a {
    display: unset !important;
  }

  .BlogImg-Content img {
    height: unset;
  }

  .BlogImg-Content .blog-topFont {
    top: 33%;
    left: 14%;
    font-size: 2.83rem;
  }
  .page-container span {
      width  unset !important;
  }
}
</style>
