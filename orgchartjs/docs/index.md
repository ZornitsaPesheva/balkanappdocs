---
outline: deep
head:
  - - meta
    - property: og:title
      content: OrgChart JS
---

<!-- ---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "balkanappdocs"
  text: "BALKAN App Documentation"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
 -->


<script setup> 
import { onMounted } from 'vue' 
  onMounted(() => { 
    if (location.pathname.endsWith('/')) { 
      location.replace('./GettingStarted') 
    } }) 
</script>