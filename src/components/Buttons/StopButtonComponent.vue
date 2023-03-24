<template>
  <svg @click="click" :style="{opacity: isActive ? 1 : 0.5, cursor: 'pointer'}" height="20px" width="20px">
    <use :xlink:href="require('@/assets/icons.svg')+'#stop'"/>
  </svg>
</template>

<script setup>
import { defineProps, defineEmits } from '@vue/runtime-core'

const props = defineProps({
  isActive: Boolean
})
const emit = defineEmits(['stop'])
const click = () => {
  if (props.isActive) {
    emit('stop')
  }
}
</script>

<style scoped>

</style>
