<template>
  <div>
    <img src="../../../../assets/realLineArrow.png" style="display: none" id="realLineArrow" alt="">
    <canvas class="canvas" :id="hashId" width="700" height="100"></canvas>
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
    canvas.style.width = '100%'
    canvas.style.height = canvas.getBoundingClientRect().width / 7 + 'px'
    const canvasWidth = 700
    const canvasHeight = 100
    const lineLength = 600
    const lineWidth = 4
    const leftPadding = canvasWidth / 2 - lineLength / 2
    const topPadding = canvasHeight / 2 - lineWidth / 2
    const interval = this.data.interval || [-1, 1]
    const infinitySides = this.data.infinitySides || [false, false]
    const intervalLabels = [isFinite(interval[0]) ? (this.data.startLabel ? this.data.startLabel : interval[0]) : '', isFinite(interval[1]) ? (this.data.endLabel ? this.data.endLabel : interval[1]) : '']
    let firstNumber
    let dashAmount
    const excluding = this.data.exclude || [false, false]
    let labelsColor = '#333'
    if (document.body.classList.contains('dark')) {
      labelsColor = '#eee'
    }

    if (Math.abs(interval[0]) === Math.abs(interval[1])) {
      firstNumber = interval[0] - Math.round(Math.abs(interval[0]) * 2 / 5)
      dashAmount = Math.abs(firstNumber) * 2 + 1
    } else if (Math.abs(interval[0]) > Math.abs(interval[1])) {
      firstNumber = interval[0] - Math.round(Math.abs(interval[0]) * 2 / 5)
      dashAmount = Math.abs(firstNumber) * 2 + 1
    } else if (Math.abs(interval[1]) > Math.abs(interval[0])) {
      firstNumber = -interval[1] - Math.round(Math.abs(interval[1]) * 2 / 5)
      dashAmount = Math.abs(firstNumber) * 2 + 1
    }
    firstNumber = this.data.firstNumberOverload ? this.data.firstNumberOverload : firstNumber
    dashAmount = this.data.dashAmountOverload ? this.data.dashAmountOverload : dashAmount

    const spacingBetweenDashs = lineLength / (dashAmount + 1)
    const dashHeight = 10
    const step = this.data.step || 1
    const line = paper.Path.Rectangle(leftPadding, topPadding, lineLength, lineWidth)
    line.fillColor = '#85cf70'
    for (let i = 1; i <= dashAmount; i++) {
      if (firstNumber + ((i - 1) * step) === 0) {
        const newDash = paper.Path.Rectangle(leftPadding + spacingBetweenDashs * i, topPadding - dashHeight / 3, 1, dashHeight)
        const text = new paper.PointText(new paper.Point(leftPadding + spacingBetweenDashs * i, topPadding - dashHeight / 3))
        text.content = firstNumber + ((i - 1) * step)
        text.position = new paper.Point(newDash.position.x, newDash.position.y + 15)
        text.style = {
          fontSize: 14,
          fillColor: labelsColor
        }
        newDash.fillColor = '#000'
      }
    }
    let circle1
    let circle2
    let d1point = ((Math.abs(interval[0] - (firstNumber - step))) / step) * spacingBetweenDashs + leftPadding
    if (infinitySides[0]) {
      d1point = ((Math.abs(firstNumber - (firstNumber - step))) / step) * spacingBetweenDashs + leftPadding - spacingBetweenDashs
    }
    let d2point = ((Math.abs(interval[1] - (firstNumber - step))) / step) * spacingBetweenDashs + leftPadding
    if (infinitySides[1]) {
      d2point = ((Math.abs(-firstNumber - (firstNumber - step))) / step) * spacingBetweenDashs + leftPadding + spacingBetweenDashs
    }
    const intervalLine = new paper.Path.Rectangle(d1point, topPadding, d2point - d1point, 4)
    intervalLine.fillColor = '#6e00ec'
    if (!infinitySides[0]) {
      circle1 = new paper.Path.Circle(new paper.Point(d1point, topPadding + 2), 4)
      if (excluding[0]) {
        circle1.fillColor = '#fff'
        circle1.strokeColor = '#333'
      } else {
        circle1.fillColor = '#1b9414'
      }
      const label1 = new paper.PointText(new paper.Point(circle1.position.x, circle1.position.y))
      label1.content = intervalLabels[0]
      label1.position = new paper.Point(circle1.position.x - (label1.content.length * 7) / 20, circle1.position.y - 13)
      label1.fillColor = labelsColor
    }
    if (!infinitySides[1]) {
      circle2 = new paper.Path.Circle(new paper.Point(d2point, topPadding + 2), 4)
      if (excluding[1]) {
        circle2.fillColor = '#fff'
        circle2.strokeColor = '#333'
      } else {
        circle2.fillColor = '#1b9414'
      }
      const label2 = new paper.PointText(new paper.Point(circle2.position.x, circle2.position.y))
      label2.content = intervalLabels[1]
      label2.position = new paper.Point(circle2.position.x - (label2.content.length * 7) / 20, circle2.position.y - 13)
      label2.fillColor = labelsColor
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
