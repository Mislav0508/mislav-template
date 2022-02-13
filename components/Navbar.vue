<template>
  <v-row class="navbar">
    <v-container >
      <v-row class="d-flex align-center">
        <v-col cols="12" xl="1" lg="1">
          <v-img src="/images/testLogo.png"
          aspect-ratio="2"
          contain >
          </v-img>
        </v-col>
        <v-col cols="12" xl="1" lg="1"></v-col>
        <v-col cols="12" xl="1" lg="1"></v-col>
        <v-col cols="12" xl="1" lg="1">
          <NuxtLink to="/">Home</NuxtLink>
        </v-col>
        <v-col cols="12" xl="1" lg="1">
          <NuxtLink to="/">Our rooms</NuxtLink>
        </v-col>
        <v-col cols="12" xl="1" lg="1">
          <NuxtLink to="/">About us</NuxtLink>
        </v-col>
        <v-col cols="12" xl="1" lg="1">
          <NuxtLink to="/">Blog</NuxtLink>
        </v-col>
        <v-col cols="12" xl="1" lg="1">
          <NuxtLink to="/">Explore</NuxtLink>
        </v-col>
        <v-col cols="12" xl="1" lg="1">
          <NuxtLink to="/">Contact</NuxtLink>
        </v-col>
        <v-col cols="12" xl="1" lg="1"></v-col>
        <v-col cols="12" xl="1" lg="1"></v-col>
        <v-col cols="12" xl="1" lg="1">
          <div role="button" 
          :class="`${sidebar ? 'menu-btn open ' : 'menu-btn '}`" 
          @click="sidebar = !sidebar">
            <div class="menu-btn__burger"></div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      sidebar: false
    }
  }
}
</script>

<style scoped>
.navbar{
  z-index: 9999;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
}
::v-deep .v-application--wrap {
  min-height: fit-content;
}
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
}
.menu-btn__burger {
  min-width: 2rem;
  min-height: 2px;
  background: black;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .3s ease-in-out;
}
.menu-btn__burger::before,
.menu-btn__burger::after {
  content: '';
  position: absolute;
  min-width: 2rem;
  height: 2px;
  background: black;  
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .5s ease-in-out;
}

.menu-btn__burger::before {
  transform: translateY(-12px);
}
.menu-btn__burger::after {
  transform: translateY(12px);
}
/* ANIMATION */
.menu-btn.open .menu-btn__burger {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}
.menu-btn.open .menu-btn__burger::before {
  transform: rotate(45deg) translate(35px, -35px);
}
.menu-btn.open .menu-btn__burger::after {
  transform: rotate(-45deg) translate(35px, 35px);
}

</style>