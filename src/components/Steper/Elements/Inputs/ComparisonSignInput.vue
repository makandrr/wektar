<template>
  <div>
    <span>{{ data.leftChar }}</span>
    <select ref="select" @change="$emit('interact'); $emit('set-data-key', { key: data.value, value: $event.target.value }); setSelectValue($event.target.value)">
      <option value="?">&or;</option>
      <option value="=">=</option>
      <option value=">">&gt;</option>
      <option value="<">&lt;</option>
    </select>
    <span>{{ data.rightChar }}</span>
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
    setSelectValue (value) {
      this.$refs.select.value = value
    }
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
  select {
    font-size: inherit;
    padding: .15em .25em;
    margin: 0 .4em;
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
