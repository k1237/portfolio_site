<template>
  <div class="bg-black height_fixed pt-24 font-mate text-white ">
    <transition appear>
    <h1 class="text-4xl text-center stroke">CONTACT</h1>
    </transition>

    <transition appear>
    <p class="text-center mt-4">※送信機能は現在制作中です<br>
       ご用件の方はtwitterDMかBLOG⇨CONTACTよりご連絡ください</p>
    </transition>

    <transition appear>
    <form class="w-full max-w-lg mx-auto mt-12">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="
            stroke
              block
              uppercase
              tracking-wide
              text-xs
              font-bold
              mb-2
            "
            for="grid-password"
          >
            NAME
          </label>
          <input
            class="
              text-black
              appearance-none
              block
              w-full
              border border-gray-200
              rounded
              py-3
              px-4
              mb-3
              leading-tight
            "
            id="nick"
            type="text"
          />
          <p class="text-red-600 text-xs italic">※必須</p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-xs
              font-bold
              mb-2
            "
            for="grid-password"
          >
            E-mail
          </label>
          <input
            class="
              text-black
              appearance-none
              block
              w-full
              border border-gray-200
              rounded
              py-3
              px-4
              mb-3
              leading-tight
            "
            id="email"
            type="email"
          />
          <p class="text-red-600 text-xs italic">
            ※必須
          </p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-xs
              font-bold
              mb-2
            "
            for="grid-password"
          >
            Message
          </label>
          <textarea
            class="
              text-black
              no-resize
              appearance-none
              block
              w-full
              border border-gray-200
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              h-48
              resize-none
            "
            id="message"
          ></textarea>
          <p class="text-red-600 text-xs italic">
          ※必須
          </p>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3">
          <button
            class="
              shadow
              bg-gray-400
              hover:bg-teal-400
              focus:shadow-outline focus:outline-none
              text-white
              font-bold
              py-2
              px-4
              rounded
            "
            type="button"
          >
            SEND
          </button>
        </div>
        <div class="md:w-2/3"></div>
      </div>
    </form>
    </transition>

  </div>
</template>


<script>
export default {}
</script>