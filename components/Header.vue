<template>
  <div class="bg-black font-mate w-screen border-b border-white h-14 sm:h-20 fixed z-10 overflow-x-hidden">

    <!--PCナビ-->
    <div class="wrapper m-auto hidden sm:flex sm:justify-between">
      <!--タイトル-->
      <Nuxt-link to="/">
        <button>
          <h1
            class="text-white text-xl sm:text-4xl mt-4 mb-4 hover:text-gray-400"
          >
            K'sPortfolio
          </h1>
        </button>
      </Nuxt-link>
      
      <!--ナビゲーション-->
      <ul class="text-white flex mt-4 invisible sm:visible">
        <Nuxt-link to="/Profile">
          <li class="hover:text-gray-400"><button>PROFILE</button></li>
        </Nuxt-link>

        <Nuxt-link to="/Portfolio">
          <li class="ml-5 hover:text-gray-400"><button>PORTFOLIO</button></li>
        </Nuxt-link>

        <Nuxt-link to="/Blog">
          <li class="ml-5 hover:text-gray-400"><button>BLOG</button></li>
        </Nuxt-link>

        <Nuxt-link to="/Contact">
          <li class="ml-5 hover:text-gray-400"><button>CONTACT</button></li>
        </Nuxt-link>

        <Nuxt-link to="/Privacy">
          <li class="ml-5 hover:text-gray-400">
            <button>PRIVACYPOLICY</button>
          </li>
        </Nuxt-link>
      </ul>

  </div>
    
   <!--スマホナビ-->
   <div class="w-9/12 mx-auto flex justify-between sm:hidden">
      <!--タイトル-->
      <Nuxt-link to="/">
        <button>
          <h1
            class="text-white text-xl sm:text-4xl mt-4 mb-4 hover:text-gray-400"
          >
            K'sPortfolio
          </h1>
        </button>
      </Nuxt-link>

       <!--ハンバーガーボタン--> 
      <div id="burger" class="burger-btn rounded sm:hidden"
           @click="toggleAction">
        <div class="bar top"></div>
        <div class="bar mid"></div>
        <div class="bar bottom"></div>
      </div>
   </div>
 

   <!--ハンバーガーメニュー-->
  <transition name="slide-fade">
     <div v-if="show" id="burger-menu" 
          class="bg-black w-6/12 m-right sm:hidden fixed h-screen">
       <ul class="text-white text-left text-2xl">
        <Nuxt-link to="/Profile">
          <li class=" hover:text-gray-400">
            <button @click="removeAction">PROFILE</button>
          </li>
          <hr>
        </Nuxt-link>

        <Nuxt-link to="/Portfolio">
          <li class=" hover:text-gray-400">
            <button @click="removeAction">PORTFOLIO</button>
          </li>
          <hr>
        </Nuxt-link>

        <Nuxt-link to="/Blog">
          <li class=" hover:text-gray-400">
            <button @click="removeAction">BLOG</button>
          </li>
          <hr>
        </Nuxt-link>

        <Nuxt-link to="/Contact">
          <li class=" hover:text-gray-400">
            <button @click="removeAction">CONTACT</button>
          </li>
          <hr>
        </Nuxt-link>

        <Nuxt-link to="/Privacy">
          <li class=" hover:text-gray-400">
            <button @click="removeAction">PRIVACYPOLICY</button>
          </li>
          <hr>
        </Nuxt-link>
       </ul>
    </div>
</transition>
</div>

</template>

<script>

import {
  disableBodyScroll,
  // enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock';


export default {
  data() {
    return {
         show:false,
    };
  },

  mounted(){
    const modal = document.querySelector('html')
        clearAllBodyScrollLocks(modal)
  },

  methods:{
     toggleAction(){
        this.show = !this.show
        const burger = document.getElementById("burger");
              burger.classList.toggle("close");
        if(this.show===true){
           const html = document.querySelector('html')
           disableBodyScroll(html);
        }else if(this.show === false){
         const html = document.querySelector('html')
         clearAllBodyScrollLocks(html);
        }   
     },

     removeAction(){
       this.show = false;
       const burger = document.getElementById("burger");
       burger.classList.remove("close");
       const html = document.querySelector('html')
       clearAllBodyScrollLocks(html);
     }
  }
}
</script>

<style scoped>

#burger{
  margin-top:3%;
}

/*ハンバーガーメニュー*/
.burger-btn{
    width: 50px;
    height: 40px;
    position:relative;
    /* background-color:gray; */
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
  height:100%;
  /* margin-top:-10%; */
}


/*スライドアニメーション*/
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}

</style>

