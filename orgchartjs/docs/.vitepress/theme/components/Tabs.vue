<script setup>
import { Fragment, computed, provide, ref, useSlots, watch } from 'vue'

const props = defineProps({
  defaultTab: {
    type: String,
    default: ''
  }
})

const slots = useSlots()

function flattenVNodes(nodes, out = []) {
  for (const node of nodes) {
    if (!node) continue

    if (node.type === Fragment && Array.isArray(node.children)) {
      flattenVNodes(node.children, out)
      continue
    }

    out.push(node)
  }

  return out
}

const tabs = computed(() => {
  const children = flattenVNodes(slots.default?.() || [])

  return children
    .filter((node) => Boolean(node.props?.name))
    .map((node, index) => {
      const key = node.props?.name || `tab-${index + 1}`
      return {
        key,
        label: node.props?.label || key
      }
    })
})

const activeTab = ref('')

watch(
  tabs,
  (value) => {
    if (!value.length) {
      activeTab.value = ''
      return
    }

    if (!activeTab.value) {
      activeTab.value = props.defaultTab || value[0].key
      return
    }

    if (!value.some((tab) => tab.key === activeTab.value)) {
      activeTab.value = props.defaultTab || value[0].key
    }
  },
  { immediate: true }
)

provide('tabsContext', {
  activeTab
})
</script>

<template>
  <div class="vp-tabs">
    <div class="vp-tabs-nav">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        :class="{ active: activeTab === tab.key }"
        type="button"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="vp-tabs-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.vp-tabs {
  margin: 24px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
}

.vp-tabs-nav {
  display: flex;
  gap: 8px;
  padding: 12px;
  border-bottom: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.vp-tabs-nav button {
  border: 0;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  background: transparent;
  color: var(--vp-c-text-2);
  transition: color 0.2s ease, background-color 0.2s ease;
}

.vp-tabs-nav button:hover {
  color: #039BE5;
}

.vp-tabs-nav button.active {
  background: rgba(3, 155, 229, 0.14);
  color: #039BE5;
}

.vp-tabs-content {
  padding: 16px;
}
</style>