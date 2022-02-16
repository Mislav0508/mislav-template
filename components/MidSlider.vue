<template>
  <v-container fluid class="whole-container">
    <v-row class="d-flex flex-wrap">

      <v-col cols="12" xl="4" lg="4" md="4" sm="12" class="pa-xl-5" style='z-index:999;background-color: #222222;'>
        
        <v-container class="px-15 py-xl-7">

          <h2>Deluxe Room</h2>
          <p class="mb-0">From</p>
          <h3 class="font-weight-bold mb-10">$250</h3>

          <v-row class="mb-4">

            <v-col cols="6" xl="4" lg="6" md="6" sm="6" class="font-weight-bold">
              <p class="mb-1">bed: </p>
              <p class="mb-1">capacity: </p>
              <p class="mb-1">room size: </p>
              <p class="mb-1">view: </p>
              <p class="mb-1">recommend: </p>
            </v-col>

            <v-col cols="6" xl="4" lg="6" md="6" sm="6">
              <p class="mb-1">king bed </p>
              <p class="mb-1">3 adults 1 children </p>
              <p class="mb-1">55m2 </p>
              <p class="mb-1">sea view </p>
              <p class="mb-1">great for business trip</p>
            </v-col>

          </v-row>

          <v-btn outlined tile large color="white" width="180" type="button" class="no-uppercase">
            view detail
          </v-btn>

        </v-container>

      </v-col>
      
      <v-col cols="12" xl="8" lg="8" md="8" sm="12" class="ma-0 pa-0">
        
          <div class="sliderMid">

            <div class="slideMid" v-for="(image, i) in images" :key="i">
              <img :src="image" alt="img" :class="imgSize[i] == 1 ? 'imagesS' : 'imagesL'">
            </div>

          </div>

          <div class="arrow-container-left" @click="prev">
            <i class="arrow left"></i>      
          </div>
          <div class="arrow-container-right"  @click="next">
            <i class="arrow right"></i>
          </div>

      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      images: [
        "/images/home/midSlider/midSlider-1.jpg",
        "/images/home/midSlider/midSlider-2.jpg",
        "/images/home/midSlider/midSlider-3.jpg",
        "/images/home/midSlider/midSlider-4.jpg",
        "/images/home/midSlider/midSlider-5.jpg",
      ],
      imgSize: [ 2, 1, 1, 2, 2 ] ,
      translateX: 50
    }
  },
  beforeMount() {
    
  },
  mounted() {
    var myElement = document.querySelector('.sliderMid');
    myElement.style.transform = "translateX(" + this.translateX + "rem)"
  },
  methods: {
    next() {
      if (this.translateX < -40) return
      this.translateX = this.translateX - 40
      var myElement = document.querySelector('.sliderMid');
      myElement.style.transform = "translateX(" + this.translateX + "rem)"
    },
    prev() {
      if (this.translateX >= 50) return
      this.translateX = this.translateX + 40
      var myElement = document.querySelector('.sliderMid');
      myElement.style.transform = "translateX(" + this.translateX + "rem)"
    }
  }
}
</script>

<style scoped>
.whole-container{
  background-color: #222222;
  color: var(--primary);
  min-height: 55vh;
}
  p{
    font-size: 14px;
    line-height: 1.9rem;
    color: var(--primary);
  }
  h2{
    font-size: 26px;
    line-height: 1.4em;
    color: var(--primary);
  }
.sliderMid{
  background: var(--secondary);
  width: 100%;
  min-height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.9s ease-out;
  /* transform: translateX(45vw); */
}
.slideMid{
  display: flex;
  transition: transform 0.9s ease-out;
  /* z-index: 9999999; */
}
.imagesL{
  /* object-fit: cover; */
  position: relative;
  min-width: 100%;
  min-height: 55vh;
  max-height: 55vh;
  z-index: 0;
  transition: transform 0.9s ease-out;
  /* transform: translateX(0); */
}
.imagesS{
  min-width: 100%;
  min-height: 55vh;
  max-height: 55vh;
  z-index: 0;
  transition: transform 0.9s ease-out;
  /* transform: translateX(0); */
}
/* ARROWS */
.arrow-container-left{
  top: 25vh; 
  left: 3vw;
  position: absolute;
  padding: 0.5rem 0.6rem 0.6rem 1rem;  
  cursor: pointer;
  transition: all 0.1s linear;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 100%;
}
.arrow-container-right{
  top: 25vh;
  right: 3vw;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 100%;
  padding: 0.5rem 1rem 0.6rem  0.6rem;
  cursor: pointer;
  transition: all 0.1s linear;
}
.arrow {
  border: solid var(--primary);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 0.3rem;
  position: relative;
  cursor: pointer;
  z-index: 5;
  transition: all 0.3s linear;
}
.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);  
}
.arrow-container-right:hover{
  transform: translateX(0.4vw);
  background: rgba(0, 0, 0, 0.5);

}
.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);  
}
.arrow-container-left:hover{
  transform: translateX(-0.4vw);
  background: rgba(0, 0, 0, 0.5);
}

.no-uppercase {
  text-transform: unset !important;
  font-weight: bold;
}
</style>