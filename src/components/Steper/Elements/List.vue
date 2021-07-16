<template>
  <ul>
    <li :key="index" v-for="(element, index) in data">{{ element }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    data: Array
  }
}
</script>

<style scoped lang="scss">
  ul {
    padding-left: 1em;
    margin: .5em 0;
  }
</style>
