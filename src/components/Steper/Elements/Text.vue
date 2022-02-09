<template>
  <p v-html="formattedText"></p>
</template>

<script>
export default {
  props: {
    data: String
  },
  data () {
    return {
      mathExp: false
    }
  },
  computed: {
    formattedText () {
      let text = this.data
      text = text.replace(/(<([^>]+)>)/ig, '')
      text = text.replace(/\[s\]/g, '<strong>')
      text = text.replace(/\[\/s\]/g, '</strong>')
      return text
    }
  },
  mounted () {
    if (/^\$\$.*\$\$$/.test(this.data)) {
      this.mathExp = true
    }
  }
}
</script>

<style scoped>
  p {
    line-height: 1.61;
    margin: 1em 0;
  }

  @media (max-width: 554px) {
    p {
      font-size: 1.25em;
    }
  }
</style>
