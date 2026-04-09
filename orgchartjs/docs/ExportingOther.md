---
outline: deep
head:
  - - meta
    - property: og:image
      content: https://balkan.app/Content/img/oc.png
  - - meta
    - property: og:title
      content: Other Exports | OrgChart JS
---


# Other Exports

## Export to Visio

With Visio you have most of the export functionalities as in [PDF/PNG Export](https://balkan.app/OrgChartJS/Docs/ExportingPdfPng).

<Demo path="orgchart-js/export-to-visio" />

Visio also uses the export server to do the export.

### Visio options

```javascript
chart.exportToVisio({
  fileName: "myChart.vsdx",
  padding: 50,
  margin: [10, 10, 10, 10],
  expandChildren: true,
  childLevels: 1,
  parentLevels: 1,
  min: false,
  header: '<text>My Header</text>',
  footer: '<text>My Footer. Page {current-page} of {total-pages}</text>'
});
```

Not all options can work together.

Here is a code example with all Visio export options:

<Demo path="orgchart-js/visio-options" />

::: warning Important note
When you export to Visio, data is temporarily sent and stored on BALKAN App's server for one hour.

If you prefer not to have data stored on BALKAN App's server for privacy reasons, you can install your own server.
:::

::: warning API Removal Notice (Version 9)
The following method was removed in version 9: `exportVisio`.

Use instead: `exportToVisio`.
:::

## Export to CSV

You can add CSV export as a menu item in `menu`:

```javascript
menu: {
  csv_export: { text: "Export CSV" },
}
```

And/or in `nodeMenu`:

```javascript
nodeMenu: {
  csv_export: { text: "Export CSV" },
}
```

Here is the result:

<Demo path="orgchart-js/export-to-csv" />

## Export to XML

You can add XML export as a menu item in `menu`:

```javascript
menu: {
  xml_export: { text: "Export XML" },
}
```

And/or in `nodeMenu`:

```javascript
nodeMenu: {
  xml_export: { text: "Export XML" },
}
```

Here is the result:

<Demo path="orgchart-js/export-to-xml" />

## Export to JSON

You can add JSON export as a menu item in `menu`:

```javascript
menu: {
  json_export: { text: "Export JSON" },
}
```

And/or in `nodeMenu`:

```javascript
nodeMenu: {
  json_export: { text: "Export JSON" },
}
```

Here is the result:

<Demo path="orgchart-js/export-to-json" />

## CSV / XML / JSON export options

```javascript
chart.exportToCSV({
  filename: "myChart.csv",
  nodeId: id,
});
```

Here is a code example:

<Demo path="orgchart-js/csv-options" />

## Export event listeners

You can use `onExportStart` and `onExportEnd` methods to change export behavior.

```javascript
// add before chart.load()
chart.onExportStart(() => {
  console.log("exporting");
});
```

Here is an example of exporting only the `name` and `title` fields by changing `args.nodes`:

```javascript
// add before chart.load()
chart.onExportStart((args) => {
  if (args.ext === "csv" || args.ext === "xml") {
    const newNodes = [];
    for (let i = 0; i < args.nodes.length; i++) {
      newNodes.push({
        name: args.nodes[i].name,
        title: args.nodes[i].title
      });
    }
    args.nodes = newNodes;
  }
});
```

<Demo path="org-chart-js/export-arguments" />

Use `return false` to cancel exporting:

```javascript
// add before chart.load()
chart.onExportStart(() => {
  // add your code here
  return false;
});
```
