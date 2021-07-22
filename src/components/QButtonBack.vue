<template>
  <div @click="goBack"><img src="../assets/icons/back.svg" alt="Назад"></div>
</template>

<script>
export default {
  methods: {
    goBack () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
  div {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    border: none;
    background-color: #2db153;
    width: 4em;
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    transition: 300ms all;

    &:hover {
      background-color: #acb43c;
    }

    img {
      width: 8em;
      color: #fff;
    }
  }

  @media (max-width: 900px) {
    div {
      width: 10em;
      height: 10em;
    }
  }
</style>
