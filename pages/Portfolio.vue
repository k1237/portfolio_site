<template>
  <div class="bg-black height_fixed pt-24 font-mate text-white">
      <transition appear>
      <h1 class="text-4xl text-center stroke pt-10">PORTFOLIO</h1>
      </transition>

      <transition appear>
      <div class="sm:flex sm:justfy-evenly wrapper mx-auto mt-24">
        <div class="sm:mr-2 sm:w-2/6">
          <a href="https://k1237.github.io/IdeaList/">
            <img src="~@/assets/img/idea.png" alt="" />
          </a>
          <br />
          <h1 class="text-lg font-bold">IdeaList</h1>
          <hr />
          <p class="break-all">
            開発環境:Vue.js3/Vite/Node.js/TailWindCSS/Vscode
          </p>
          <p class="break-all mt-2">
            何かアイデアを出す時に<br />メモ帳とToDoリストを行ったり来たりするのが面倒だったので、合体したアプリを作成しました。<br /><br />※現状ローカルストレージ版だけですが、
            <br />DBを使用したログイン版も作成予定です<br /><br />
          </p>
        </div>

   <div class="sm:mr-2 sm:w-2/6 mt-24 sm:mt-0">
        <a href="https://wonderful-cray-9a9c1f.netlify.app/">
          <img src="~@/assets/img/autocm.png" alt="" />
        </a>
        <br />
        <h1 class="text-lg font-bold">オートチャット</h1>
        <hr />
        <p class="break-all">
          開発環境:Nuxt.js/firebase/Node.js/TailWindCSS/Netlify/Jest/CircleCI
        </p>
        <p class="break-all mt-2">
          LIVE配信をしてもなかなかコメントが来ないという方向けに、ランダムで質問などをコメント風に表示してくれるサイトを作成しました。
        </p>
      </div>
      
        <div class="invisible sm:visible sm:ml-2 sm:w-2/6">
          <!-- <img src="~@/assets/img/flexsample.jpeg" alt=""> -->
          <h1 class="sm:text-5xl">制作中...</h1>
          <h1 class="sm:mt-80">タイトル</h1>
          <hr />
          <p class="break-all">現在制作中...</p>
        </div>
      </div>
       </transition>
  </div>
</template>
