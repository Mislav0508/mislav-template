<template>
  <v-container fluid class="footer-container p-0 m-0 d-flex align-end">

    <svg viewBox="0 -20 700 110" width="100%" preserveAspectRatio="none" class="svg-class">
      <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#222222" />
      <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#222222" />
    </svg>

    <!-- MIDDLE CONTAINER -->

    <v-col cols="12" xl="12" lg="12" md="12" sm="12" class="middle-footer-container d-flex flex-wrap text-center">

      <v-col cols="12" xl="2" lg="2" md="2" sm="12"></v-col>

      <v-col cols="12" xl="2" lg="2" md="2" sm="12" style="border-bottom: 1px solid white">
        <h2>our address</h2>
        <p class="font-weight-bold">Mislav's Beach Hotel</p>
        <p>Pod Sveti Mikulj 7</p>
        <p>Novi Vinodolski</p>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" style="border-bottom: 1px solid white">
        <h2>reservation</h2>
        <p>Tel.: +41 (0)54 2344 00</p>
        <p>Fax: +41 (0)542344 99</p>
        <p>mislav0508@hotmail.com</p>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" style="border-bottom: 1px solid white">
        <h2>newsletter</h2>
        <v-btn outlined class="white--text">Sign up</v-btn>
      </v-col>
      <v-col cols="12" xl="2" lg="2" md="2" sm="12" style="border-bottom: 1px solid white">
        <h2>awards</h2>
        <v-row class="d-flex align-center justify-center">
          <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          src="/images/footer/tripadvisor.png"
          max-width="70"
          ></v-img>
          <v-img
            class="mx-10"
            lazy-src="https://picsum.photos/id/11/10/6"
            src="/images/footer/asean_award-1.png"
            max-width="150"
            contain
          ></v-img>
        </v-row>
      </v-col>

      <v-col cols="12" xl="2" lg="2" md="2" sm="12"></v-col>

      <!-- BOTTOM CONTAINER -->
      <v-col cols="12" xl="12" lg="12" md="12" sm="12" class=" d-flex">

        <v-col cols="0" xl="2" lg="2" md="2" sm="1"></v-col>

        <v-col cols="12" xl="3" lg="3" md="3" sm="4">
          <p>© Copyright Media Dev - Mislav Crnković</p>
        </v-col>

        <v-col cols="12" xl="2" lg="1" md="0" sm="1"></v-col>

        <v-col cols="12" xl="3" lg="4" md="5" sm="6" class="d-flex justify-space-around flex-wrap">
          <NuxtLink to="/" class="footer-link">Home</NuxtLink>
          <NuxtLink to="/" class="footer-link">Our rooms</NuxtLink>
          <NuxtLink to="/" class="footer-link">About us</NuxtLink>
          <NuxtLink to="/" class="footer-link">Blog</NuxtLink>
          <NuxtLink to="/" class="footer-link">Explore</NuxtLink>
          <NuxtLink to="/" class="footer-link">Contact</NuxtLink>
        </v-col>

        <v-col cols="0" xl="2" lg="2" md="2" sm="12"></v-col>
        <!-- BOTTOM CONTAINER END -->

      </v-col>

    </v-col>


    
    
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.svg-class{
  min-height: 45vh;
}
.footer-container{
  position: relative;
  width: 100vw;
  min-height: 45vh;
  bottom: 0;
  overflow: hidden;
  z-index: 9998;
  color: var(--primary);

}
.middle-footer-container{
  position: absolute;
  z-index: 9998;
  color: var(--primary);
}

h2 {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-style: normal;
  margin-bottom: 2rem;
}
p{
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 2px;
}
.footer-link{
  text-decoration: none;
  color: var(--primary);

}
@media only screen and (max-width: 960px) {
  .svg-class{
  min-height: 125vh;
}
}
</style>