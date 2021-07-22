<template>
  <div class="block-choose-list">
    <h2>{{ getBlock().name }}</h2>
    <ul>
      <topic-choose-element :blockname="getBlock().pageName" :key="index" v-for="(topic, index) in topics" :number="index" :name="topic.name"></topic-choose-element>
    </ul>
  </div>
</template>

<script>
import TopicChooseElement from '../components/TopicChooseElement'
export default {
  name: 'TopicChoose',
  components: { TopicChooseElement },
  data () {
    return {
      topics: this.getBlock().content
    }
  },
  methods: {
    getBlock () {
      if (this.$store.state[this.$route.params.blockName] !== undefined) {
        return this.$store.state[this.$route.params.blockName]
      } else {
        this.$router.push('/blocks')
        return this.$store.state.basics
      }
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
    font-size: 4em;
    user-select: none;
  }
  @media (max-width: 600px) {
    h2 {
      font-size: 8em;
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
