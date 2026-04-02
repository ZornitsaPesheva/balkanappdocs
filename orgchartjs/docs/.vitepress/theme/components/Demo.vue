<script setup lang="ts">
import { computed } from 'vue'

const BASE_URL = 'https://code.balkan.app/result/'

const props = withDefaults(
  defineProps<{
    path?: string
    slug?: string
    title?: string
    height?: number | string
  }>(),
  {
    title: 'OrgChart JS demo',
    height: 540
  }
)

const normalizedPath = computed(() => {
  const value = (props.path || props.slug || '').trim()
  return value.replace(/^\/+/, '')
})

const src = computed(() => `${BASE_URL}${normalizedPath.value}`)

const frameHeight = computed(() =>
  typeof props.height === 'number' ? `${props.height}px` : props.height
)
</script>

<template>
  <div class="demo-frame-wrapper">
    <iframe
      class="demo-frame"
      :src="src"
      :title="title"
      loading="lazy"
      allowfullscreen
      :style="{ height: frameHeight }"
    />
  </div>
</template>

<style scoped>
.demo-frame-wrapper {
  margin: 16px 0 24px;
}

.demo-frame {
  width: 100%;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: #fff;
}
</style>
