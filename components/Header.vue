<template>
  <div class="bg-black font-mate w-full
  border-b border-white">
    <div class="wrapper m-auto flex justify-between ">
      <Nuxt-link to="/">
        <button>
          <h1 class="text-white text-4xl mt-4 mb-4
                     hover:text-gray-400">K'sPortfolio</h1>
        </button>
      </Nuxt-link>

      <ul class="text-white flex mt-4">
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
        <li class="ml-5 hover:text-gray-400"><button>PRIVACYPOLICY</button></li>
        </Nuxt-link>

      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>
