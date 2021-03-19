<template>
 <div class="hometitle">Home</div>
  <div class="home">
   

    <div class="citys-list">
      <router-link
        v-for="city in citys"
        :to="{ name: 'cityProfile', params: { cityId: city.id } }"
        :key="city.id"
      >
        <div class="card">
          <img :src="city.img3" style="width: 250px; height: 200px" />
          <h1>{{ city.cityname }}</h1>
          <p class="title">{{ city.country }}</p>
          <p>Click for more infos</p>

          <p><button>More information</button></p>
        </div>
      </router-link>
    </div>
  </div>
  <!-- <div>
    <GoogleMap :markers="markers" :center="center" />
  </div>   -->
</template>

<script>
import { citys } from "../assets/citys";
// import GoogleMap from '@/components/GoogleMap.vue'

export default {
  name: 'Home',
  setup() {
    return {
      citys
    }
  },
  // components: {
  //   GoogleMap
  // },
  // data() {
  //   return {
  //     center: { lat: 53.551086, lng: 9.993682 },
  //     markers: [
  //       {
  //         id: 'istanbul',
  //         position: {
  //           lat: 41.015137, lng: 28.979530
  //         },
  //       },
  //       {
  //         id: 'Paris',
  //         position: {
  //           lat: 48.864716, lng: 2.349014
  //         },
  //       },
  //       {
  //         id: 'berlin',
  //         position: {
  //           lat: 52.520008, lng: 13.404954
  //         },
  //       },
  //       {
  //         id: 'hamburg',
  //         position: {
  //           lat: 53.551086, lng: 9.993682
  //         },
  //       }
  //     ]
  //   }
  // }
};
</script>



<style lang="scss" scoped>
.hometitle {
margin: 10px;
text-align: center;
font-size: 50px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-weight: bold;
}

.home {
  padding: 50px 5%;
  text-align: center;
  justify-content: center;

 
  


  .card {
    display: inline-block;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    max-height: 750px;
    margin-top: 50px;
    margin: 50px;
    text-align: center;
    font-family: arial;
//       @media  (max-width: 1400px) {
//   /* For tablez : */
//     display: table;

    
//     background-color: ivory;
  
// }
  }

  .title {
    color: grey;
    font-size: 18px;
  }

  button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }

  a {
    text-decoration: none;
    font-size: 22px;
    color: black;
  }

  button:hover,
  a:hover {
    opacity: 0.7;
  }
}
</style>