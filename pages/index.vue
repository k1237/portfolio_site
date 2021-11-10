<template>
    <div>
      <Profile/>
      <Portfolio/>
      <Blog/>
      <Contact/>
    </div>
</template>

<style>

.wrapper{
    width:80%;
}
/*各ページ900pxで固定*/
.height_fixed{
  height:900px;
}

.contents{
  height:450px;
}

/*GoogleFonts*/
.font-mate{
 font-family: 'Acme', sans-serif;
 font-family: 'Bree Serif', serif;
 font-family: 'Mate SC', serif;
}

/*文字外枠*/
.stroke{
   text-shadow:1px 1px 0 black, -1px -1px 0 black,
              -1px 1px 0 black, 1px -1px 0 black,
              0px 1px 0 white,  0-1px 0 black,
              -1px 0 0 black, 1px 0 0 black;
}

/*フェードイン*/
.v-enter-active{
  animation:opacity 0.7s;
}

.v-leave-active{
  animation:opacity 0.7s reverse;
}

@keyframes opacity {
  0% {
    opacity:0;
  }
  50% {
    opacity:0.5;
  }
  100% {
    opacity:1;
  }
}

/*スクロールアニメーション*/
.fadeIn {
  animation: fadeIn 2s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

</style>

<script>
export default {
  
}
</script>
