---
outline: deep
head:
  - - meta
    - property: og:image
      content: https://balkan.app/Content/img/oc.png
  - - meta
    - property: og:title
      content: Getting Started | OrgChart JS
  - - meta
    - name: robots
      content: "max-image-preview: large"
  - - meta
    - name: twitter:image
      content: https://balkan.app/Content/img/oc.png
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - script
    - type: application/ld+json
    - |
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Getting Started | BALKAN OrgChart JS",
        "image": ["https://balkan.app/Content/img/oc.png"]
      }

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


