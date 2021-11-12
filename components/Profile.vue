<template>

<div class="bg-gray-600 height_fixed pt-4 sm:pt-24 font-mate">
    
   <!--ハンバーガーボタン--> 
      <div class="burger-btn rounded sm:hidden"
           @click="toggleAction">
        <div class="bar top"></div>
        <div class="bar mid"></div>
        <div class="bar bottom"></div>
      </div>


    <h1 class="text-4xl text-center stroke text-white">PROFILE</h1>
  <transition appear>
    <div  class="wrapper  m-auto h-5/6 sm:flex justfy-evenly">
  
      <div class="text-white sm:flex-1 text-center sm:w-6/12">
      <!--img-->
      <img src="~@/assets/img/profile.jpg" alt=""
      class="m-auto mt-12 rounded-full w-9/12">
      
      <!--icon-->
      <div class="mt-4">
      <a href="https://twitter.com/kprm1237">
        <i class="fab fa-twitter-square fa-3x
                  text-blue-600"></i></a>
      <a href="https://github.com/k1237">          
        <i class="fab fa-github-square fa-3x
                   ml-4 text-black"></i></a>
      </div>
      <br>
      <p>保有資格</p>
      <hr class="w-7/12 mx-auto">
      <p>ExcelVBAエキスパート ベーシック/スタンダード</p>
      <p>ITパスポート</p>
      <p>Webクリエイター認定試験</p>
      <p>JAVASEBronze</p>
      </div>


      <div class="text-white sm:flex-1 mt-20 stroke sm:w-6/12">

      <div class="text-xl sm:text-2xl mt-8 ml-8">
        <p>Name:K</p>
        <p>Age:29(1991/12/03)</p>
        <br>
        <p class="text-base sm:text-xl sm:ml-4">事務の仕事をしている時に、<br>
        Excelの業務効率化をすることになり<br>
        ExcelVBAを学んだことをきっかけに<br>
        プログラミングに興味を持つ。<br>
        現在はWeb制作・開発関連を学ぶ職業訓練生<br>
        (2022/03まで)</p>
        <br>
        <p class="mt-4 sm:mt-0 text-xl sm:text-2xl">使用言語・開発環境</p>
         <p class="mt-2 text-base sm:text-xl sm:ml-4">
           HTML/CSS/Jquary/WordPress <br>
           Javascript <br>
           Vue.js/Nuxt.js<br>
           Laravel<br>
           Vscode/Github<br><br>
         </p>
      </div>
      </div>

    </div>
    </transition>

</div>
</template>

<style scoped>
/*ハンバーガーメニュー*/
.burger-btn{
    width: 50px;
    height: 40px;
    position:relative;
    margin-left:85%;
    background-color:gray;
}

.bar{
    width: 35px;
    height: 5px;
    background-color:white;
    position:absolute;
    margin-left:15%;
}

.top{
    top:30%;
}

.mid{
    top:50%;
}

.bottom{
    top:70%;
}

/*3本線を☓印にする*/

.burger-btn.close .top {
    transform:translate(0, 10px) rotate(45deg);
    transition:transform .2s;
}

.burger-btn.close .mid {
    opacity:0;
    transition:opacity .2s;
}

.burger-btn.close .bottom {
    transform: translate(0, -10px) rotate(-45deg);
    transition: transform .2s;
}

/*レスポンシブ*/
@media screen and (max-width:640px) {
   
}

</style>

<script>
export default {
  data() {
    return {
   
    };
  },
  methods:{
     toggleAction(){
        $('.burger-btn').toggleClass('close');
     }
  }
}
</script>


