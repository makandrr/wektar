<template>
  <div class="main">
    <img src="../assets/logo.svg" alt="Quarta" class="logo">
    <choose-card @clicked="goToLearning" icon="learn" type="learn">Учиться</choose-card>
    <strong class="or-label">ИЛИ</strong>
    <choose-card icon="practice" type="practice" sublabel="[В РАЗРАБОТКЕ]" disabled="true">Практиковаться</choose-card>
  </div>
  <span class="version">0.0.1a alpha1</span>
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
    background: linear-gradient(256.29deg, $practice-color 4.76%, $learn-color 94.34%);
    flex: 1;
    padding: $vertical-padding $horizontal-padding;
    .logo {
      width: 200px;
    }
    user-select: none;
  }

  .version {
    position: fixed;
    right: 0;
    bottom: 0;
    color: #fff;
    font-size: 1.2em;
    border-top: 3px dashed #ff8b8b;
    border-left: 3px dashed #ff8b8b;
    padding: .3em;
    user-select: none;
  }

  .or-label {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    font-size: 50px;
    color: #fff;
  }

  @media(max-width: 1158px), (max-height: 695px) {
    .main {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-image: linear-gradient(0deg, $practice-color 4.76%, $learn-color 94.34%);
      .logo {
        margin-bottom: 50px;
      }
    }
    .or-label {
      position: static;
      transform: none;
      margin: 20px 0;
    }
  }
</style>
