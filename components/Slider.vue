<template>

  <section class="slider">

    <div class="slide"
      v-for="(image, i) in images" :key="i" 
      :class="[ i === index ? 'activeSlide' :  i === index - 1 || (index === 0 && i === images.length - 1) ? 'lastSlide' : 'nextSlide' ]"
      >
      <img :src="image" alt="img" >
      <h1 :class="[ i === index ? 'activeTitle' : '' ]">{{ i === index ? 'activeSlide' :  i === index - 1 || (index === 0 && i === images.length - 1) ? 'lastSlide' : 'nextSlide' }} </h1>
      <p :class="[ i === index ? 'activeSubtitle' : '' ]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, veniam?</p>
    </div>
    <i class="arrow left" @click="prev"></i>
    <i class="arrow right" @click="next"></i>
    
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
    }
  }
}
</script>

<style scoped>
.slider{
  position: relative;
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid blue;
  
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
  transition: all 1s ease-out;

}
@keyframes lastSlide {
  
}
.slide.lastSlide {
  position: absolute;
  transform: translateX(-100%);
  transition: all 1s ease-out;
}
@keyframes nextSlide {
  0% {}
  100% {}
}
.slide.nextSlide {
  position: absolute;
  transform: translateX(100%);
  transition: all 1s ease-out;
}
img{
  width: 100vw;
  max-height: 90vh;
}
h1,p{
  position: absolute;
  color: var(--primary);
}
h1{
  font-size: 5vw;
}
p{
  margin-top: 15vh;
    font-size: 1vw;
}
@keyframes activeTitle {
  0%   { opacity: 0; transform: translateY(25vh);}
  50%  {opacity: 0; transform: translateY(10vh)}
  100% {opacity: 1; transform: translateY(0vh);}
}
.activeTitle{
  animation-name: activeTitle;
  animation-duration: 1.5s;
}
@keyframes activeSubtitle {
  0%   { opacity: 0; transform: translateY(25vh);}
  50%  {opacity: 0; transform: translateY(10vh)}
  100% {opacity: 1; transform: translateY(0vh);}
}
.activeSubtitle{
  animation-name: activeSubtitle;
  animation-duration: 2s;
}
.slider-line{
  position: relative;
  min-width: 2rem;
  min-height: 3px;
  background: var(--primary);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255,101,47,.2);
  transition: all .3s ease-in-out;
  cursor: pointer;
  margin: 0 0.3vw;
  opacity: 0.5;
}
.slider-line:hover{
  opacity: 1;
}
#slider-line-active{
  opacity: 1;
}
.arrow {
  border: solid var(--primary);
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 0.5vw;
  position: absolute;
  cursor: pointer;
  z-index: 999;
  transition: all 0.1s linear;
  top: 43vh;
  
}
.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  right: 4vw;
}
.right:hover{
  right: 3.5vw;
}
.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  left: 4vw
}
.left:hover{
  left: 3.5vw
}

</style>