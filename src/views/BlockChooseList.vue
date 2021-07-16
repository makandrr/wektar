<template>
  <div class="block-choose-list">
    <q-button-back></q-button-back>
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
import QButtonBack from '../components/QButtonBack'
import BlockListElement from '../components/BlockListElement'
export default {
  name: 'BlockChooseList',
  components: { BlockListElement, QButtonBack },
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
  @import "../scss/variables";

  .block-choose-list {
    padding: $pages-vertical-padding $pages-horizontal-padding;
    background-color: $learn-color;
    flex: 1;
    h2 {
      text-align: center;
      color: #fff;
      font-weight: 600;
      font-size: 3em;
      user-select: none;
    }

    @media (max-width: 900px) {
      h2 {
        font-size: 1.7em;
      }
    }
    ul {
      margin-top: 3em;
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
      li + li {
        margin-top: 2em;
      }
    }
  }

  @media (max-width: 900px) {
    .block-choose-list {
      padding: $pages-vertical-padding / 3 $pages-horizontal-padding / 3;
    }
  }
</style>
