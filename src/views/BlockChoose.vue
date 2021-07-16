<template>
  <q-button-back></q-button-back>
  <div class="block-choose">
    <h2>Выберите блок</h2>
    <div class="blocks" ref="blocksContainer" :style="{marginLeft: containerMarginLeft}">
      <blocks-choose-block
        v-for="(block, index) in blocks"
        :number="index + 1"
        :name="block.name"
        :description="block.description"
        :topiclist="block.topics"
        :ref="index === 0 ? 'block' : ''"
        :key="index"
        :blockname="block.pageName"
      ></blocks-choose-block>
    </div>
    <div class="center">
      <div class="slider-control">
<!--        <span class="material-icons" @click="prevBlock" :style="{opacity: canPrev ? 1 : 0.2, cursor: !canPrev ? 'default' : 'pointer' }">chevron_left</span>-->
        <img src="../assets/icons/left.svg" alt="Назад" @click="prevBlock" :style="{opacity: canPrev ? 1 : 0.2, cursor: !canPrev ? 'default' : 'pointer' }">
        <q-button color="orange"  @click="$router.push('blocks-list')">Открыть список</q-button>
<!--        <span class="material-icons" @click="nextBlock" :style="{opacity: canNext ? 1 : 0.2, cursor: !canNext ? 'default' : 'pointer' }">chevron_right</span>-->
        <img class="right" src="../assets/icons/left.svg" alt="Вперёд" @click="nextBlock" :style="{opacity: canNext ? 1 : 0.2, cursor: !canNext ? 'default' : 'pointer' }">
      </div>
    </div>
  </div>
  <q-button color="glow" class="howtolearnbutton" v-if="false">Как учиться?</q-button>
</template>

<script>
import BlocksChooseBlock from '../components/BlocksChooseBlock'
export default {
  components: { BlocksChooseBlock },
  mounted () {
    document.documentElement.classList.add('overflow-hide')

    window.resizeHandler = () => {
      const blocksContainer = this.$refs.blocksContainer
      const block = this.$refs.block.$data.blockContainer.getBoundingClientRect()
      this.blockWidth = block.width
      this.firstBlockContainerMarginLeft = parseInt((window.innerWidth - block.width) / 2 + 'px')
      if (blocksContainer.children[1]) {
        this.distanceBetweenBlocks = parseInt(window.getComputedStyle(blocksContainer.children[1]).marginLeft)
      }
      if (window.innerWidth <= 720) {
        this.$router.replace('blocks-list')
      }
    }

    window.resizeHandler()

    window.addEventListener('resize', window.resizeHandler)
  },
  unmounted () {
    document.documentElement.classList.remove('overflow-hide')

    window.removeEventListener('resize', window.resizeHandler)
  },
  data () {
    return {
      blocks: [
        ...Object.keys(this.$store.state).map(element => this.$store.state[element])
      ],
      firstBlockContainerMarginLeft: 1,
      currentBlockIndex: 0,
      distanceBetweenBlocks: 80,
      blockWidth: 300
    }
  },
  computed: {
    containerMarginLeft () {
      return this.firstBlockContainerMarginLeft - (this.currentBlockIndex * (this.blockWidth + this.distanceBetweenBlocks)) + 'px'
    },
    canPrev () {
      return this.currentBlockIndex > 0
    },
    canNext () {
      return this.currentBlockIndex !== this.blocks.length - 1
    }
  },
  methods: {
    nextBlock () {
      if (this.canNext) {
        this.currentBlockIndex++
      }
    },
    prevBlock () {
      if (this.canPrev) {
        this.currentBlockIndex--
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../scss/_variables.scss';
  .block-choose {
    flex: 1;
    background-color: $learn-color;
    padding: $pages-vertical-padding 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h2 {
    text-align: center;
    color: #fff;
    font-weight: 600;
    font-size: 3em;
    user-select: none;
  }

  @media (max-width: 850px) {
    h2 {
      font-size: 2.5em;
    }
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 2em;
    }
  }

  .blocks {
    display: flex;
    flex-shrink: 0;
    margin-top: 30px;
    transition: 300ms all;
    //position: absolute;
    & > * {
      flex-shrink: 0;
    }
    & > * + * {
      margin-left: 80px;
    }
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
  .slider-control {
    display: flex;
    align-items: center;
    button {
      margin: 0 60px;
    }
    img {
      width: 50px;
      cursor: pointer;
      transition: 100ms all;
      &.right {
        transform: rotate(180deg);
      }
      &.right:active {
        transform: rotate(180deg) scale(0.9);
        opacity: 0.4;
      }
      &:active {
        transform: scale(0.9);
        opacity: 0.4;
      }
    }
  }

  .howtolearnbutton {
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>
