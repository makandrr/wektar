<template>
  <div :class="[color || 'green', 'button']" @click="$emit('click')">
    <div>
      <slot />
    </div>
    <img :src="icon" alt="next">
    <div class="shortcut" v-if="shortcut">
      {{ shortcut }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'QButton',
  props: ['color', 'icon', 'shortcut'],
  emits: ['click']
}
</script>

<style scoped lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_mixins.scss';
.button {
  user-select: none;
  background-color: transparent;
  color: #fff;
  padding: .1em 2em;
  font-size: 1em;
  font-weight: 400;
  font-family: $main-font;
  transition: 300ms all;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.button.green {
  @include q-button($green-button-color)
}

.button.orange {
  @include q-button($orange-button-color)
}

button.blue {
  @include q-button($blue-button-color)
}

.button.glow {
  background-color: $glow-button-color;
  border: 4px solid darken($glow-button-color, 6%);
  color: #222;
  &:hover {
    background-color: lighten($glow-button-color, 2%);
  }
}

.shortcut {
  font-size: 1.2em;
  background: rgba(0,0,0,0.2);
  width: 1.5em;
  height: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15%;
}
</style>
