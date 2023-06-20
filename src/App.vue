<template >
  <div class="main">
    <ValueInput @changeValue = "changeValue1"/>
    + <ValueInput @changeValue ="changeValue2"/>
    = <ValueAnswer :value="answer"/>
  </div>
</template>

<script setup>
import ValueInput from './components/ValueInput.vue';
import ValueAnswer from './components/ValueAnswer.vue';
import { ref } from "vue";

const value1 = ref(0);
const value2 = ref(0);
const answer = ref(0);


// いちいち.valueって書くのめんどくさい
const changeValue1 = ({newValue}) => {
  let ans = parseInt(newValue) + parseInt(value2.value)
  value1.value = newValue
  answer.value = ans
}

const changeValue2 = ({newValue}) => {
  let ans = parseInt(value1.value) + parseInt(newValue)
  value2.value = newValue
  answer.value = ans
}
</script>

<style lang="scss" scoped>
// vueではなぜか改行するからflex
.main{
  display: flex;
}
</style>
