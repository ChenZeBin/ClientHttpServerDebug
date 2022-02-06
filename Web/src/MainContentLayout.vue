<template>
  <div id="wrapper">
    <div id="main-info-wrapper">
      <c-search id="c-search"></c-search>
      <main-info-area id="main-info-area"></main-info-area>
    </div>

    <a-divider id="divider" type="vertical" />

    <div id="detail-info-wrapper">
      <detail-info-area id="detail-info-area"></detail-info-area>
    </div>
  </div>
</template>

<script>
import CSearch from "./CSearch.vue";
import MainInfoArea from "./MainInfoArea.vue";
import DetailInfoArea from "./DetailInfoArea.vue";

export default {
  components: {
    CSearch,
    MainInfoArea,
    DetailInfoArea,
  },
};
</script>

<style>
#wrapper {
  display: grid;
  grid-template-columns: 1fr 10px 1fr;
  height: 100%;
}
#divider {
    height: 100%;
}

#main-info-wrapper {
    height: 100%;
}

#detail-info-wrapper {
    height: 100%;
}

#main-info-area {
    padding-top: 10px;
    height: 100%;
}

#detail-info-area {
    height: 100%;
}

</style>
