<template>
  <div>
    <Slider />
    <v-container >
      
      <v-row class="d-flex align-center justify-center py-lg-15">

        <v-col cols="12" xl="2" lg="1" md="0"></v-col>

        <v-col cols="12" xl="3" lg="5" md="6" sm="" class="d-flex align-center justify-start flex-wrap px-10 py-15" >
          <p class="font-weight-bold"
          >ABOUT MISLAV-TEMPLATE</p>
          <h2 data-aos="fade-left" 
          data-aos-duration="600"
          data-aos-easing="ease-out"
          data-aos-delay="500"
          data-aos-once="true">Mislav's Hotel More than a stay</h2>
          <p data-aos="fade-left" 
          data-aos-duration="600"
          data-aos-easing="ease-out"
          data-aos-delay="1000"
          data-aos-once="true">Pitchfork selfies master cleanse Kickstarter seitan retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small batch freegan sed.</p>
          <v-img src="/images/home/signature.png" class="signature my-3"
          data-aos="fade-left" 
          data-aos-duration="600"
          data-aos-easing="ease-out"
          data-aos-delay="1500"
          data-aos-once="true"></v-img>
          <h6 class="font-weight-bold" 
          data-aos="fade-left" 
          data-aos-duration="600"
          data-aos-easing="ease-out"
          data-aos-delay="2000"
          data-aos-once="true"
          >MISLAV CRNKOVIĆ - GENERAL MANAGER</h6>
        </v-col>

        <v-col cols="12" xl="5" lg="5" md="6" sm="">
          <div class="img-container d-flex align-center justify-center">
            <v-img
              class="block-1-img"
              lazy-src="https://picsum.photos/id/11/10/6"
              src="/images/home/pexels-oliver-sjöström-1433052.jpg"
            ></v-img>
          </div>
        </v-col>

        <v-col cols="12" xl="2" lg="1" md="0"></v-col>

      </v-row>
      
    </v-container>

    <HomeBlock2 />
    
  </div>

</template>
<script>
import Slider from "../components/Slider.vue"
import HomeBlock2 from "../components/HomeBlock2.vue"
import aosMixin from "../mixins/aos"
export default {
  mixins: [aosMixin],
  data () {
      return {
        
      }
    }
}
</script>
<style scoped>
.signature{
  max-width: clamp(9rem, 20vw, 13rem);
}
.block-1-img{
  min-height: 60vh;
  max-height: 60vh;
  min-width: 35vw;
  max-width: 35vw;
}
@media only screen and (max-width: 960px) {
  .block-1-img{
    min-height: 60vh;
    max-height: 60vh;
    min-width: 80vw;
    max-width: 80vw;
  }
}
p{
  font-size: 14px;
  font-weight: 800;
  line-height: 1.9rem;
}
h2{
  font-size: clamp(28px, 5vw, 42px);
  line-height: 1.4em;
}
</style>