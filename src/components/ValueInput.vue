<template>
  <div>
    <input type="number" v-model="value"/>
  </div>
</template>

<script setup>
import { ref,watch } from "vue";
import { defineEmits } from 'vue';

const value = ref(0);

// emitは前もって色々宣言しておく必要がある
// 配列の中に関数名じゃんじゃyん入れておけばok
const emit = defineEmits(['changeValue'])

watch(value,(newValue,oldValue) => {
  emit('changeValue',{newValue:newValue})
})
</script>

<style scoped>

</style>
