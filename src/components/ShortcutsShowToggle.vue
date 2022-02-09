<template>
  <div class="fs" @click="toggleShortcuts">
    <img :src="shortcutsShowIcon" alt="Показать управление с клавиатуры" v-if="!isShow">
    <img :src="shortcutsHideIcon" alt="Скрыть управление с клавиатуры" v-if="isShow">
  </div>
</template>

<script>
import shortcutsShowIcon from '../assets/icons/shortcutsShow.svg'
import shortcutsHideIcon from '../assets/icons/shortcutsHide.svg'
export default {
  data () {
    return {
      shortcutsShowIcon,
      shortcutsHideIcon,
      isShow: false
    }
  },
  mounted () {
    const shortcuts = localStorage.getItem('shortcuts')
    if (shortcuts === '1') {
      document.body.classList.add('shortcuts')
      this.isShow = true
    } else {
      localStorage.setItem('shortcuts', '0')
      document.body.classList.remove('shortcuts')
      this.isShow = false
    }
  },
  methods: {
    toggleShortcuts () {
      this.isShow = !this.isShow
      document.body.classList.toggle('shortcuts')
      document.body.classList.contains('shortcuts') ? window.localStorage.setItem('shortcuts', '1') : window.localStorage.setItem('shortcuts', '0')
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
img {
  width: 3rem;
  transition: 150ms all;
  user-select: none;
  &:active {
    transform: scale(0.7);
    opacity: 0.3;
  }
  @media (max-width: 900px) {
    width: 6rem;
  }
  @media (max-width: 480px) {
    width: 9rem;
  }
}
div.fs {
  position: absolute;
  top: 1em;
  right: 4.5em;
}
</style>
