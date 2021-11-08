<template>
  <div class="bg-black font-serif">
    <div class="wrapper m-auto flex justify-between">
      <Nuxt-link to="/">
        <button>
          <h1 class="text-white text-4xl mt-4 mb-4">K'sPortfolio</h1>
        </button>
      </Nuxt-link>

      <ul class="text-white flex mt-4">
        <Nuxt-link to="/Test">
          <li><button>PROFILE</button></li>
        </Nuxt-link>

        <li class="ml-5"><button>PORTFOLIO</button></li>

        <li class="ml-5"><a href="">BLOG</a></li>
        <li class="ml-5"><a href="">CONTACT</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>
