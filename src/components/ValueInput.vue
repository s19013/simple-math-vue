<template>
  <div>
    <input type="number" v-model="value"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
        value:0
    }
  },
  watch:{
    value:function(newValue){
        this.$emit('changeValue',{newValue:newValue})
    }
  },
}
</script>

<style scoped>

</style>
