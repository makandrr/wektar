<template>
  <button :class="[color]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'QButton',
  props: ['color'],
  emits: ['click']
}
</script>

<style scoped lang="scss">
  @import '../scss/_variables.scss';
  @import '../scss/_mixins.scss';
  button {
    border: none;
    background-color: transparent;
    color: #fff;
    padding: .2em 2em;
    font-size: 1em;
    font-weight: 400;
    font-family: $main-font;
    transition: 300ms all;
  }

  button.green {
    @include q-button($green-button-color)
  }

  button.orange {
    @include q-button($orange-button-color)
  }

  button.blue {
    @include q-button($blue-button-color)
  }

  button.glow {
    background-color: $glow-button-color;
    border: 4px solid darken($glow-button-color, 6%);
    box-shadow: 0 0 14px 1px darken($glow-button-color, 6%);
    color: #222;
    &:hover {
      box-shadow: 0 0 6px 3px darken($glow-button-color, 10%);
      background-color: lighten($glow-button-color, 2%);
    }
  }
</style>
