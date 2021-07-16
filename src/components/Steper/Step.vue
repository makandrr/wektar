<template>
  <div class="container">
    <div class="amounter" v-if="ismulti">
      <img src="../../assets/icons/leftBlack.svg" alt="Назад" @click="$emit('prevmulti')">
      <span>{{ multistepnumber }} / {{ multiamount }}</span>
      <img src="../../assets/icons/rightBlack.svg" alt="Вперёд" @click="$emit('nextmulti')">
    </div>
    <article-step v-if="type === 'article'" :data="data" @next="$emit('next')" :islast="islast"></article-step>
    <task-step v-if="type === 'task'" :data="data" @next="$emit('next')" :islast="islast" :key="taskkey"></task-step>
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
    taskkey: Number
  },
  emits: ['nextmulti', 'prevmulti']
}
</script>

<style lang="scss" scoped>
  .container {
    background-color: #DEDEDE;
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
      img {
        cursor: pointer;
        transition: 100ms all;
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
