<template>
  <q-button-back></q-button-back>
  <dark-mode-toggle></dark-mode-toggle>
  <shortcuts-show-toggle></shortcuts-show-toggle>
  <div class="topic-choose-list">
    <h2>{{ getBlock().name }}</h2>
    <ul>
      <topic-choose-element :blockname="getBlock().pageName" :key="index" v-for="(topic, index) in topics" :number="index" :name="topic.name"></topic-choose-element>
    </ul>
  </div>
</template>

<script>
import TopicChooseElement from '../components/TopicChooseElement'
import DarkModeToggle from '../components/DarkModeToggle'
import QButtonBack from '../components/QButtonBack'
import ShortcutsShowToggle from '../components/ShortcutsShowToggle'
export default {
  name: 'TopicChoose',
  components: { QButtonBack, TopicChooseElement, DarkModeToggle, ShortcutsShowToggle },
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
@use 'sass:math';
@import "../scss/variables";

.topic-choose-list {
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
    max-width: 70em;
    min-width: 50em;
    margin-left: auto;
    margin-right: auto;
    li + li {
      margin-top: 2em;
    }
  }
}

@media (max-width: 900px) {
  .topic-choose-list {
    padding: math.div($pages-vertical-padding, 3) math.div($pages-horizontal-padding, 3);
  }
}
</style>
