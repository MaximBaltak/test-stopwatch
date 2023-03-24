import { defineStore } from 'pinia'

export const useStopWatchesStore = defineStore('stopwatch', {
  state: () => ({
    stopWatches: []
  }),
  actions: {
    add () {
      const stopWatch = {
        id: Math.floor(Math.random() * 100000),
        text: '0',
        seconds: 0,
        isActive: false,
        isPause: false
      }
      this.stopWatches.push(stopWatch)
    },
    update (id) {
      this.stopWatches.forEach(stopWatch => {
        if (id === stopWatch.id) {
          stopWatch.seconds++
          const data = new Date(stopWatch.seconds * 1000)
          const seconds = data.getSeconds()
          const minutes = data.getMinutes()
          const hours = data.getUTCHours()
          if (minutes < 1 && hours < 1) stopWatch.text = `${seconds}`
          if (hours < 1 && minutes >= 1) stopWatch.text = `${minutes}:${seconds}`
          if (minutes >= 1 && hours >= 1) stopWatch.text = `${hours}:${minutes}:${seconds}`
        }
      })
    },
    play (id) {
      this.stopWatches.forEach(stopWatch => {
        if (id === stopWatch.id) {
          stopWatch.isActive = true
          stopWatch.isPause = false
        }
      })
    },
    pause (id) {
      this.stopWatches.forEach(stopWatch => {
        if (id === stopWatch.id) {
          stopWatch.isPause = true
        }
      })
    },
    stop (id) {
      this.stopWatches.forEach(stopWatch => {
        if (id === stopWatch.id) {
          stopWatch.isActive = false
          stopWatch.isPause = false
          stopWatch.text = '0'
          stopWatch.seconds = 0
        }
      })
    }
  }
})
