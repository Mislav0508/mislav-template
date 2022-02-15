<template >

  <div >
    <v-container :class="[ position > 0 ? 'navbar-scroll' : 'navbar']">

    <v-row class="d-flex justify-md-space-around align-center">    

      <v-col class="d-none d-lg-block" xl="2" lg="2" md="0" sm="10" >
      </v-col>  

      <v-col class="d-none d-md-flex justify-space-between align-center" cols="12" xl="4" lg="4" md="6" sm="0">
        <img src="/images/testLogo.png" alt="" class="logo"/>
        <NuxtLink to="/" :class="[ position > 0 ? 'link-scroll' : 'link' ]">Home</NuxtLink>
        <NuxtLink to="/" :class="[ position > 0 ? 'link-scroll' : 'link' ]">Our rooms</NuxtLink>
        <NuxtLink to="/" :class="[ position > 0 ? 'link-scroll' : 'link' ]">About us</NuxtLink>
        <NuxtLink to="/" :class="[ position > 0 ? 'link-scroll' : 'link' ]">Blog</NuxtLink>
        <NuxtLink to="/" :class="[ position > 0 ? 'link-scroll' : 'link' ]">Explore</NuxtLink>
        <NuxtLink to="/" :class="[ position > 0 ? 'link-scroll' : 'link' ]">Contact</NuxtLink>
      </v-col>

      <v-col cols="10" xl="3" lg="3" md="1" sm="10"></v-col>

      <v-col cols="2" xl="3" lg="3" md="1" sm="2">
        <div role="button" 
        :class="sidebar ? 'menu-btn open ' : 'menu-btn'" 
        @click="sidebar = !sidebar">
          <div :class="position > 0 ? 'menu-btn__burger_dark' : 'menu-btn__burger'" ></div>
        </div>
      </v-col>

      </v-row>

      <div :class="!sidebar ? 'sidebar' : 'sidebar show-sidebar'">
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
export default {
  props: { position: Number },
  data() {
    return {
      sidebar: false
    }
  },
  watch: {
    
  }
}
</script>

<style scoped>
.navbar{
  z-index: 99;
  overflow: hidden;
  position: fixed;
  top: 0;
  min-width: 100vw;
  max-width: 100vw;
  max-height: 10vh;
  transition: all .4s ease-in-out;  
}
.navbar-scroll{
  z-index: 99;
  overflow: hidden;
  position: fixed;
  top: 0;
  min-width: 100vw;
  max-height: 10vh;
  background: var(--primary);
  color: var(--secondary);
  transition: all .4s ease-in-out;
}
::v-deep .v-application--wrap {
  min-height: fit-content;
}
.logo{
  max-width: 4vw;
  max-height: 3vh;
}
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
@media only screen and (max-width: 960px) {
  .sidebar{
    min-width: 40vw;
    min-height: 100vh;
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
  font-family: Raleway, Helvetica, Arial, sans-serif;
}
.link::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
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
  font-size: clamp(1rem, 1vw, 6rem);
  letter-spacing: 1px;
  font-family: Raleway, Helvetica, Arial, sans-serif;
  margin: 0.5vh 0;
}
.link-sidebar::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
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
  min-width: 1.7rem;
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
  min-width: 1.7rem;
  height: 2px;
  background: var(--primary);  
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .5s ease-in-out;
}

.menu-btn__burger::before {
  transform: translateY(-10px);
}
.menu-btn__burger::after {
  transform: translateY(10px);
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
  min-width: 1.7rem;
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
  min-width: 1.7rem;
  height: 2px;
  background: var(--secondary);  
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .5s ease-in-out;
}

.menu-btn__burger_dark::before {
  transform: translateY(-10px);  
}
.menu-btn__burger_dark::after {
  transform: translateY(10px);
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