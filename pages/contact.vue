<template>
  <div>
    <v-container class="block-1-rooms d-flex align-center pt-lg-15 mt-lg-10 mt-sm-7">

      <v-col cols="4" xl="2" lg="2" md="1" sm="1"></v-col>

      <v-col cols="4" xl="10" lg="10" md="11" sm="11">
        <h2 data-aos="fade-right" 
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-delay="500"
        data-aos-once="true" class="pb-5">Apartments in Novi Vinodolski</h2>
        <p data-aos="fade-right" 
        data-aos-duration="1000"
        data-aos-easing="ease-out"
        data-aos-delay="1000"
        data-aos-once="true">Unwind the clock of modern life. Unlock the door to a wonder of the world.</p>
      </v-col>      

    </v-container>

    <v-container fluid class="px-0">

      <GMap
        ref="gMap"
        language="en"
        :cluster="{options: {styles: clusterStyle}}"
        :center="{lat: locations[0].lat, lng: locations[0].lng}"
        :options="{fullscreenControl: true, mapTypeControl:true,styles: mapStyle}"
        :zoom="13"
        mapTypeId='terrain'
      >
        <GMapMarker
          v-for="location in locations"
          :key="location.id"
          :position="{lat: location.lat, lng: location.lng}"
          @click="currentLocation = location"
        >
          <GMapInfoWindow :options="{maxWidth: 200}">
            <code>
              lat: {{ location.lat }},
              lng: {{ location.lng }}
            </code>
          </GMapInfoWindow>
        </GMapMarker>
        <GMapCircle :options="circleOptions"/>
      </GMap>

    </v-container>
  </div>
</template>

<script>
import aosMixin from "../mixins/aos"
export default {
  mixins: [aosMixin],
  data() {
  return {
    fullscreenControl: true,
    currentLocation: { 
      lat: 45.130149286110075, 
      lng: 14.775744856159324
     },
    circleOptions: {
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35
    },
    locations: [
      {
        lat: 45.130149286110075, 
        lng: 14.775744856159324
      }
    ],
    pins: {
      selected: "https://developers.google.com/maps/documentation/javascript/examples/full/images/",
      notSelected: "https://developers.google.com/maps/documentation/javascript/examples/full/images/"
    },
    mapStyle: [
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#e9bc62" }],
      },
    ],
    clusterStyle: [
      {
        url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
        width: 56,
        height: 56,
        textColor: "#fff"
      }
    ]
  }
}

}
</script>

<style >
.block-1-rooms{
  min-height: 30vh;
}
.GMap__Wrapper {
  width: 100%;
  height: 60vh;
}

</style>