<template>
  <div class="bg-black height_fixed pt-24 font-mate text-white pb-16">
    <h1 data-aos="fade-right" class="text-4xl text-center stroke">CONTACT</h1>

    <p data-aos="fade-right" class="text-center mt-4">
      ※送信機能は現在制作中です<br />
      ご用件の方はtwitterDMかBLOG⇨CONTACTよりご連絡ください
    </p>

    <form
      data-aos="fade-right"
      class="w-9/12 mx-auto mt-12"
      name="contact"
      method="POST"
      action="/submit"
      netlify
    >
      <div class="flex flex-wrap mb-6">
        <div class="w-full sm:w-8/12 px-3 mx-auto">
          <label
            class="stroke block uppercase tracking-wide text-xs font-bold mb-2"
            for="grid-password"
          >
            NAME
          </label>
          <input
            id="nick"
            v-model="name"
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
            type="text"
            name="name"
          />
          <p class="text-red-300 text-xs italic">※必須</p>
        </div>
      </div>

      <div class="flex flex-wrap mb-6">
        <div class="w-full sm:w-8/12 px-3 mx-auto">
          <label
            class="block uppercase tracking-wide text-xs font-bold mb-2"
            for="grid-password"
          >
            E-mail
          </label>
          <input
            id="email"
            v-model="email"
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
            type="email"
            name="email"
          />
          <p class="text-red-300 text-xs italic">※必須</p>
        </div>
      </div>

      <div class="flex flex-wrap mb-6">
        <div class="w-full sm:w-8/12 px-3 mx-auto">
          <label
            class="block uppercase tracking-wide text-xs font-bold mb-2"
            for="grid-password"
          >
            Message
          </label>
          <textarea
            id="message"
            v-model="message"
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
            name="message"
          ></textarea>
          <p class="text-red-300 text-xs italic">※必須</p>
        </div>
      </div>

      <div class="items-center mx-auto w-9/12 text-center">
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
            hover:bg-gray-700
          "
          type="submit"
        >
          SEND
        </button>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
        name:"",
        email:"",
        message:"",
    }
  },

}
</script>