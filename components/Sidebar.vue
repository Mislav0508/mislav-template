<template>

  <div>

    <div :class="!sidebar ? 'sidebar' : 'sidebar show-sidebar'">

      <img src="/images/logo.svg" alt="" style="position:fixed;top:-10vh;transform:scale(0.15)">

      <NuxtLink :to="localePath('/')" class="link-sidebar">Home</NuxtLink>

      <NuxtLink :to="localePath('/rooms')" class="link-sidebar">Our rooms</NuxtLink>

      <NuxtLink :to="localePath('/about')" class="link-sidebar">About us</NuxtLink>

      <NuxtLink :to="localePath('/gallery')" class="link-sidebar">Gallery</NuxtLink>

      <NuxtLink :to="localePath('/explore')" class="link-sidebar">Explore</NuxtLink>

      <NuxtLink :to="localePath('/contact')" class="link-sidebar">Contact</NuxtLink>

      <div class="lang-container" @click="closeSidebar"> 
        <NuxtLink :to="switchLocalePath('en')" hreflang="en">English</NuxtLink>
        <NuxtLink :to="switchLocalePath('hr')" hreflang="hr">Croatian</NuxtLink>
        <NuxtLink :to="switchLocalePath('de')" hreflang="de">Deutsch</NuxtLink>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  props: {
    showSidebar: Boolean
  },
  data() {
    return {
      sidebar: false
    }
  },
  methods: {
    closeSidebar () {
      this.$emit('closeSidebar', false)
    }
  },
  watch: {
    showSidebar(val){
      this.sidebar = val
    },
  }
}
</script>

<style lang="scss" scoped>
/* SIDEBAR */
.sidebar{
  position: fixed;
  top: 0;
  left: 0;
  width: 18vw;
  min-height: 100vh;
  background: var(--primary);
  @include flexCenter;
  flex-direction: column;
  transition: all 0.3s ease-out;
  transform: translate(-100%);
  will-change: transform;
  z-index: 9999;
  overflow: hidden;
}
.show-sidebar {
  transform: translate(0);
  border-right: 15px solid rgb(230, 230, 230);
}
@media only screen and (max-width: 1458px) {
  .sidebar{
    min-width: 25vw;
  }
}
@media only screen and (max-width: 1024px) {
  .sidebar{
    min-width: 30vw;
  }
}
@media only screen and (max-width: 848px) {
  .sidebar{
    min-width: 40vw;
  }
}
@media only screen and (max-width: 600px) {
  .sidebar{
    min-width: 80vw;
  }
}
.overlay{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 998;
  overflow: hidden;
}
/* LINKS SIDEBAR */
.link-sidebar{
  text-decoration: none;
  color: var(--secondary);
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 1px;
  font-family: Raleway, Helvetica, Arial, sans-serif !important;
  margin: 0.5vh 0;
}
.link-sidebar::after {
  content: '';
  display: block;
  width: 0;
  height: 1px;
  background: var(--secondary);
  transition: width .3s;
}
.link-sidebar:hover::after {
  width: 100%;
}
/* LINKS SIDEBAR END */
.lang-container{
  position: absolute;
  bottom: 4vh;
}
</style>