<template>
  <div>
    <span>{{ value }}</span>
  </div>
  
</template>

<!-- ここにpropsで値渡して計算でもよくない? -->
<script>
export default {
  data() {
    return {
        
    }
  },
  props:{
    value:{
        type:Number,
        default:0
    }
  },
}
</script>

<style scoped>

</style>
