<template>
  <div class="bg-gray-600 height1200 pt-24 font-mate text-white">

    <transition appear>
    <div class="wrapper mx-auto mt-16 text-center">
    <h1 class="text-xl stroke">送信完了しました</h1>
    <hr>
     <p>内容を確認した上必要であれば返信させていただきます。
     </p>
     <br>
    <Nuxt-link to="/">
        <button class="hover:text-gray-500">戻る</button>
      </Nuxt-link>
     <br>
   </div>
   </transition>

  </div>
</template>

<script>

export default {

}
</script>