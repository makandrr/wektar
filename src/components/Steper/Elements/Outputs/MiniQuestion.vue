<template>
  <div class="mini-question">
    <h1>Мини-задача</h1>
    <div class="container">
      <p class="question">{{ data.question }}</p>
      <p class="answer" v-if="clicked">{{ data.answer }}</p>
      <q-button color="green" @click="clicked = true" v-if="!clicked">Показать ответ</q-button>
    </div>
  </div>
</template>

<script>
import QButton from '../../../QButton'

export default {
  components: { QButton },
  props: {
    data: Object
  },
  data () {
    return {
      clicked: false
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../../../scss/variables";
  @import "../../../../scss/mixins";
  h1 {
    font-size: 1em;
    font-weight: 500;
    color: #eee;
    background-color: $question-bg;
    text-align: center;
    padding: .4em 0;
  }
  .container {
    background-color: transparent;
    border: .3em solid $question-bg;
    border-top: none;
    padding: .7em;
    .question {
      font-size: 1.6em;
      color: #222;
      font-weight: bold;
    }
    .answer {
      color: #222;
      font-size: 1.3em;
      margin-top: .2em;
    }
    button {
      margin-top: .5em;
    }
  }
</style>
