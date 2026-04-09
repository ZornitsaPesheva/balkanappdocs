---
outline: deep
head:
  - - meta
    - property: og:title
      content: Getting Started | OrgChart JS
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

Where:

- **nodes** is the data source. 
- The **id** property is mandatory.
- **pid** — the parent ID; represents the connection between two nodes.
- **nodeBinding** — the `name` property from the data source is bound to the `field_0` UI element from the [template](https://balkan.app/OrgChartJS/Docs/PredefinedTemplates#anaTemplate).

See all available options [here](https://balkan.app/OrgChartJS/API/).


## Update the database {#database}

Use **onAddNode** and **onRemoveNode** methods to add or remove nodes in the database.  
Use **onUpdateNode** to save changes in the database.

[Here](https://code.balkan.app/update-database#JS) is an example showing how to update the database.

For more details, see our **Server Side Implementation** doc page.


