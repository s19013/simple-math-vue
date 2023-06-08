<template >
  <div class="main">
    <ValueInput @changeValue = "changeValue1"/>
    + <ValueInput @changeValue ="changeValue2"/>
    = <ValueAnswer :value="answer"/>
  </div>
</template>

<script>
import ValueInput from './components/ValueInput.vue';
import ValueAnswer from './components/ValueAnswer.vue';
export default {
  data() {
    return {
      value1:0,
      value2:0,
      answer:0,
    }
  },
  components:{
    ValueInput,
    ValueAnswer,
    ValueInput
  },
  methods: {
    changeValue1({newValue}){
      let ans = parseInt(newValue) + parseInt(this.value2)
      this.value1 = newValue
      this.answer = ans
    },
    changeValue2({newValue}){
      let ans = parseInt(this.value1) + parseInt(newValue)
      this.value2 = newValue
      this.answer = ans
    }
  },
}
</script>

<style lang="scss" scoped>
// vueではなぜか改行するからflex
.main{
  display: flex;
}
</style>
