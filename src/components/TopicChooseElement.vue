<template>
  <li class="elem topic-choose-element">
    <div class="preview">
      <h3><span class="number">ТЕМА {{ number }}</span> <span class="name">{{ name }}</span></h3>
      <div class="open" @click="$router.push(`/${blockname}/${number}`)"><img src="../assets/icons/play.svg" alt="Открыть"></div>
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
  props: ['number', 'name', 'blockname'],
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/_variables.scss';
li.elem {
  list-style-type: none;
  background-color: $white-soft-color;
  padding: 1em 1.8em;
  h3 {
    font-size: 2em;
    user-select: none;

    .name {
      font-size: 0.7em;
      margin-left: .4em;
      font-weight: 600;
      color: #6B6B6B;
    }
  }
  .preview {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    border: .3em solid #136d11;
    img {
      width: 2em;
    }
    &:hover {
      background-color: #1faa1d;
      border: 5px solid #10750e;
    }
    span {
      font-size: 1.8em;
    }
  }
}

@media (max-width: 900px) {
  li.elem {
    font-size: 2em;
  }
}
</style>
