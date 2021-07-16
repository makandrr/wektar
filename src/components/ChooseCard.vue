<template>
  <div class="card" :class="[type, disabled ? 'disabled' : '']" @click="$emit('clicked')">
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
  props: ['icon', 'type', 'sublabel', 'disabled'],
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
    width: 337px;
    height: 450px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    cursor: pointer;
    .icon {
      width: 208px;
    }
  }

  @media(max-width: 1158px), (max-height: 695px) {
    .card {
      position: static;
    }
  }

  @media(max-width: 500px) {
    .card {
      width: 280px;
      height: 360px;
      .icon {
        width: 160px;
      }
    }
  }

  .card.disabled {
    cursor: not-allowed;
  }

  .card.learn {
    @include choose-card($learn-color);
    bottom: $vertical-padding;
    left: $horizontal-padding;
    h2 {
      font-size: 34px;
    }
  }

  .card.practice {
    @include choose-card($practice-color, 1);
    right: $horizontal-padding;
    top: $vertical-padding;
  }

  .label {
    padding-bottom: 30px;
    text-align: center;
    h2, h3 {
      font-weight: 500;
      transition: 300ms all;
    }

    h3 {
      margin-top: 10px;
      color: #C3D1FF;
    }
  }
</style>
