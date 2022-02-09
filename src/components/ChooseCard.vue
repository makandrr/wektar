<template>
  <div class="card" :class="[type, disabled ? 'disabled' : '']" @click="$emit('clicked')">
    <div v-if="shortcut" class="shortcut">{{ shortcut }}</div>
    <img :src="getIconPath" class="icon" :alt="icon">
    <div class="label">
      <h2><slot /></h2>
      <h3 v-if="sublabel">{{ sublabel }}</h3>
    </div>
  </div>
</template>

<script>
import learnIcon from '../assets/icons/learn_icon.svg'
import practiceIcon from '../assets/icons/pracitce_icon.svg'

export default {
  emits: ['clicked'],
  name: 'ChooseCard',
  props: ['icon', 'type', 'sublabel', 'disabled', 'shortcut'],
  computed: {
    getIconPath () {
      const iconNames = {
        learn: learnIcon,
        practice: practiceIcon
      }
      return iconNames[this.icon]
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";

  .card {
    width: 21em;
    height: 28em;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    cursor: pointer;
    .shortcut {
      position: absolute;
      top: .6em;
      right: .6em;
      font-size: 1.2em;
      background: rgba(0,0,0,0.2);
      width: 1.5em;
      height: 1.5em;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15%;
    }
    .icon {
      width: 15em;
    }
  }

  .card.disabled {
    cursor: not-allowed;
  }

  .card.learn {
    @include choose-card($learn-color);
    bottom: $vertical-padding;
    left: $horizontal-padding;
  }

  .card.practice {
    @include choose-card($practice-color, 1);
    right: $horizontal-padding;
    top: $vertical-padding;
  }

  .label {
    padding-bottom: 2.5em;
    text-align: center;
    h2, h3 {
      font-weight: 500;
      transition: 300ms all;
    }

    h3 {
      margin-top: .6em;
      color: #C3D1FF;
    }
  }

  @media(max-width: 850px) {
    .card {
      position: static;
      margin: 0;
    }
    .card {
      width: 60em;
      height: 80em;
      .icon {
        width: 40em;
      }
      h2 {
        font-size: 6.5em;
      }
    }
    .card.practice h2 {
      font-size: 5.3em;
    }
    .card.practice h3 {
      font-size: 3.4em;
    }

  }
</style>
