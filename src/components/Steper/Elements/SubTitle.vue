<template>
  <h3 v-text="data"></h3>
</template>

<script>
export default {
  name: 'SubTitle',
  props: {
    data: String
  }
}
</script>

<style scoped>
  h3 {
    font-size: 1.8em;
    margin: 1.5em 0 .7em 0;
  }
</style>
