<template>
  <a-table ref="table"
    :columns="columns"
    :data-source="data"
    :pagination="{ pageSize: 1000000000000000000 }"
    :scroll="{ y: 666 }"
  />
</template>
<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

export default {
  data() {
    return {
      data,
      columns,
    };
  },
  mounted(){
    
    // this.$refs.scroll.y =
  },
  watch: {
    allDataMap(val, newval) {
        console.log(val)
        console.log(newval)
    }
} 
};
</script>
