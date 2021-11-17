<template>
  <div>
    <Header @toggle-event="toggleAction" />
    <Hbmenu v-if="flag"/>
    <Nuxt />
    <Footer />
  </div>
</template>


<script>
export default {
  data() {
    return {
      flag:false,
    }
  },
  methods: {
    toggleAction(show) {
      this.flag = show;
    },
  },
}
</script>
