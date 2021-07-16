<template>
  <div class="lesson">
    <q-button-back></q-button-back>
    <div class="stepList">
      <step-button
        v-for="(step, index) in steps"
        :key="index"
        :type="step.type"
        :active="index === currentStepId"
        :amount="step.multi ? step.content.length : ''"
        @click="switchToStep(index); generateNewTaskKey()"
      ></step-button>
    </div>
    <div class="step-container">
      <step
        @next="generalNextStep"
        :type="currentStep.type"
        :data="currentStep"
        :islast="isLastStep"
        :ismulti="isMultiStep"
        :multiamount="multiStepAmount"
        :multistepnumber="multiStepId + 1"
        :taskkey="reRenderTaskKey"
        @nextmulti="nextMultiStep()"
        @prevmulti="prevMultiStep()"
      ></step>
    </div>
  </div>
</template>

<script>
import QButtonBack from '../components/QButtonBack'
import StepButton from '../components/StepButton'
import Step from '../components/Steper/Step'

export default {
  components: { Step, StepButton, QButtonBack },
  data () {
    return {
      steps: this.getSteps().steps,
      currentStepId: 0,
      multiStepId: 0,
      reRenderTaskKey: 1
    }
  },
  mounted () {
    // console.log({ currentStepId: this.stepIdFromURL, multiStepId: this.multiStepIdFromURL })
    this.$router.replace({ query: { currentStepId: this.stepIdFromURL, multiStepId: this.multiStepIdFromURL } })
    this.currentStepId = this.stepIdFromURL
    this.multiStepId = this.multiStepIdFromURL
  },
  methods: {
    getSteps () {
      if (this.$store.state[this.$route.params.blockName] !== undefined) {
        if (this.$store.state[this.$route.params.blockName].content[this.$route.params.topicId] !== undefined) {
          return this.$store.state[this.$route.params.blockName].content[this.$route.params.topicId]
        } else {
          this.$router.replace(`/${this.$route.params.blockName}`)
          return this.$store.state.basics.content['1']
        }
      } else {
        this.$router.replace('/blocks')
        return this.$store.state.basics.content['1']
      }
    },
    generateNewTaskKey () {
      this.reRenderTaskKey = Math.random()
      console.log('generate')
    },
    nextMultiStep () {
      if (this.multiStepId + 1 !== this.multiStepAmount) {
        this.multiStepId++
        this.$router.replace({ query: { currentStepId: this.currentStepId, multiStepId: this.multiStepId } })
        this.generateNewTaskKey()
      }
    },
    prevMultiStep () {
      if (this.multiStepId !== 0) {
        this.multiStepId--
        this.$router.replace({ query: { currentStepId: this.currentStepId, multiStepId: this.multiStepId } })
        this.generateNewTaskKey()
      }
    },
    generalNextStep () {
      if (this.isMultiStep && this.multiStepId + 1 < this.multiStepAmount) {
        this.nextMultiStep()
        this.generateNewTaskKey()
      } else {
        this.currentStepId++
        this.generateNewTaskKey()
        this.multiStepId = 0
      }
      this.$router.replace({ query: { currentStepId: this.currentStepId, multiStepId: this.multiStepId } })
    },
    switchToStep (index) {
      this.currentStepId = index
      this.multiStepId = 0
      this.$router.replace({ query: { currentStepId: this.currentStepId, multiStepId: this.multiStepId } })
    }
  },
  computed: {
    currentStep () {
      if (this.steps[this.currentStepId].multi) {
        return this.steps[this.currentStepId].content[this.multiStepId]
      } else {
        return this.steps[this.currentStepId]
      }
    },
    isLastStep () {
      if (!this.isMultiStep) {
        return this.currentStepId === this.steps.length - 1
      } else {
        return (this.currentStepId === this.steps.length - 1) && (this.multiStepId + 1 === this.multiStepAmount)
      }
    },
    isMultiStep () {
      return !!this.steps[this.currentStepId].multi
    },
    multiStepAmount () {
      if (this.isMultiStep) {
        return this.steps[this.currentStepId].content.length
      } else {
        return Infinity
      }
    },
    stepIdFromURL () {
      if (!this.$route.query.currentStepId) {
        return 0
      } else {
        if (+this.$route.query.currentStepId >= this.steps.length) {
          return this.steps.length - 1
        }
        return +this.$route.query.currentStepId
      }
    },
    multiStepIdFromURL () {
      if (!this.$route.query.multiStepId) {
        return 0
      } else {
        if (+this.$route.query.multiStepId >= this.multiStepAmount) {
          if (this.multiStepAmount === 0) {
            return this.multiStepAmount
          } else {
            return this.multiStepAmount - 1
          }
        }
        return +this.$route.query.multiStepId
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../scss/variables";

  .lesson {
    flex: 1;
    background-color: $learn-color;
    padding: $pages-vertical-padding 20%;

    @media (max-width: 820px) {
      padding: $pages-vertical-padding 10%;
      font-size: 0.8em;
    }

    @media (max-width: 554px) {
      padding: $pages-vertical-padding 5%;
      font-size: 0.6em;
    }

    @media (max-width: 418px) {
      padding: $pages-vertical-padding 3%;
      font-size: 0.5em;
    }

    .stepList {
      display: flex;
      flex-wrap: wrap;
      & > * {
        flex-shrink: 0;
        margin-right: 8px;
        margin-top: 8px;
      }
    }

    .step-container {
      margin-top: 1.5em;
    }
  }
</style>
