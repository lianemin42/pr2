<template>
  <div class="city-profile">
    <div class="city-profileimg">
      <div class="citydiv3">
        <h1 class="city-cityname">{{ state.city.cityname }}</h1>
        
  <img :src="state.city.img2" style="width:80%">

      </div>
      <CreateInfoPanel @add-info="addInfo"/>
    </div>
    <div class="citywrapper">
      <InfoItem
          v-for="info in state.city.infos"
          :key="info.id"
          :cityname="state.city.cityname"
          :country="state.city.country"
          :info="info"
      />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import { citys } from "../assets/citys";
import InfoItem from "../components/InfoItem";
import CreateInfoPanel from "../components/CreateInfoPanel";

export default {
  name: "cityProfile",
  components: { CreateInfoPanel, InfoItem },
  setup() {
    const route = useRoute();
    const cityId = computed(() => route.params.cityId)

    const state = reactive({
      followers: 0,
      city: citys[cityId.value - 1] || citys[0]
    })

    function addInfo(info) {
      state.city.infos.unshift({ id: state.city.infos.length + 1, content: info });
    }

    return {
      state,
      addInfo,
      cityId
    }
  }
};
</script>

<style lang="scss" scoped>
.city-profile {
  margin: auto;
  width: 60%;
  padding: 10px;
  text-align: center;

  .citydiv3 {
    display: block;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    margin-bottom: auto;

    h1 {
      margin: 0;
    }

    
  }

  .citywrapper {
    display: block;
    grid-gap: 10px;
    
  }
}
</style>