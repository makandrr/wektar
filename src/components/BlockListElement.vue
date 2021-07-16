<template>
  <li class="elem">
    <div class="preview">
      <h3><span class="number">БЛОК {{ number }}</span> <span class="name">{{ name }}</span></h3>
      <div class="right">
        <div class="open" @click="$router.push(topicname)"><img src="../assets/icons/play.svg" alt="Открыть"></div>
        <img class="expand" src="../assets/icons/leftBlack.svg" alt="Развернуть" @click="toggle" :style="{transform: isOpened ? 'rotate(90deg)' : 'rotate(-90deg)'}">
      </div>
    </div>
    <div class="full" v-if="isOpened">
      <p class="description">
        {{ description }}
      </p>
      <ul>
        <li :key="index" v-for="(topicName, index) in topiclist">{{ topicName }}</li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  data () {
    return {
      isOpened: false
    }
  },
  props: ['number', 'name', 'description', 'topiclist', 'topicname'],
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
    }
  }
}
</script>

<style scoped lang="scss">
  li.elem {
    list-style-type: none;
    font-size: 1rem;
    background-color: #DEDEDE;
    padding: 1.4em 1.8em;
    h3 {
      font-size: 2em;
      user-select: none;

      .name {
        font-size: 0.9em;
        margin-left: .4em;
        font-weight: 600;
        color: #6B6B6B;
      }
    }
    .preview {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .right {
        display: flex;
        align-items: center;
      }
    }

    .open {
      background-color: #1C981A;
      font-size: 1.1em;
      width: 3em;
      height: 3em;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 200ms all;
      user-select: none;
      border: 5px solid #1a7318;
      img {
        width: 2em;
      }
      &:hover {
        background-color: #1faa1d;
        border: 5px solid #1a8517;
      }
      span {
        font-size: 1.8em;
      }
    }

    .expand {
      margin-left: .15em;
      width: 3.7em;
      transition: 200ms all;
      cursor: default;
      user-select: none;
      fill: black !important;
      &:hover {
        opacity: 0.7;
      }
    }

    .full {
      margin-top: 2em;

      p {
        line-height: 1.4;
        font-size: 1.2em;
      }

      ul {
        list-style-type: none;
        margin-top: 1.5em;
        li + li {
          margin-top: .3em;
        }
      }
    }
  }

  @media (max-width: 900px) {
    li.elem {
      font-size: 0.65rem;
    }
  }
</style>
