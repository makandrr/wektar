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
    let lineColor = '#7085cf'
    let dashColor = '#000'
    let dashLabelColor = '#444'
    let dotColor = '#1b9414'
    let dotLabelColor = '#193d1b'
    if (document.body.classList.contains('dark')) {
      dashLabelColor = '#fff'
      dashColor = '#fff'
      lineColor = '#9daeea'
      dotColor = '#28fd1e'
      dotLabelColor = '#75e77b'
    }
    canvas.style.width = '100%'
    window.onresize = () => {
      canvas.style.height = canvas.getBoundingClientRect().width / 7 + 'px'
    }
    window.onresize()
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
    const pointedValues = this.data.values || []
    line.fillColor = lineColor
    for (let i = 1; i <= dashAmount; i++) {
      const newDash = paper.Path.Rectangle(leftPadding + spacingBetweenDashs * i, topPadding - dashHeight / 3, 1, dashHeight)
      const text = new paper.PointText(new paper.Point(leftPadding + spacingBetweenDashs * i, topPadding - dashHeight / 3))
      text.content = firstNumber + ((i - 1) * step)
      text.position = new paper.Point(newDash.position.x, newDash.position.y + 15)
      text.style = {
        fontSize: 14,
        fillColor: dashLabelColor
      }
      newDash.fillColor = dashColor
    }
    for (const value of pointedValues) {
      console.log('value')
      const d = ((Math.abs(value.value - (firstNumber - step))) / step) * spacingBetweenDashs + leftPadding
      const circle = new paper.Path.Circle(new paper.Point(d, topPadding + 2), 4)
      circle.fillColor = dotColor
      const label = new paper.PointText(new paper.Point(circle.position.x, circle.position.y))
      label.content = value.label
      label.position = new paper.Point(circle.position.x - (label.content.length * 7) / 20, circle.position.y - 13)
      label.fillColor = dotLabelColor
    }
    const arrow = new paper.Raster('realLineArrow')
    arrow.position = paper.view.center
    arrow.scale(0.5)
    arrow.position.x = canvasWidth - leftPadding
  }
}
</script>

<style scoped>
  div {
    display: flex;
    justify-content: center;
  }
</style>
