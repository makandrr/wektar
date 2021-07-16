<template>
  <img :src="typeof data === 'string' ? data : data.src" :class="typeof data !== 'string' ? data.design : ''">
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="scss" scoped>
  img {
    display: block;
    margin: 1em auto;
    width: 60%;
    &.wide {
      width: 100%;
    }
    &.small {
      width: 40%;
    }
  }
</style>
