<template>
  <div>
    <span>{{ data.label }}</span><img v-if="data.imageLabel" :src="data.imageLabel" :alt="data.label || 'Expression'">&nbsp;&nbsp;=
    <input
      @input="$emit('set-data-key', { key: data.value, value: $event.target.value }); $emit('interact')"
      :value="tdata[data.value]" ref="input"
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
  }
}
</script>

<style scoped lang="scss">
@import '../../../../scss/_variables.scss';
div {
  font-size: 1.6em;
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
