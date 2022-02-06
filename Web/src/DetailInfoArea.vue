<template>
  <div>
    <json-view :data="json" />
  </div>
</template>

<script>
import jsonView from "vue-json-views";

export default {
  components: {
    jsonView,
  },
  data() {
    return {
      json: "{\"123\":\"123\"}",
    };
  },
};
</script>