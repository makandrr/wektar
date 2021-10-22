<template>
  <div class="step" :class="[type ? type : 'article', active ? 'active' : '']" @click="$emit('click')">
    <span v-if="amount">{{ amount }}</span>
    <img :src="iconTable[type || 'text']">
  </div>
</template>

<script>
import textIcon from '../assets/icons/step_text.svg'
import taskIcon from '../assets/icons/step_task.svg'

export default {
  props: ['type', 'active', 'amount'],
  data () {
    return {
      iconTable: {
        article: textIcon,
        task: taskIcon
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../scss/variables";
  @import "../scss/mixins";

  .step {
    position: relative;
    width: 3.2em;
    height: 3.2em;
    cursor: pointer;
    user-select: none;
    background-color: #269D56;
    &.article {
      @include step-color($step-text-color)
    }
    &.task {
      @include step-color($step-task-color)
    }
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 2em;
    }

    span {
      position: absolute;
      top: .05em;
      right: .2em;
      font-size: 0.7em;
      font-weight: 500;
      color: #fff;
    }
  }
</style>
