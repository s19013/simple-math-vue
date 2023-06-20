<template>
  <div>
    <span>{{ value }}</span>
  </div>
  
</template>

<!-- ここにpropsで値渡して計算でもよくない? -->
<script setup>
import { defineProps } from "vue";

// propsはあまり変わらない
const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
});

</script>

<style scoped>

</style>
