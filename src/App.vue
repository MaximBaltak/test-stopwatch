<template>
  <div class="container">
    <StopWatchComponent v-for="item in stopWatchStore.stopWatches" :key="item.id" :stop-watch="item"/>
    <AddButtonComponent/>
  </div>
</template>
 re
<script setup>
import StopWatchComponent from '@/components/StopWatchComponent'
import AddButtonComponent from '@/components/Buttons/AddButtonComponent'
import { useStopWatchesStore } from '@/store/stopWatches'

const stopWatchStore = useStopWatchesStore()
</script>

<style lang="scss">
.container {
  margin: 0 auto 0;
  padding-top: 100px;
  display: flex;
  justify-content: start;
  column-gap: 50px;
  row-gap: 50px;
  width: 780px;
  flex-wrap: wrap;
  @media screen and (max-width: 800px) {
    width: 500px;
  }
  @media screen and (max-width: 530px) {
    width: 90%;
    justify-content: center;
  }
}

body, html {
  height: 100vh;
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Gotham Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #353638;
  margin: 0;
  height: 100vh;
  padding: 0;
}
</style>
