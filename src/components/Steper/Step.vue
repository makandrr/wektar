<template>
  <div class="container" id="step-container">
    <div class="amounter" v-if="ismulti">
      <svg alt="Назад" class="amounter-button" @click="$emit('prevmulti')" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>
      <span>{{ multistepnumber }} / {{ multiamount }}</span>
      <svg alt="Вперёд" class="amounter-button" @click="$emit('nextmulti')" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
    </div>
    <article-step v-if="type === 'article'" :data="data" @next="$emit('next')" :islast="islast" :key="stepkey"></article-step>
    <task-step v-if="type === 'task'" :data="data" @next="$emit('next')" :islast="islast" :key="stepkey"></task-step>
  </div>
</template>

<script>
import ArticleStep from './StepTypes/ArticleStep'
import TaskStep from './StepTypes/TaskStep'
export default {
  components: { TaskStep, ArticleStep },
  props: {
    type: String,
    data: Object,
    islast: Boolean,
    ismulti: Boolean,
    multiamount: Number,
    multistepnumber: Number,
    stepkey: Number
  },
  emits: ['nextmulti', 'prevmulti']
}
</script>

<style lang="scss" scoped>
  @import '../../scss/variables';
  .container {
    background-color: $white-soft-color;
    padding: 3em 1.6em 2.5em 1.6em;
    position: relative;
    .amounter {
      position: absolute;
      top: .6em;
      right: .6em;
      display: flex;
      align-items: center;
      user-select: none;
      span {
        margin: 0 .3em;
      }
      svg {
        cursor: pointer;
        transition: 100ms all;
        fill: #000;
        &:hover {
          opacity: 0.7;
        }
        &:active {
          transform: scale(0.85);
        }
      }
    }
  }
</style>
