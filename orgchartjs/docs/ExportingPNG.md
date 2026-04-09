---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
  - - meta
    - property: og:title
      content: PNG/SVG Export | OrgChart JS
---


# PNG/SVG Export

You can replace PNG with SVG in all examples.

Use the predefined `menu` or `nodeMenu` item to add export:

```javascript
nodeMenu: {
  png_export: { text: "Export PNG" }
},
```

Here is the result:

<Demo path="orgchart-js/direct-png-export" />

Or you can use the `exportToPNG` method.

## Export options

```javascript
chart.exportToPNG({
  childLevels: 1,
  parentLevels: 1,
  expandChildren: true,
  fileName: "myChart.PNG",
  header: '<text>My SVG Header</text>',
  footer: '<text>My SVG Footer. Slide {current-page} of {total-pages}</text>',
  min: false,
  openInNewTab: true,
  margin: [10, 10, 10, 10],
  padding: 50
});
```

Not all options can work together.

## Add header and footer

The header and footer are SVG definitions.

Define the function:

```javascript
function png(nodeId) {
  chart.exportToPNG({
    header: '<text style="font-size:36px;">My Header</text>',
    footer: '<text style="font-size:24px;">My Footer. Page {current-page} of {total-pages}</text>',
  });
}
```

Use it in a menu option:

```javascript
menu: {
  export_png: {
    text: "Export to PNG with my header and footer",
    icon: OrgChart.icon.png(24, 24, "#7A7A7A"),
    onClick: png
  },
},
```

<Demo path="orgchart-js/png-export-with-header-and-footer" />

## Export by pages

You can export multiple charts or export a chart by teams using the `pages` property.

You can use the following options:

```javascript
chart.exportToPNG({
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
    }
  ],
});
```

### Export a chart by teams

```javascript
chart.exportToPNG({
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

<Demo path="orgchart-js/png-export-by-pages" />

### Export multiple charts in one PNG file

```javascript
chart1.exportToPNG({
  pages: [
    { chartInstance: chart1, header: '<text>OrgChart 1</text>' },
    { chartInstance: chart2, header: '<text>OrgChart 2</text>' },
    { chartInstance: chart3, header: '<text>OrgChart 3</text>' },
    { chartInstance: chart4, header: '<text>OrgChart 4</text>' }
  ]
});
```

<Demo path="orgchart-js/png-export-multiple-charts" />

## Exporting styles

Using the `onExportStart` and `onExportEnd` event listeners, you can change the export behavior.
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

<Demo path="orgchart-js/png-export-styles" />

All examples are created for PNG, but they work the same way for SVG too.

## PNG Preview

You can add PNG/SVG Preview as a `menu` item:

```javascript
menu: {
  png_preview: { text: "PNG Preview" }
}
```

And/or as a `nodeMenu` option:

```javascript
nodeMenu: {
  png_preview: { text: "PNG Preview from here" }
}
```

Click on the menu option to open the preview:

<Demo path="orgchart-js/png-preview" />

## Add header and footer to preview

The header and footer are SVG definitions.

Define the function:

```javascript
function pngPreview() {
  chart.pngPreviewUI.show({
    header: '<text>My Header</text>',
    footer: '<text>My Footer. Page {current-page} of {total-pages}</text>'
  });
}
```

Use it in a menu option:

```javascript
menu: {
  pngPreview: {
    text: "Export PNG",
    icon: OrgChart.icon.png(24, 24, "#7A7A7A"),
    onClick: pngPreview
  }
}
```

<Demo path="orgchart-js/png-preview-with-header-and-footer" />

## Add pages programmatically

You can add custom pages in preview using the `pages` property.

Here is how to export a chart by teams:

```javascript
function pngExportPreview() {
  chart.pngPreviewUI.show({
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

<Demo path="orgchart-js/png-preview-pages" />

## Custom content pages

You can add a page with custom content:

```javascript
function pngExportPreview() {
  chart.pngPreviewUI.show({
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

Here is how to add a page with a logo:

<Demo path="orgchart-js/png-preview-with-custom-pages" />

## Preview Buttons Configuration

You can hide or show the following buttons:

```javascript
chart.pngPreviewUI.buttons.addNewPage = true;
chart.pngPreviewUI.buttons.childLevels = true;
chart.pngPreviewUI.buttons.parentLevels = true;
chart.pngPreviewUI.buttons.removePage = true;
```

Here is an example:

<Demo path="orgchart-js/png-preview-buttons" />

## Localization

Here is what you can localize in PNG/SVG Preview:

```javascript
chart.pngPreviewUI.locExport = 'Export';
chart.pngPreviewUI.locCancel = 'Close';
chart.pngPreviewUI.locParentLevels = 'parent levels';
chart.pngPreviewUI.locChildLevels = 'child levels';
chart.pngPreviewUI.locClickToAdd = 'Click on a node to display it here';
chart.pngPreviewUI.locAddNew = 'Add new PNG';
chart.pngPreviewUI.locRemove = 'Remove PNG';
```

Here is an example:

<Demo path="orgchart-js/png-localization" />

## Images

Sometimes you may need to convert images to base64 before exporting.
Use this constant:

```javascript
OrgChart.CONVERT_IMAGES_TO_BASE64_BEFORE_EXPORT = true;
```

Code example: [convert images](https://code.balkan.app/orgchart-js/convert-images#JS)

::: warning Server JS
There may be cases where you do not want to use the BALKAN server for export. For example, if you run a secure website or do not want your data to be passed to https://balkan.app.

In that case you need to set up your own [Server JS](/ServerJS).
:::

::: warning API Removal Notice (Version 9)
The following methods were removed in version 9. Update your implementation to use the new alternatives below.

| Removed | Use Instead |
| --- | --- |
| `exportPNG` | [`exportToPNG`](#export-options) |
| `exportSVG` | [`exportToSVG`](#export-options) |
| `exportPNGProfile` | [`exportToPNG`](#export-by-pages) with `pages` and `isProfile: true` option |
:::

