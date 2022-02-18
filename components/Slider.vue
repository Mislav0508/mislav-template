<template>

  <section class="slider">

    <div class="slide"
      v-for="(image, i) in images" :key="i" 
      :class="[ i === index ? 'activeSlide' :  i === index - 1 || (index === 0 && i === images.length - 1) ? 'lastSlide' : 'nextSlide' ]"
      >
      <img :src="image" alt="img" >
      <h1 :class="[ i === index ? 'activeTitle' : '' ]">{{ captions[i] }} </h1>
      <p :class="[ i === index ? 'activeSubtitle' : '' ]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, veniam?</p>
    </div>
    <div class="arrow-container-left" @click="prev">
      <i class="arrow left"></i>      
    </div>
    <div class="arrow-container-right"  @click="next">
      <i class="arrow right"></i>
    </div>
    
    <v-container style="position: absolute; bottom: 10vh;"   class="d-flex justify-center">
      <div v-for="(image, i) in images" :key="i"
      class="slider-line" 
      :id="[ i === index && 'slider-line-active' ]"
      @click="index = i"
      ></div>
      
    </v-container>

  </section>


</template>

<script>
export default {
  data () {
      return {
          index: 0,
          interval: null,
          position: 'nextSlide',
          rectLast: null,
          rectActive: null,
          rectNext: null,
          images: [
          "/images/home/slider-home-1.jpg",
          "/images/home/slider-home-2.jpg",
          "/images/home/slider-home-3.jpg",
          "/images/home/slider-home-4.jpg",
          ],
          captions: [
            "First slide",
            "Second slide",
            "Third slide",
            "Fourth slide",
          ]
      }
    }, 
  methods: {
      prev() {
        this.index = this.index - 1
      },
      next() {
        this.index = this.index + 1
      }
  },
  watch: {
    index() {
      const lastIndex = this.images.length - 1
      if (this.index < 0) {
        this.index = lastIndex
      }
      if (this.index > lastIndex) {
        this.index = 0
      }
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.next() 
      }, 100000);

    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.next() 
    }, 100000);
    
  }
}
</script>

<style scoped>
.slider{
  position: relative;
  width: 100vw;
  min-height: 90vh;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;  
  background: rgba(0, 0, 0, 0.8);
}
.slide{
  opacity: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}
@keyframes activeSlide {
  
}
.slide.activeSlide {
  opacity: 1;
  position: absolute;
  transform: translateX(0);
  transition: all 2s ease-out;
}
@keyframes lastSlide {
  
}
.slide.lastSlide {
  position: absolute;
  transform: translateX(-100%);
  transition: all 2s ease-out;
}
@keyframes nextSlide {
  0% {}
  100% {}
}
.slide.nextSlide {
  position: absolute;
  transform: translateX(100%);
  transition: all 2s ease-out;
}
img{
  width: 100vw;
  min-height: 90vh;
  max-height: 90vh;
  object-fit: cover;
  filter: brightness(80%);
}
h1,p{
  position: absolute;
  color: var(--primary);
}
p{
  margin-top: 18vh;
}
@keyframes activeTitle {
  0%   { opacity: 0; transform: translateY(25vh);}
  25%   { opacity: 0; transform: translateY(25vh);}
  50%  {opacity: 0; transform: translateY(10vh)}
  100% {opacity: 1; transform: translateY(0vh);}
}
.activeTitle{
  animation-name: activeTitle;
  animation-duration: 3s;
}
@keyframes activeSubtitle {
  0%   { opacity: 0; transform: translateY(25vh);}
  25%   { opacity: 0; transform: translateY(25vh);}
  50%  {opacity: 0; transform: translateY(10vh)}
  100% {opacity: 1; transform: translateY(0vh);}
}
.activeSubtitle{
  text-align: center;
  animation-name: activeSubtitle;
  animation-duration: 3.5s;
  padding: clamp(3rem, 10vw, 2rem);
}
.slider-line{
  position: relative;
  min-width: clamp(2rem, 2vw, 2.5rem);
  min-height: 3px;
  background: var(--primary);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  cursor: pointer;
  margin: 0 0.4rem;
  opacity: 0.5;
}
.slider-line:hover{
  opacity: 1;
}
#slider-line-active{
  opacity: 1;
}
.arrow-container-left{
  top: 43vh; 
  left: 4vw;
  position: absolute;
  padding: 1rem 1rem 1rem 0;
  cursor: pointer;
  transition: all 0.1s linear;
}
.arrow-container-right{
  top: 43vh;
  right: 4vw;
  position: absolute;
  padding: 1rem 0rem 1rem 1rem;
  cursor: pointer;
  transition: all 0.1s linear;
}
.arrow {
  border: solid var(--primary);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 0.6rem;
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
  right: 3.5vw;
}
.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);  
}
.arrow-container-left:hover{
  left: 3.5vw
}

</style>