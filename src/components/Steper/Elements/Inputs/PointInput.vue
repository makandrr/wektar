<template>
  <div>
    <img src="../../../../assets/realLineArrow.png" style="display: none" id="realLineArrow" alt="">
    <canvas :id="hashId" width="700" height="100"></canvas>
  </div>
</template>

<script>
import paper from 'paper'

export default {
  props: {
    data: Object,
    tdata: Object
  },
  data () {
    return {
      hashId: `canvas${Math.random()}`
    }
  },
  mounted () {
    paper.install(window)
    const canvas = document.getElementById(this.hashId)
    paper.setup(canvas)

    const canvasWidth = 700
    const canvasHeight = 100
    const lineLength = 600
    const lineWidth = 4
    const leftPadding = canvasWidth / 2 - lineLength / 2
    const topPadding = canvasHeight / 2 - lineWidth / 2
    const firstNumber = this.data.start || -5
    const dashAmount = this.data.dashCount || 11
    const spacingBetweenDashs = lineLength / (dashAmount + 1)
    const dashHeight = 10
    const step = this.data.step || 1
    const line = paper.Path.Rectangle(leftPadding, topPadding, lineLength, lineWidth)
    line.fillColor = '#7085cf'
    let lastShowedCircle
    for (let i = 1; i <= dashAmount; i++) {
      const newDash = paper.Path.Rectangle(leftPadding + spacingBetweenDashs * i, topPadding - dashHeight / 3, 1, dashHeight)
      const text = new paper.PointText(new paper.Point(leftPadding + spacingBetweenDashs * i, topPadding - dashHeight / 3))
      text.content = firstNumber + ((i - 1) * step)
      text.position = new paper.Point(newDash.position.x, newDash.position.y + 15)
      text.style = {
        fontSize: 14,
        fillColor: '#444'
      }
      const clickableCircle = paper.Path.Circle(new paper.Point(leftPadding + spacingBetweenDashs * i + 2, topPadding - (dashHeight - 15) / 3), 10)
      const showCircle = paper.Path.Circle(new paper.Point(leftPadding + spacingBetweenDashs * i, topPadding - (dashHeight - 15) / 3), 5)
      clickableCircle.fillColor = '#ffffff01'
      clickableCircle.onClick = () => {
        if (lastShowedCircle) lastShowedCircle.fillColor = '#0000'
        showCircle.fillColor = '#0a5415'
        lastShowedCircle = showCircle
      }
      newDash.fillColor = '#000'
    }
    const arrow = new paper.Raster('realLineArrow')
    arrow.position = paper.view.center
    arrow.scale(0.5)
    arrow.position.x = canvasWidth - leftPadding
    arrow.position.y -= 2
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
}
canvas {
  width: 90%;
}
</style>
