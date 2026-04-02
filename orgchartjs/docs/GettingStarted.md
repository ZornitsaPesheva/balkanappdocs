---
outline: deep
---

# Getting Started

<a target="_blank" href="https://www.youtube.com/watch?v=Jf0pNb3q2Y0" style="float: right; margin-left: 20px;">
    <img src="https://cdn.balkan.app/shared/vid1.png" alt="Hello OrgChart JS" width="250">
</a>

There are two types of licenses: **Community** and **Commercial**.

If you plan to use a Commercial license, download the **FREE Trial** edition.
If you want to use the product for free with limited functionality, start with the **Community** Edition.       

## Installation
<GettingStartedTabs />

## Usage

```html
<div id="tree"></div>

<script>
    const chart = new OrgChart(document.getElementById("tree"), {
        nodeBinding: {
            field_0: "name",
        }
    });

    chart.load([
            { id: 1, name: "John Doe", title: "CEO" },
            { id: 2, pid: 1, name: "Jane Smith", title: "CTO" }
    ]);
</script>
```

## Result

<Demo path="orgchartjs/gettingstarted" />

