<template>
  <div>
    <h1>Hello,{{ name }}</h1>

    <el-radio v-model="radio" label="1">Vue</el-radio>
    <el-radio v-model="radio" label="2">Java</el-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "LXY",
      radio: "2"
    };
  },
};
</script>

<style>
</style>