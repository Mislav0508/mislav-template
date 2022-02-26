<template>
  <div>
    <v-container class="d-flex align-center justify-center flex-wrap pb-15">
      <RoomCard v-for="(img, i) in images" :key="i"
      :image="images[i]"
      :type="types[i]"
      :size="sizes[i]"
      :adults="capacity.adults[i]"
      :children="capacity.children[i]"
      :price="prices[i]"/>  
    </v-container> 
  </div>
</template>

<script>
import RoomCard from "../../components/RoomCard.vue"
export default {
  data () {
    return {
      title: '',
      subtitle: '',
      description: {
        title: '',
        paragraph_1: '',
        paragraph_2: '',
        paragraph_3: '',
        price: '',
        bed: '',
        capacity: '',
        size: '',
        view: ''
      },
      amenities: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: '',
      },
      services: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: ''
      },
      images: [
        "/images/home/midSlider/midSlider-1.jpg",
        "/images/home/midSlider/midSlider-2.jpg",
        "/images/home/midSlider/midSlider-3.jpg",
        "/images/home/midSlider/midSlider-4.jpg"
      ],
      types: [ "Superior Room", "Deluxe Room", "Signature Room", "Luxury Suite Room" ],
      sizes: [ 30, 55, 70, 120 ],
      capacity: {
        adults: [ 2, 3, 3, 4 ],
        children: [ 1, 1, 2, 2]
      },
      prices: [ 199, 249, 299, 399 ]
        
    }
  },
  mounted() {
    if (this.$route.params.room.includes('SuperiorRoom')) {
      this.title = 'Superior Room'
      this.images = this.images.filter(img => img !== this.images[0])
      console.log(this.images);
    } else if (this.$route.params.room.includes('DeluxeRoom')) {
      this.title = 'Deluxe Room'
      this.images = this.images.filter(img => img !== this.images[1])
      console.log(this.title);
    } else if (this.$route.params.room.includes('SignatureRoom')) {
      this.title = 'Signature Room'
      this.images = this.images.filter(img => img !== this.images[2])
      console.log(this.title);
    } else if (this.$route.params.room.includes('LuxurySuiteRoom')) {
      this.title = 'Luxury Suite Room'
      this.images = this.images.filter(img => img !== this.images[3])
      console.log(this.title);
    }
  }
}
</script>

<style>

</style>