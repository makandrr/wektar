<template>
  <div>
    <span>{{ data.label }}</span><img v-if="data.imageLabel" :src="data.imageLabel" :alt="data.label || 'Expression'">&nbsp;&nbsp;=
    <input
      @input="$emit('set-data-key', { key: data.value, value: +removeChars($event.target.value) || 0 }); $emit('interact'); setInputValue($event.target.value)"
      ref="input"
      @change="setInputValue($event.target.value)"
      :value="tdata[data.value]"
    >
  </div>
</template>

<script>
export default {
  emits: ['set-data-key', 'interact'],
  data () {
    return {
      ...this.$props.data
    }
  },
  props: ['data', 'tdata'],
  methods: {
    removeChars (string) {
      return string.replace(/[^0-9\-.,]/g, '').replace(/,/g, '.')
    },
    setInputValue (string) {
      this.$refs.input.value = string.replace(/[^0-9\-.,]/g, '')
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../../../scss/_variables.scss';
  div {
    font-size: 1.2em;
    display: flex;
    align-items: center;
    margin: .5em 0;
    img {
      width: 9em;
    }
    input {
      font-size: inherit;
      padding: .15em .25em;
      margin-left: .4em;
      background-color: #F9F9F9;
      border: 1px solid #BFBFBF;
      max-width: 7em;
      outline: none;
      &:focus {
        border-color: $learn-color;
      }
    }
  }
</style>
