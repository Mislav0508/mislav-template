<template>
  <v-app style="overflow: hidden;">
    <Navbar :position="position"/>
    <Nuxt />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      position: null
    }
  },
  beforeMount  () {
    window.addEventListener('scroll', this.checkPosition);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.checkPosition);
  },
  methods: {
    checkPosition() {
      this.position = window.pageYOffset
    }
  }
}
</script>
<style scoped>
#app {
  font-family: 'Roboto Slab', serif;
}
</style>
