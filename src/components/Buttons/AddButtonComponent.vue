<template>
  <div @click="stopWatchStore.add()" class="card">
    <div class="plus">
      <div class="plus_one"></div>
      <div class="plus_two"></div>
    </div>
  </div>
</template>

<script setup>
import { useStopWatchesStore } from '@/store/stopWatches'

const stopWatchStore = useStopWatchesStore()
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 225px;
  height: 120px;
  background: #696969;
  cursor: pointer;

  &:hover > .plus > .plus_one {
    background: #FFFFFF;
  }

  &:hover > .plus > .plus_two {
    background: #FFFFFF;
  }

  .plus {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    &_one {
      width: 3px;
      height: 100%;
      background: #9E9E9E;
      transform: rotate(-90deg) translateY(3px);
      transition: all .2s;
    }

    &_two {
      width: 3px;
      height: 100%;
      background: #9E9E9E;
      transition: all .2s;
    }
  }
}
</style>
