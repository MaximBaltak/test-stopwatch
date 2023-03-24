<template>
  <svg @click="click" :style="{opacity: isActive ? 1 : 0.5, cursor: 'pointer' }" height="20px" width="20px">
    <use :xlink:href="require('@/assets/icons.svg')+'#play'"/>
  </svg>
</template>

<script setup>
import { defineEmits, defineProps } from '@vue/runtime-core'

defineProps({
  isActive: Boolean
})
const emit = defineEmits(['play'])
const click = () => {
  emit('play')
}

</script>

<style scoped>

</style>
