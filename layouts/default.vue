<template>
  <v-app style="overflow-y: scroll;overflow:hidden;">

    <Navbar 
    :position="position" 
    @sidebar-navbar="sidebarHandler" 
    :sidebarComponent="sidebar"/>

    <Sidebar 
    :showSidebar="sidebar"
    @closeSidebar="sidebarHandler"/>

    <Nuxt />

    <Footer />

    <div v-if="position > 20" class="up-arrow-container" @click="scrollToTop">
      <i class="up-arrow "></i>      
    </div>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      position: 0,
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
  watch: {
    sidebar (val) {
      this.sidebar = val
    }
  }
}
</script>
<style>
#app {
  font-family: 'Nunito Sans', 'Raleway', sans-serif;
}
p{
  font-size: clamp(14px, 0.5vw, 18px);
  font-weight: 200;
  line-height: 1.4rem;
  letter-spacing: 1.5px;
  font-size: 100%;
}
h1 {
  font-size: clamp(36px, 5vw, 100px);
  font-weight: 400;
}
h2{
  font-size: clamp(28px, 5vw, 42px);
  line-height: 1.2em;
  color: var(--secondary);
  font-weight: 400;
}
@media screen and (min-width: 2500px) {
  p {
    font-size: 20px;
    line-height: 1.6rem;
  }
}
/* ARROW UP */
.up-arrow-container{
  bottom: 1.5vh; 
  right: 1vw;
  position: fixed;
  padding: 1rem 1.7rem 1.4rem 1rem;  
  cursor: pointer;
  transition: all 0.3s linear;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
}
.up-arrow{
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
