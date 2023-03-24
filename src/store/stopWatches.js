import { defineStore } from 'pinia'

export const useStopWatchesStore = defineStore('stopwatch', {
  state: () => ({
    stopWatches: []
  }),
  actions: {
    add () {
      const stopWatch = {
        id: Math.floor(Math.random() * 100000),
        text: '00',
        seconds: 54,
        minutes: 0,
        hours: 10,
        isActive: false,
        isPause: false
      }
      this.stopWatches.push(stopWatch)
    },
    update (id) {
      this.stopWatches.forEach(stopWatch => {
        if (id === stopWatch.id) {
          stopWatch.seconds++
          if (stopWatch.seconds >= 60) {
            stopWatch.seconds = 0
            stopWatch.minutes++
            if (stopWatch.minutes >= 60) {
              stopWatch.minutes = 0
              stopWatch.hours++
            }
          }
          const seconds = stopWatch.seconds
          const minutes = stopWatch.minutes
          const hours = stopWatch.hours
          if (hours >= 1) {
            if (hours < 10) stopWatch.text = `0${hours}:${minutes}:${seconds}`
            if (hours < 10 && minutes < 10) stopWatch.text = `0${hours}:0${minutes}:${seconds}`
            if (hours < 10 && minutes < 10 && seconds < 10) stopWatch.text = `0${hours}:0${minutes}:0${seconds}`
            if (hours >= 10 && minutes >= 10 && seconds >= 10) stopWatch.text = `${hours}:${minutes}:${seconds}`
            if (hours >= 10 && minutes < 10 && seconds >= 10) stopWatch.text = `${hours}:0${minutes}:${seconds}`
            if (hours >= 10 && minutes >= 10 && seconds < 10) stopWatch.text = `${hours}:${minutes}:0${seconds}`
            if (hours >= 10 && minutes < 10 && seconds < 10) stopWatch.text = `${hours}:0${minutes}:0${seconds}`
          } else if (minutes >= 1) {
            if (minutes < 10) stopWatch.text = `0${minutes}:${seconds}`
            if (minutes < 10 && seconds < 10) stopWatch.text = `0${minutes}:0${seconds}`
            if (minutes >= 10 && seconds >= 10) stopWatch.text = `${minutes}:${seconds}`
            if (minutes >= 10 && seconds < 10) stopWatch.text = `${minutes}:0${seconds}`
          } else if (minutes < 1 && hours < 1) {
            if (seconds < 10) {
              stopWatch.text = `0${seconds}`
            } else {
              stopWatch.text = `${seconds}`
            }
          }
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
