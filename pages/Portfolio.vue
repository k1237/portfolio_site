<template>
<div class="bg-black height_fixed pt-24 font-mate text-white">
    <transition appear>
       <h1 class="text-4xl text-center stroke">PORTFOLIO</h1>
    </transition>
    
    <transition appear>
       <div class="flex justfy-evenly wrapper mx-auto mt-24 ">
           <div class="mr-2 w-2/6 "> 
               <a href="https://k1237.github.io/IdeaList/">
                   <img src="~@/assets/img/ideaList.png" alt="">
                </a>
               <br>
               <h1 class="text-lg font-bold">IdeaList</h1>
               <hr>
               <p class="break-all">開発環境:Vue.js3/Vite/TailWindCSS/Vscode</p>
                    <p class="break-all mt-2">何かアイデアを出す時に<br>メモ帳とToDoリストを行ったり来たりするのが面倒だったので、合体したアプリを作成しました。<br><br>※現状ローカルストレージ版だけですが、
                    <br>DBを使用したログイン版も作成予定です</p>
           </div>

           <div class="mx-4 w-2/6">
               <!-- <img src="~@/assets/img/flexsample.jpeg" alt=""> -->
                 <h1 class="text-5xl">制作中...</h1>
                 <h1 class="mt-80">タイトル</h1>
                 <hr>
                    <p class="break-all">現在制作中...</p>
           </div>

           <div class="ml-2 w-2/6">
               <!-- <img src="~@/assets/img/flexsample.jpeg" alt=""> -->
                <h1 class="text-5xl">制作中...</h1>
                 <h1 class="mt-80">タイトル</h1>
                 <hr>
                <p class="break-all">現在制作中...</p>
           </div>
       </div>
     </transition>
</div>
</template>

<style scoped>

</style>

<script>
export default {
 
}
</script>

