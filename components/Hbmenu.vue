<template>
<!--ハンバーガーメニュー-->
    <transition name="slide-fade">
      <div 
        v-if="flag"
        id="burger-menu"
        class="bg-black w-6/12 sm:hidden fixed h-full z-10 mt-14"
      >
        <ul class="text-white text-left text-2xl">
          <Nuxt-link to="/Profile">
            <button @click="removeAction">
              <li class="hover:text-gray-400">PROFILE</li>
            </button>

            <hr />
          </Nuxt-link>

          <Nuxt-link to="/Portfolio">
            <button @click="removeAction">
              <li class="hover:text-gray-400">PORTFOLIO</li>
            </button>
            <hr />
          </Nuxt-link>

          <Nuxt-link to="/Blog">
            <button @click="removeAction">
              <li class="hover:text-gray-400">BLOG</li>
            </button>
            <hr />
          </Nuxt-link>

          <Nuxt-link to="/Contact">
            <button @click="removeAction">
              <li class="hover:text-gray-400">CONTACT</li>
            </button>
            <hr />
          </Nuxt-link>

          <Nuxt-link to="/Privacy">
            <button @click="removeAction">
              <li class="hover:text-gray-400">PRIVACYPOLICY</li>
            </button>
            <hr />
          </Nuxt-link>
        </ul>
      </div>
    </transition>

</template>


<script>
import {
  // disableBodyScroll,
  // enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'

export default {
  props:{
    flag:Boolean,
  },
  data() {
    return {
      show:false,
    };
  },
  methods:{
     removeAction() {
      this.$emit('remove-event', this.show)

      const burger = document.getElementById('burger')
      burger.classList.remove('close')

      const html = document.querySelector('html')
      clearAllBodyScrollLocks(html)
    },
  }
}
</script>

<style scoped>
/*ハンバーガーメニュー*/

#burger-menu {
   margin-left: 50%;
  height:100;
  /* margin-top:-10%; */
}

/*スライドアニメーション*/
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>