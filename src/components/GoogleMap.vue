<template>
  <div class="about">
    <GMapMap
      :center="center"
      :zoom="4"
      map-type-id="terrain"
      style="width: 100vw; height: 900px"
    >
      <GMapMarker
        :key="marker.id"
        v-for="marker in markers"
        :position="marker.position"
      >
        <GMapInfoWindow
          :opened="true"
          :options="{
            pixelOffset: {
              width: 10,
              height: 0,
            },
            maxWidth: 320,
            maxHeight: 320,
          }"
        >
          <div>
            I am in info window ...
          </div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapMap>
  </div>
</template>
<script>
export default {
  name: "GoogleMap",
  props: {
    markers: Array,
    center: Object,
  },
  //   data() {
  //     return {
  //       center: { lat: 53.551086, lng: 9.993682 },
  //     }
  //   }
};
</script>
