<template>
  <div>
    <component
      :tdata="{ ...getData() }"
      v-for="(element, index) in data.content"
      :key="index" :is="element.type"
      :data="element.content"
      @interact="checkClicked = false"
      @set-data-key="setTaskDataKey"
    ></component>
    <p v-if="showAnswerClicked && data.correctAnswer !== 'object'">
      {{ typeof data.correctAnswer !== 'object' ? data.correctAnswer : '' }}
    </p>
    <div v-if="Array.isArray(data.correctAnswer) && showAnswerClicked">
      <component
        :tdata="{ ...getData() }"
        v-for="(element, index) in data.correctAnswer"
        :key="index"
        :is="element.type"
        :data="element.content"
        @interact="checkClicked = false"
        @set-data-key="setTaskDataKey"
      ></component>
    </div>
    <div class="bottom">
      <q-button @click="checkClicked = !data.correctAnswer; showAnswerClicked = !showAnswerClicked; checkCorrect()" color="blue">{{ data.correctAnswer ? (showAnswerClicked ? 'Скрыть ответ' : 'Показать ответ') : 'Проверить' }}</q-button>
      <span :class="!isCorrect ? 'wrong' : ''" v-show="checkClicked">{{ isCorrect ? 'Верно' : 'Неверно' }}</span>
      <q-button-icon :icon="iconRight" v-if="!islast" @click="$emit('next')">Далее</q-button-icon>
    </div>
  </div>
</template>

<script>
import MainTitle from '../Elements/MainTitle'
import SubTitle from '../Elements/SubTitle'
import Text from '../Elements/Text'
import List from '../Elements/List'
import Image from '../Elements/Image'
import NumberInput from '../Elements/Inputs/NumberInput'
import ValueDisplay from '../Elements/Outputs/ValueDisplay'
import QButton from '../../QButton'
import QButtonIcon from '../../QButtonIcon'
import iconRight from '../../../assets/icons/right.svg'
import TrueFalseStatement from '../Elements/Inputs/TrueFalseStatement'
import SelectInput from '../Elements/Inputs/SelectInput'
import ComparisonSignInput from '../Elements/Inputs/ComparisonSignInput'
import FractionInput from '../Elements/Inputs/FractionInput'
import StringInput from '../Elements/Inputs/StringInput'
import Margin from '../Elements/Margin'
import RealLineOutput from '../Elements/Outputs/RealLineOutput'
import IntervalOutput from '../Elements/Outputs/IntervalOutput'
import PointInput from '../Elements/Inputs/PointInput'

// TODO: Stop it on load script MathJax
setInterval(() => {
  const mj = window.MathJax
  window.MathJax.Hub.Queue(['Typeset', mj.Hub])
}, 500)

export default {
  components: { QButton, Margin, IntervalOutput, PointInput, RealLineOutput, FractionInput, StringInput, SelectInput, ComparisonSignInput, MainTitle, SubTitle, Text, List, Image, NumberInput, ValueDisplay, QButtonIcon, TrueFalseStatement },
  props: ['data', 'islast'],
  emits: ['next'],
  data () {
    return {
      ...this.data.data,
      iconRight: iconRight,
      checkClicked: false,
      showAnswerClicked: false,
      isCorrect: false
    }
  },
  methods: {
    getData () {
      return { ...this.$data }
    },
    setTaskDataKey (changeData) {
      this.$data[changeData.key] = changeData.value
    },
    checkCorrect () {
      for (const key of Object.keys(this.$data)) {
        if (this.data.correctData[key] || this.data.correctData[key] === false || this.data.correctData[key] === 0) {
          if (typeof this.data.correctData[key] === 'object') {
            if (!this.data.correctData[key].test(this.$data[key])) {
              console.log('regexp wrong!')
              this.isCorrect = false
              return false
            }
          } else {
            if (this.$data[key] !== this.data.correctData[key]) {
              console.log(this.$data[key])
              console.log(this.data.correctData[key])
              console.log('correctanswer wrong', `${this.$data[key]} !== ${this.data.correctData[key]}`)
              this.isCorrect = false
              return false
            }
          }
        }
      }
      console.log('isCorrect')
      this.isCorrect = true
      return true
    }
  },
  mounted () {
    const mj = window.MathJax
    window.MathJax.Hub.Queue(['Typeset', mj.Hub])
  }
}
</script>

<style scoped lang="scss">
  @import '../../../scss/variables';
  .bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 2em;
    span {
      font-size: 2em;
      font-weight: 600;
      color: #28A63C;
      user-select: none;
      &.wrong {
        color: #BA0021;
      }
    }
  }
</style>
