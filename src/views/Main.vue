<template>
  <div class="main">
    <img src="../assets/logo.svg" alt="Quarta" class="logo">
    <choose-card @clicked="goToLearning" icon="learn" type="learn">Учиться</choose-card>
    <strong class="or-label">ИЛИ</strong>
    <choose-card icon="practice" type="practice" sublabel="[В РАЗРАБОТКЕ]" disabled="true">Практиковаться</choose-card>
    <span class="version">0.0.2 alpha1</span>
  </div>
</template>

<script>
import ChooseCard from '../components/ChooseCard'

export default {
  name: 'Main',
  components: {
    ChooseCard
  },
  methods: {
    goToLearning () {
      this.$router.push('blocks')
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../scss/_variables.scss';

  .main {
    min-height: 100%;
    min-height: 100vh;
    background: linear-gradient(256.29deg, $practice-color 4.76%, $learn-color 94.34%);
    padding: $vertical-padding $horizontal-padding;
    .logo {
      width: 15em;
    }
    user-select: none;
  }

  .version {
    position: fixed;
    right: 0;
    bottom: 0;
    color: #fff;
    font-size: 1.2em;
    border-top: 3px solid #ba8787;
    border-left: 3px solid #ba8787;
    padding: .3em;
    user-select: none;
    background-color: rgba(0,0,0,0.5);
  }

  .or-label {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    font-size: 5em;
    color: #fff;
  }

  @media (max-width: 850px) {
    .or-label {
      font-size: 10em;
    }
    .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-image: linear-gradient(0deg, $practice-color 4.76%, $learn-color 94.34%);
      padding: $vertical-padding 0;
      .logo {
        margin-bottom: 10em;
        width: 35em;
      }
    }
    .or-label {
      position: static;
      transform: none;
      margin: .6em 0;
    }
    .version {
      position: static;
      font-size: 5em;
      border: 3px solid #ba8787;
      padding: .3em;
      user-select: none;
      margin-top: 1em;
    }
  }
</style>
