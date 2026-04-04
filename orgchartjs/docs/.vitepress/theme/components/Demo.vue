<script setup lang="ts">
import { computed } from 'vue'

const BASE_URL = 'https://code.balkan.app/result/'
const EDIT_BASE_URL = 'https://code.balkan.app/'

const props = withDefaults(
  defineProps<{
    path?: string
    slug?: string
    title?: string
    height?: number | string
    width?: number | string
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
const editSrc = computed(() => `${EDIT_BASE_URL}${normalizedPath.value}`)

const normalizeSize = (value?: number | string) => {
  if (value == null) return undefined
  if (typeof value === 'number') return `${value}px`

  const trimmed = value.trim()
  return /^\d+(\.\d+)?$/.test(trimmed) ? `${trimmed}px` : trimmed
}

const frameHeight = computed(() => normalizeSize(props.height))
const frameWidth = computed(() => normalizeSize(props.width))
const wrapperStyle = computed(() => ({ width: frameWidth.value }))
</script>

<template>
  <div class="demo-frame-wrapper" :style="wrapperStyle">
    <div class="demo-frame-header">
      <img
        class="demo-code-icon"
        src="https://balkan.app/Content/img/code-icon.svg"
        alt="Code icon"
      />
      <a class="demo-edit-btn" :href="editSrc" target="_blank" rel="noopener noreferrer"
        >Edit in BALKAN Code</a
      >
    </div>
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

.demo-frame-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 0 10px;
  background: #ddd;
  border: 1px solid var(--vp-c-divider);
  border-bottom: 0;
}

.demo-code-icon {
  display: block;
  width: 28px;
  height: 28px;
  pointer-events: none;
  margin: 0;
  padding-top: 2px;
}

.demo-edit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border-radius: 0;
  border: 1px solid #039be5;
  background: #039be5;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  line-height: 1.2;
  transition: background-color 0.2s ease;
}

.demo-edit-btn:hover {
  background: #007dba;
  color: #fff;
}

.demo-frame {
  width: 100%;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0;
  background: #fff;
}
</style>
