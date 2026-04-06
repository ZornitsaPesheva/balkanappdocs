---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
---

# PowerPoint Export

You can add PowerPoint export as a `menu` item:

```javascript
menu: {
  pp_export: { text: "Export PowerPoint" }
}
```

And/or as a `nodeMenu` item:

```javascript
nodeMenu: {
  pp_export: { text: "Export node and its children to PowerPoint" }
}
```

Here is the result:

<Demo path="orgchart-js/export-to-powerpoint" />

## Export options

```javascript
chart.exportToPowerPoint({
  childLevels: 1,
  expandChildren: true,
  format: "Standard", // "Screen" (default) | "Widescreen" | "Standard"
  header: '<text>My Header</text>',
  footer: '<text>My Footer. Page {current-page} of {total-pages}</text>',
  fileName: "myChart.pptx",
  min: false,
  openInNewTab: true,
  nodeId: id,
  margin: [10, 10, 10, 10],
  padding: 50
});
```

Not all options can work together.

## exportToPowerPoint method

The default export format is _Screen_, which is the client screen size.
Here is how to export in _Widescreen_ format using `exportToPowerPoint`.

First define the function:

```javascript
function powerpoint() {
  chart.exportToPowerPoint({
    format: "Widescreen"
  });
}
```

Then use it in a menu option:

```javascript
menu: {
  export_pp: {
    text: "Export PowerPoint - Widescreen",
    icon: OrgChart.icon.powerpoint(24, 24, "#7A7A7A"),
    onClick: powerpoint
  },
}
```

<Demo path="orgchart-js/export-to-widescreen" />

## Add header and footer

The header and footer are SVG definitions.

Define the function:

```javascript
function powerpoint(nodeId) {
  chart.exportToPowerPoint({
    header: '<text>My Header</text>',
    footer: '<text>My Footer. Page {current-page} of {total-pages}</text>'
  });
}
```

Use it in a menu option:

```javascript
menu: {
  export_powerpoint: {
    text: "Export to PowerPoint with my header and footer",
    icon: OrgChart.icon.powerpoint(24, 24, "#7A7A7A"),
    onClick: powerpoint
  },
}
```

<Demo path="orgchart-js/export-to-powerpoint-with-header-and-footer" />

## Export by slides

You can export multiple charts or a chart by teams using the `pages` property.

You can use the following options:

```javascript
chart.exportToPowerPoint({
  pages: [
    {
      content: '<svg><text>My Header</text></svg>',
      chartInstance: chart,
      nodeId: 2,
      expandChildren: true,
      childLevels: 2,
      parentLevels: 1,
      min: false,
      header: '<text>My Header</text>',
      footer: '<text>My Footer. Page {current-page} of {total-pages}</text>'
    },
  ],
});
```

### Export a chart by teams

```javascript
chart.exportToPowerPoint({
  expandChildren: false,
  pages: [
    {
      nodeId: 2
    },
    {
      nodeId: 3,
      childLevels: 1
    },
    {
      nodeId: 4
    },
  ]
});
```

<Demo path="orgchart-js/powerpoint-export-in-pages" />

### Export multiple charts in one PowerPoint file

```javascript
chart1.exportToPowerPoint({
  pages: [
    { chartInstance: chart1, header: '<text>OrgChart 1</text>' },
    { chartInstance: chart2, header: '<text>OrgChart 2</text>' },
    { chartInstance: chart3, header: '<text>OrgChart 3</text>' },
    { chartInstance: chart4, header: '<text>OrgChart 4</text>' }
  ]
});
```

<Demo path="orgchart-js/export-to-powerpoint-slides" />

## Exporting styles

Using the `onExportStart` and `onExportEnd` event listeners, you can change export behavior.
You can export styles using the `args.styles` property.

HTML:

```html
<style id="myStyles">
  .node.HR rect {
    fill: #E99113;
  }
</style>
```

JavaScript:

```javascript
// add before chart.load()
chart.onExportStart((args) => {
  args.styles += document.getElementById('myStyles').outerHTML;
});
```

Code example:

<Demo path="orgchart-js/powerpoint-export-styles" />

In PowerPoint you can ungroup the chart and make changes.

::: warning Limitations
- Cannot export images and foreignobjects.
- Header and footer should be SVG objects.
:::

## PowerPoint Preview

You can add PowerPoint Preview as a `menu` item:

```javascript
menu: {
  pp_preview: { text: "Create a PowerPoint Presentation" }
}
```

And/or as a `nodeMenu` option:

```javascript
nodeMenu: {
  pp_preview: { text: "Create a PowerPoint Presentation from here" }
}
```

Click on the menu option to open the preview:

<Demo path="orgchart-js/powerpoint-preview" />

## Add header and footer to preview

The header and footer are SVG definitions.

Define the function:

```javascript
function ppExportPreview() {
  chart.powerPointPreviewUI.show({
    header: '<text>My Header</text>',
    footer: '<text>My Footer. Page {current-page} of {total-pages}</text>'
  });
}
```

Use it in a menu option:

```javascript
menu: {
  pp_preview: {
    text: "Export PowerPoint",
    icon: OrgChart.icon.powerpoint(24, 24, "#7A7A7A"),
    onClick: ppExportPreview
  }
}
```

<Demo path="orgchart-js/export-powerpoint-with-header-and-footer" />

## Add slides programmatically

You can add custom pages in preview using the `pages` property.

Here is how to export a chart by teams:

```javascript
function ppExportPreview() {
  chart.powerPointPreviewUI.show({
    pages: [
      {
        nodeId: 2
      },
      {
        nodeId: 3,
        childLevels: 1
      },
      {
        nodeId: 4
      },
    ]
  });
}
```

<Demo path="orgchart-js/powerpoint-preview-slides" />

## Profile Export

With the `isProfile` property you can export a node profile:

```javascript
function ppExportPreview() {
  chart.powerPointPreviewUI.show({
    pages: [
      {
        nodeId: 1,
        isProfile: true
      }
    ]
  });
}
```

<Demo path="orgchart-js/powerpoint-profile" />

## Custom content slides

You can add a slide with custom content:

```javascript
function ppExportPreview() {
  chart.powerPointPreviewUI.show({
    pages: [
      {
        content: '<svg>[Your SVG definition here]</svg>'
        // or
        // content: '[Your HTML definition here]'
      },
      {
        nodeId: 2
      }
    ]
  });
}
```

Here is how to add a slide with a logo:

<Demo path="orgchart-js/powerpoint-preview-with-content" />

## Preview Buttons Configuration

You can hide or show the following buttons:

```javascript
chart.powerPointPreviewUI.buttons.addNewPage = true;
chart.powerPointPreviewUI.buttons.childLevels = true;
chart.powerPointPreviewUI.buttons.parentLevels = true;
chart.powerPointPreviewUI.buttons.removePage = true;
```

Here is an example:

<Demo path="orgchart-js/powerpointpreviewui-buttons" />

## Localization

Here is what you can localize in PowerPoint Preview:

```javascript
chart.powerPointPreviewUI.locExport = 'Export';
chart.powerPointPreviewUI.locCancel = 'Close';
chart.powerPointPreviewUI.locParentLevels = 'parent levels';
chart.powerPointPreviewUI.locChildLevels = 'child levels';
chart.powerPointPreviewUI.locClickToAdd = 'Click on a node to display it here';
chart.powerPointPreviewUI.locPrintTree = 'Print tree';
chart.powerPointPreviewUI.locPrintProfile = 'Print profile';
chart.powerPointPreviewUI.locAddNew = 'Add new slide';
chart.powerPointPreviewUI.locRemove = 'Remove slide';
```

Here is an example:

<Demo path="orgchart-js/powerpoint-localization" />

::: warning Server JS
There may be cases where you do not want to use the BALKAN server for export. For example, if you run a secure website or do not want your data to be passed to https://balkan.app.

In that case you need to set up your own Server JS.
:::

