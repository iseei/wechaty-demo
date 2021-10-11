<script  lang='ts'>
export default {
  data() {
    return {
      count: 2,
    };
  },
};
</script>

<template>
  <div class="box">dddd</div>
  <div>{{ count }}</div>
  <div @click="log">{{ msg }}</div>
</template>

<style scoped>
.box {
  color: red;
}
</style>