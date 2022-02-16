<template >

  <div >
    <v-container :class="[ position > 0 ? 'navbar-scroll' : 'navbar']">

    <v-row class="d-flex justify-md-space-around align-center">    
<!-- style="border:1px solid red" -->
      <v-col class="d-flex justify-center" cols="6" xl="3" lg="2" md="1" sm="2">
        <NuxtLink to="/" :class="[ position > 0 ? 'link-scroll' : 'link' ]" >
        <div v-html="rawLogo" :class="position > 0 ? 'd-block d-sm-none logoSecondary' : 'd-block d-sm-none logoPrimary'"/>          
        </NuxtLink>
      </v-col>  

      <v-col class="d-none d-sm-flex justify-space-around align-center" cols="1" xl="3" lg="4" md="5" sm="8">
        
        <NuxtLink to="/" :class="[ position > 0 ? 'link-scroll' : 'link' ]">
        <div v-html="rawLogo" :class="position > 0 ? 'logoSecondary' : 'logoPrimary'"/>          
        </NuxtLink>
        <NuxtLink to="/" :class="[ position > 0 ? 'link-scroll' : 'link' ]">Home</NuxtLink>
        <NuxtLink to="/" :class="[ position > 0 ? 'link-scroll' : 'link' ]">Our rooms</NuxtLink>
        <NuxtLink to="/" :class="[ position > 0 ? 'link-scroll' : 'link' ]">About us</NuxtLink>
        <NuxtLink to="/" :class="[ position > 0 ? 'link-scroll' : 'link' ]">Blog</NuxtLink>
        <NuxtLink to="/" :class="[ position > 0 ? 'link-scroll' : 'link' ]">Explore</NuxtLink>
        <NuxtLink to="/" :class="[ position > 0 ? 'link-scroll' : 'link' ]">Contact</NuxtLink>
      </v-col>

      <v-col cols="4" xl="2" lg="4" md="1" sm="1"></v-col>

      <v-col cols="2" xl="3" lg="1" md="1" sm="1">
        <div role="button" 
        :class="sidebar ? 'menu-btn open ' : 'menu-btn'" 
        @click="sidebar = !sidebar">
          <div :class="position > 0 ? 'menu-btn__burger_dark' : 'menu-btn__burger'" ></div>
        </div>
      </v-col>

      </v-row>

      <div :class="!sidebar ? 'sidebar' : 'sidebar show-sidebar'">
        <NuxtLink to="/" style="position:fixed;top:-10vh;">
          <img src="/images/logo.svg" alt="" style="transform:scale(0.15)">
        </NuxtLink>
        <NuxtLink to="/" class="link-sidebar">Home</NuxtLink>
        <NuxtLink to="/" class="link-sidebar">Our rooms</NuxtLink>
        <NuxtLink to="/" class="link-sidebar">About us</NuxtLink>
        <NuxtLink to="/" class="link-sidebar">Blog</NuxtLink>
        <NuxtLink to="/" class="link-sidebar">Explore</NuxtLink>
        <NuxtLink to="/" class="link-sidebar">Contact</NuxtLink>
      </div>
      <div :class="sidebar ? 'overlay' : ''" @click="sidebar = false"></div>

    </v-container>
    <div>
      
    </div>
  </div>
</template>

<script>
import rawLogo from "~/static/images/logo.svg?raw";
export default {
  props: { position: Number },
  data() {
    return {
      sidebar: false,
      rawLogo
    }
  },
  watch: {
    
  }
}
</script>

<style scoped>
.navbar{
  z-index: 9999;
  overflow: hidden;
  position: fixed;
  top: 0;
  min-width: 100vw;
  max-width: 100vw;
  max-height: 74px;
  min-height: 74px;
  transition: all .5s ease;  
}
.navbar-scroll{
  z-index: 9999;
  overflow: hidden;
  position: fixed;
  top: 0;
  min-width: 100vw;
  max-height: 74px;
  min-height: 74px;
  background: var(--primary);
  color: var(--secondary);
  transition: all .5s ease;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
::v-deep .v-application--wrap {
  min-height: fit-content;
}
/* LOGOS */
.logoSecondary{
  max-width: 0vw;
  max-height: 0vh;
  transform: scale(0.1) translateY(-8rem) translateX(-100vw);  
}
.logoSecondary >>> svg{
  max-width: 70vw;
  max-height: 25vh;
  transform: scale(2);
}
.logoSecondary >>> g{
  fill: var(--secondary);
}
.logoPrimary{
  max-width: 0vw;
  max-height: 0vh;
  transform: scale(0.1) translateY(-8rem) translateX(-100vw);  
}
.logoPrimary >>> svg{
  max-width: 70vw;
  max-height: 25vh;
  transform: scale(2);
}
.logoPrimary >>> g{
  fill: var(--primary);
}
@media only screen and (max-width: 600px) {
  .logoSecondary >>> svg,.logoPrimary >>> svg{
  transform: scale(5);
}
}
/* LOGOS END */

/* SIDEBAR */
.sidebar{
  position: fixed;
  top: 0;
  left: 0;
  width: 18vw;
  min-height: 100vh;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s ease-out;
  transform: translate(-100%);
  will-change: transform;
  z-index: 9999;
  overflow: hidden;
}
.show-sidebar {
  transform: translate(0);
  border-right: 3px solid var(--secondary);
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
/* LINKS NAVBAR */
.link{
  text-decoration: none;
  color: var(--primary);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 1px;
  font-family: 'Raleway', sans-serif;
}
.link::after {
  content: '';
  display: block;
  width: 0;
  height: 1px;
  background: var(--primary);
  transition: width .3s;
}
.link:hover::after {
  width: 100%;
}
.link-scroll{
  text-decoration: none;
  color: var(--secondary);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 1px;
  font-family: Raleway, Helvetica, Arial, sans-serif;
}
.link-scroll::after{
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: var(--secondary);
  transition: width .3s;
}
.link-scroll:hover::after{
  width: 100%;
}
/* LINKS END */

/* LINKS SIDEBAR */
.link-sidebar{
  text-decoration: none;
  color: var(--secondary);
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-family: "Roboto", sans-serif;
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

/* BURGER MENU */
.menu-btn {
  padding: 1rem;
  opacity: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 3rem;
  min-height: 3rem;
  cursor: pointer;
  border-radius: 5px;
  z-index: 9999;
}
.menu-btn__burger {
  min-width: 1.5rem;
  min-height: 2px;
  background: var(--primary);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .3s ease-in-out;
}
.menu-btn__burger::before,
.menu-btn__burger::after {
  content: '';
  position: absolute;
  min-width: 1.5rem;
  height: 2px;
  background: var(--primary);  
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .5s ease-in-out;
}

.menu-btn__burger::before {
  transform: translateY(-7px);
}
.menu-btn__burger::after {
  transform: translateY(7px);
}
/* ANIMATION */
.menu-btn.open .menu-btn__burger {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}
.menu-btn.open .menu-btn__burger::before {
  transform: rotate(45deg) translate(35px, -35px);
  /* background: var(--secondary); */
}
.menu-btn.open .menu-btn__burger::after {
  transform: rotate(-45deg) translate(35px, 35px);
  /* background: var(--secondary); */
}
/* menu-btn__burger_dark */
.menu-btn__burger_dark {
  min-width: 1.5rem;
  min-height: 2px;
  background: var(--secondary);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .3s ease-in-out;
}
.menu-btn__burger_dark::before,
.menu-btn__burger_dark::after {
  content: '';
  position: absolute;
  min-width: 1.5rem;
  height: 2px;
  background: var(--secondary);  
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .5s ease-in-out;
}

.menu-btn__burger_dark::before {
  transform: translateY(-7px);  
}
.menu-btn__burger_dark::after {
  transform: translateY(7px);
}
/* ANIMATION */
.menu-btn.open .menu-btn__burger_dark {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}
.menu-btn.open .menu-btn__burger_dark::before {
  transform: rotate(45deg) translate(35px, -35px);
  /* background: var(--primary); */
}
.menu-btn.open .menu-btn__burger_dark::after {
  transform: rotate(-45deg) translate(35px, 35px);
  /* background: var(--primary); */
}

</style>