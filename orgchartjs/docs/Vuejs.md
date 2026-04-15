---
outline: deep
head:
  - - meta
    - property: og:image
      content: https://balkan.app/Content/img/oc.png
  - - meta
    - property: og:title
      content: Vue.js | OrgChart JS
---

# Vue.js

This document shows you how to create an **OrgChart JS** Vue.js project.

1. Create a new project:

```bash
npm init vue@latest
? Project name: » orgchart
```

Go to the project root folder:

```bash
cd orgchart
```

2. Install dependencies:

```bash
npm install
```

3. Install the **OrgChart JS** NPM package:

```bash
npm i balkan-orgchart-js
```

4. Create file **OrgChart.vue** in **/src/components** folder with the following content:

```vue
<template>
  <div id="tree" ref="tree"></div>
</template>

<script>
import OrgChart from "balkan-orgchart-js";

export default {
  name: "tree",
  data() {
    return {
      nodes: [
        { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
        { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
        { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
        { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
        { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
        { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
        { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
      ]
    };
  },
  methods: {
    mytree(domEl, x) {
      this.chart = new OrgChart(domEl, {
        nodes: x,
        nodeBinding: {
          field_0: "name",
          img_0: "img"
        }
      });
    }
  },
  mounted() {
    this.mytree(this.$refs.tree, this.nodes);
  }
};
</script>

<style scoped>
</style>
```

5. Change **App.vue** as follows:

```vue
<template>
  <div id="app">
    <OrgChart />
  </div>
</template>

<script>
import OrgChart from "./components/OrgChart.vue";

export default {
  name: "app",
  components: {
    OrgChart
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-family: Helvetica;
}

#tree {
  width: 100%;
  height: 100%;
}
</style>
```

6. Start the project:

```bash
npm run dev
```

