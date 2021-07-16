<template>
  <div class="container">
    <span>{{ data.label }}</span><img v-if="data.imageLabel" :src="data.imageLabel" :alt="data.label || 'Expression'">&nbsp;&nbsp;=
<!--    <input-->
<!--      @input="$emit('set-data-key', { key: data.value, value: +removeChars($event.target.value) }); setInputValue($event.target.value); $emit('interact')"-->
<!--      :value="tdata[data.value]" ref="input"-->
<!--    >-->
    <input ref="whole" @input="$emit('interact'); setInputValue('whole', $event.target.value); $emit('set-data-key', { key: data.value, value: fractionValue() })">
    <div class="fraction">
      <input ref="numerator" @input="$emit('interact'); setInputValue('numerator', $event.target.value); $emit('set-data-key', { key: data.value, value: fractionValue() })">
      <div class="line"></div>
      <input ref="denominator" @input="$emit('interact'); setInputValue('denominator', $event.target.value); $emit('set-data-key', { key: data.value, value: fractionValue() })">
    </div>
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
    setInputValue (refName, string) {
      this.$refs[refName].value = string.replace(/[^0-9.,]/g, '')
    },
    fractionValue () {
      return +this.$refs.whole.value + +this.$refs.numerator.value / +this.$refs.denominator.value
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../../scss/_variables.scss';
div.container {
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
    max-width: 4em;
    text-align: right;
    outline: none;
    &:focus {
      border-color: $learn-color;
    }
  }
  .fraction {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: .5em;
    input {
      margin: 0 .3em;
      max-width: 4em;
      text-align: center;
    }
    .line {
      margin: .3em 0;
      background-color: #000;
      height: 2px;
    }
  }
}
</style>
