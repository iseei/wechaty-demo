<script  lang='ts' setup>
import { computed } from '@vue/reactivity';
  console.log('setup');
</script>
<script  lang='ts'>
console.log('common');
export default {
  data: () => {
    return {
      count: 2,
      msg: 'ss'
    };
  },

  methods: {
    handleClick: () => {
      console.log('handleClcik');
    }
  },

  // computed: () => {
  //   console.log('computed');
  // }
};
</script>

<template>
  <div class="box">dddd</div>
  <div>{{ count }}</div>
  <div @click="handleClick">{{ msg }}</div>
</template>

<style scoped>
.box {
  color: red;
}
</style>