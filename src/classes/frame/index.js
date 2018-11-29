'use strict'

class FrameProgress {
  constructor(options = {}) {
    this.hours = options.hours*3600
    this.minutes = options.minutes*60
    this.seconds = options.seconds
    this.miliseconds = (this.hours + this.minutes + this.seconds)*1000
    this.songavg = options.miliseconds/100
    this.percent = 0
  }

  progress(callback) {
    const frame = () => {
      if (this.percent >= 100) {
        clearInterval(timerCount)
      } else {
        this.percent += this.songavg
        if (typeof callback === 'function') {
          callback()
        }
      }
      return this.percent
    }
    let timerCount = setInterval(frame, this.miliseconds)
  }
}

module.exports = FrameProgress
