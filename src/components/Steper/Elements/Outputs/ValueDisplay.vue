<template>
  <div>
    <span>{{ data.label }} = </span>
    <span>{{ tdata[data.value] }}</span>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    tdata: Object
  }
}
</script>

<style scoped>

</style>
