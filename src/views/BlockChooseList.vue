<template>
  <q-button-back></q-button-back>
  <DarkModeToggle></DarkModeToggle>
  <div class="block-choose-list">
    <h2>Выберите блок</h2>
    <ul>
      <block-list-element
        :key="index"
        v-for="(block, index) in blocks"
        :number="index + 1"
        :name="block.name"
        :description="block.description"
        :topiclist="block.topics"
        :topicname="block.pageName"
      ></block-list-element>
    </ul>
  </div>
</template>

<script>
import BlockListElement from '../components/BlockListElement'
import DarkModeToggle from '../components/DarkModeToggle'
import QButtonBack from '../components/QButtonBack'
export default {
  name: 'BlockChooseList',
  components: { QButtonBack, BlockListElement, DarkModeToggle },
  data () {
    return {
      blocks: [
        ...Object.keys(this.$store.state).map(element => this.$store.state[element])
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @use 'sass:math';
  @import "../scss/variables";

  .block-choose-list {
    padding: $pages-vertical-padding $pages-horizontal-padding;
    background-color: $learn-color;
    flex: 1;
    h2 {
      text-align: center;
      color: #fff;
      font-weight: 600;
      user-select: none;
      font-size: 4em;
    }

    @media (max-width: 600px) {
      h2 {
        font-size: 8em;
      }
    }

    ul {
      margin-top: 3em;
      max-width: 70em;
      margin-left: auto;
      margin-right: auto;
      li + li {
        margin-top: 2em;
      }
    }
  }

  @media (max-width: 900px) {
    .block-choose-list {
      padding: math.div($pages-vertical-padding, 3) math.div($pages-horizontal-padding, 3);
    }
  }
</style>
