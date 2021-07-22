<template>
  <h2 class="title-q" v-html="coloredTitle"></h2>
</template>

<style scoped lang="scss">
  h2 {
    font-size: 2.8em;
    font-weight: 700;
    margin-bottom: .6em;
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 1.75em;
    }
  }
</style>

<script>
export default {
  props: {
    data: String
  },
  computed: {
    coloredTitle () {
      let title = this.data
      title = title.replace(/(<([^>]+)>)/ig, '')
      title = title.replace(/\[/g, '<strong>')
      title = title.replace(/\]/g, '</strong>')
      return title
    }
  }
}
</script>
