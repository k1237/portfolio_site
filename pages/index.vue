<template>
  <div>
    <Profile />
    <Portfolio />
    <Blog />
    <Contact />
  </div>
</template>

<script>
export default {}
</script>

<style>
.wrapper {
  width: 80%;
}

.height1200 {
  height: 1200px;
}

/*各ページ1200pxで固定
※字が多くなる場合はautoでもいいかも*/
.height_fixed {
  height: auto;
}

/* .contents{
  height:450px;
} */

/*GoogleFonts*/
.font-mate {
  font-family: 'Acme', sans-serif;
  font-family: 'Bree Serif', serif;
  font-family: 'Mate SC', serif;
}

/*文字外枠*/
.stroke {
  text-shadow: 1px 1px 0 black, -1px -1px 0 black, -1px 1px 0 black,
    1px -1px 0 black, 0px 1px 0 white, 0-1px 0 black, -1px 0 0 black,
    1px 0 0 black;
}

/*フェードイン*/
.v-enter-active {
  animation: opacity 0.7s;
}

.v-leave-active {
  animation: opacity 0.7s reverse;
}

@keyframes opacity {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

/*レスポンシブ*/
@media screen and (max-width: 640px) {
  .height1200 {
    height: auto;
  }
  .height_fixed {
    height: auto;
  }
}
</style>

