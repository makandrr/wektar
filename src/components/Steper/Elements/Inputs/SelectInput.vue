<template>
  <div>
    <span>{{ data.label }} - </span>
    <select ref="select" @change="$emit('interact'); $emit('set-data-key', { key: data.value, value: $event.target.value !== '-1' ? $event.target.value : null }); setSelectValue($event.target.value)">
      <option value="-1">Выберите</option>
      <option :value="element" :key="index" v-for="(element, index) in data.list">{{ element }}</option>
    </select>
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
  font-size: 1.4em;
  display: flex;
  align-items: center;
  margin: .5em 0;
  select {
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

  @media (max-width: 820px) {
    font-size: 1em;
  }

  @media (max-width: 554px) {
    font-size: 1.4em;
  }

  @media (max-width: 418px) {
    font-size: 1.1em;
  }
}

</style>
