<template>
  <div class="block block-choose-block" ref="blockContainer">
    <h3><span class="id">БЛОК {{ number }}</span> <span class="name">{{ name }}</span></h3>
    <p class="description">{{ description }}</p>
    <ul class="topic-list">
      <li :key="index" v-for="(topic, index) in parsedTopicList">{{ topic }}</li>
    </ul>
    <div class="center-button">
      <q-button color="green" @click="$router.push(blockname)">Открыть</q-button>
    </div>
  </div>
</template>

<script>
import QButton from './QButton'
export default {
  components: { QButton },
  props: ['number', 'name', 'description', 'topiclist', 'blockname'],
  data () {
    return {
      blockContainer: 0
    }
  },
  mounted () {
    this.blockContainer = this.$refs.blockContainer
  },
  computed: {
    parsedTopicList () {
      const topicList = this.topiclist
      const parsedList = []
      for (let i = 0; i < 5; i++) {
        if (topicList[i]) {
          parsedList.push((i + 1) + '. ' + topicList[i])
        }
      }
      if (parsedList.length < topicList.length) {
        parsedList.push('И так далее...')
      }

      return parsedList
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../scss/variables';
  .block {
    background-color: $white-soft-color;
    padding: 2em;
    width: 38.5em;
    height: 25.5em;
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
    h3 {
      user-select: none;
      .id {
        font-size: 2em;
        color: #2E2E2E;
      }
      .name {
        font-size: 1.4em;
        color: #6B6B6B;
        margin-left: .3em;
      }
    }
    .description {
      font-size: 0.8em;
      line-height: 1.3;
      margin-top: 1.6em;
    }
    .topic-list {
      list-style-type: none;
      font-size: 0.8em;
      margin-top: 1em;
    }
    .center-button {
      display: flex;
      justify-content: center;
      padding-top: 1em;
      margin-top: auto;
    }
  }
</style>
