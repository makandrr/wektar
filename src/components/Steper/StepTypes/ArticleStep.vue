<template>
  <div>
    <component v-for="(element, index) in data.content" :key="index" :is="element.type" :data="element.content"></component>
    <div class="buttonContainer">
      <q-button-icon :icon="rightIcon" @click="$emit('next')" shortcut="1" v-if="!islast">Далее</q-button-icon>
    </div>
  </div>
</template>

<script>
import MainTitle from '../Elements/MainTitle'
import SubTitle from '../Elements/SubTitle'
import Text from '../Elements/Text'
import List from '../Elements/List'
import Image from '../Elements/Image'
import rightIcon from '../../../assets/icons/right.svg'
import QButtonIcon from '../../QButtonIcon'
import Margin from '../Elements/Margin'
import RealLineOutput from '../Elements/Outputs/RealLineOutput'
import IntervalOutput from '../Elements/Outputs/IntervalOutput'
import MiniQuestion from '../Elements/Outputs/MiniQuestion'

export default {
  components: { MainTitle, RealLineOutput, Margin, SubTitle, Text, List, Image, QButtonIcon, IntervalOutput, MiniQuestion },
  data () {
    return {
      rightIcon
    }
  },
  props: ['data', 'islast'],
  emits: ['next'],
  mounted () {
    const mj = window.MathJax
    window.MathJax.Hub.Queue(['Typeset', mj.Hub])
  }
}
</script>

<style scoped lang="scss">
  .buttonContainer {
    display: flex;
    justify-content: flex-end;
    margin-top: 3em;
  }
</style>
