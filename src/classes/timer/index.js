'use strict'

module.exports = class Timer {
  constructor (options = {}) {
    this.seconds = options.time * 100
    this.percent = this.seconds / 100

    this.onTimeChange = options.onTimeChange || null
    this.onFinish = options.onFinish || null

    setTimeout((() => this.timeCount()), 1000)
  }

  timeCount() {
    if (this.percent < 100) {
      this.percent++
      if (typeof this.onTimeChange === 'function') {
        this.onTimeChange(this.percent)
      }
      setTimeout(() => this.timeCount(), 1000)
    } else {
      if (typeof this.onFinish === 'function') {
        this.onFinish()
      }
    }
  }
}

// const t = new Timer({
//   time: 60000,
//   onTimeChange: function (percent) {
//
//   },
//   onFinish: function () {
//
//   }
// })
