<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  }
})

const tabsContext = inject('tabsContext', null)

const isActive = computed(() => {
  return tabsContext?.activeTab?.value === props.name
})
</script>

<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>
