<template>
  <div class="fs" @click="toggleTheme">
    <img :src="darkModeIcon" alt="Включить тёмную тему" v-if="!isDark">
    <img :src="lightModeIcon" alt="Включить светлую тему" v-if="isDark">
  </div>
</template>

<script>
import darkModeIcon from '../assets/icons/darkmode.svg'
import lightModeIcon from '../assets/icons/lightmode.svg'
export default {
  data () {
    return {
      darkModeIcon,
      lightModeIcon,
      isDark: false
    }
  },
  mounted () {
    const dark = localStorage.getItem('dark')
    if (dark === '1') {
      document.body.classList.add('dark')
      this.isDark = true
    } else {
      localStorage.setItem('key', '0')
      document.body.classList.remove('dark')
      this.isDark = false
    }
  },
  methods: {
    toggleTheme () {
      this.isDark = !this.isDark
      document.body.classList.toggle('dark')
      document.body.classList.contains('dark') ? window.localStorage.setItem('dark', '1') : window.localStorage.setItem('dark', '0')
      this.$emit('click')
    }
  }
}
</script>

<style scoped lang="scss">
  img {
    width: 3em;
    transition: 150ms all;
    user-select: none;
    &:active {
      transform: scale(0.7);
      opacity: 0.3;
    }
  }
  div.fs {
    position: absolute;
    top: 1em;
    right: 1em;
  }
</style>
