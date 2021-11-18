<template>
  <div>
    <Header :flag="flag"
            @toggle-event="toggleAction"/>
    <Hbmenu :flag="flag"
            @remove-event="removeAction"
            />
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
    removeAction(show){
      this.flag = show;
    }
  },
}
</script>
