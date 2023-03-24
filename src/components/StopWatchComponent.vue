<template>
  <div class="card">
    <p class="card_text">{{ stopWatch.text }}</p>
    <hr class="card_line">
    <div class="card_actions">
      <PlayButtonComponent v-if="stopWatch.isPause || !stopWatch.isActive"
                           :is-active="stopWatch.isActive"
                           @play="toPlay"/>
      <PauseButtonComponent v-if="!stopWatch.isPause && stopWatch.isActive"
                            @pause="toPause"
                            :is-active="stopWatch.isActive"/>
      <StopButtonComponent @stop="toStop"
                           :is-active="stopWatch.isActive"/>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from '@vue/runtime-core'
import PauseButtonComponent from '@/components/Buttons/PauseButtonComponent'
import PlayButtonComponent from '@/components/Buttons/PlayButtonComponent'
import StopButtonComponent from '@/components/Buttons/StopButtonComponent'
import { useStopWatchesStore } from '@/store/stopWatches'

const stopWatchesStore = useStopWatchesStore()
const props = defineProps({
  stopWatch: Object,
  default: () => {
  }
})
const toPlay = () => {
  stopWatchesStore.play(props.stopWatch.id)
  toStopWatch()
}
const toStop = () => {
  stopWatchesStore.stop(props.stopWatch.id)
}
const toPause = () => {
  stopWatchesStore.pause(props.stopWatch.id)
}
const toStopWatch = () => {
  const intervalId = setInterval(() => {
    if (props.stopWatch.isPause || !props.stopWatch.isActive) {
      clearInterval(intervalId)
    } else {
      stopWatchesStore.update(props.stopWatch.id)
    }
  }, 1000)
}
</script>

<style lang="scss" scoped>
.card {
  width: 225px;
  height: 120px;
  background: #696969;

  &_text {
    font-weight: 400;
    font-size: 22px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
  }

  &_line {
    height: 0;
    border: 1px solid white;
  }

  &_actions {
    margin-top: 14px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    column-gap: 53px;
  }
}
</style>
