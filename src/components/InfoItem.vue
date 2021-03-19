<template>
  <div class="info-item">
    <div class="city-profile_info">
      <div class="info-item__city">
        {{ cityname }}
        {{ country }}
      </div>
      <div class="info-item__content">
        {{ info.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoItem",
  props: {
    cityname: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    info: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.info-item {
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #DFE3E8;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.1, 1.1);
  }

  .info-item__city {
    font-weight: bold;
  }
}
</style>