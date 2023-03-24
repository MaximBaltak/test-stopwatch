<template>
  <svg @click="click" :style="{opacity: isActive ? 1 : 0.5,cursor:'pointer'}" style="fill: #353638" height="20px"
       width="20px">
    <use :xlink:href="require('@/assets/icons.svg')+'#pause'"/>
  </svg>
</template>

<script setup>
import { defineEmits, defineProps } from '@vue/runtime-core'

defineProps({
  isActive: Boolean
})
const emit = defineEmits(['pause'])
const click = () => {
  emit('pause')
}
</script>

<style scoped>

</style>
