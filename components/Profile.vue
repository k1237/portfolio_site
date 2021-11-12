<template>

<div class="bg-gray-600 height_fixed pt-4 sm:pt-24 font-mate">
    
   <!--ハンバーガーボタン--> 
      <div id="burger" class="burger-btn rounded sm:hidden"
           @click="toggleAction">
        <div class="bar top"></div>
        <div class="bar mid"></div>
        <div class="bar bottom"></div>
      </div>

    <!--ハンバーガーメニュー-->
     <div id="burger-menu" 
          class="bg-black w-6/12 m-right sm:hidden hide fixed h-screen"
         >
       <ul class="text-white text-left">
        <Nuxt-link to="/Profile">
          <li class=" hover:text-gray-400"><button>PROFILE</button></li>
        </Nuxt-link>

        <Nuxt-link to="/Portfolio">
          <li class=" hover:text-gray-400"><button>PORTFOLIO</button></li>
        </Nuxt-link>

        <Nuxt-link to="/Blog">
          <li class=" hover:text-gray-400"><button>BLOG</button></li>
        </Nuxt-link>

        <Nuxt-link to="/Contact">
          <li class=" hover:text-gray-400"><button>CONTACT</button></li>
        </Nuxt-link>

        <Nuxt-link to="/Privacy">
          <li class=" hover:text-gray-400">
            <button>PRIVACYPOLICY</button>
          </li>
        </Nuxt-link>
       </ul>
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
    position:absolute;
    background-color:white;
    margin-left:15%;
}

.top{
    top:20%;
}

.mid{
    top:45%;
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
    transform: translate(0, -9.5px) rotate(-45deg);
    transition: transform .2s;
}

/*ハンバーガーメニュー*/
.m-right{
  margin-left:50%;
}

#burger-menu{
  /* margin-top:-10%; */
}

.open{
  display:block;
}

.hide{
  display:none;
}

</style>

<script>
export default {
  data() {
    return {
      // show:false
    };
  },
  methods:{
     toggleAction(){
        // this.show = !this.show;
        const burger = document.getElementById("burger");
              burger.classList.toggle("close");
        const menu =  document.getElementById("burger-menu");
        if( menu.classList.contains('hide')){
              menu.classList.remove("hide");
              menu.classList.add("open");
        }else if(menu.classList.contains('open')){
              menu.classList.remove("open");
              menu.classList.add("hide");
        }
     }
  }
}
</script>


