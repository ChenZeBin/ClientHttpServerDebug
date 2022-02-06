<template>
  <a-select
    mode="tags"
    style="width: 100%"
    placeholder="输出关键字搜索"
    @change="handleChange"
  >
  </a-select>
</template>
<script>
export default {
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>
