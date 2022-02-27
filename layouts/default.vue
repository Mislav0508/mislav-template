<template>
  <v-app style="overflow-y: scroll;overflow:hidden;">
    <Navbar :position="position" @sidebar-navbar="sidebarHandler"/>
    <Sidebar :showSidebar="sidebar"/>
    <Nuxt />
    <Footer />
    <div v-if="position > 20" class="arrow-container" @click="scrollToTop">
      <i class="arrow "></i>      
    </div>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      position: null,
      sidebar: false
    }
  },
  beforeMount  () {
    window.addEventListener('scroll', this.checkPosition);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.checkPosition);
  },
  methods: {
    sidebarHandler(val) {
      console.log(val);
      this.sidebar = val
    },
    checkPosition() {
      this.position = window.pageYOffset
    },
    scrollToTop() {
      window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
      });
    }
  },
  mounted() {
    console.log(this.sidebar);
  },
  watch: {
    sidebar (val) {
      this.sidebar = val
    }
  }
}
</script>
<style scoped>
#app {
  font-family: 'Roboto Slab', serif;  
}
.arrow-container{
  bottom: 1.5vh; 
  right: 1vw;
  position: fixed;
  padding: 1rem 1.7rem 1.4rem 1rem;  
  cursor: pointer;
  transition: all 0.3s linear;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
}
.arrow{
  border: solid var(--primary);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 0.3rem;
  position: fixed;
  cursor: pointer;
  z-index: 5;
  transition: all 0.3s linear;
  transform: rotate(-135deg);
}
</style>
