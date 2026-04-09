---
outline: deep
head:
  - - meta
    - property: og:image
      content: https://balkan.app/Content/img/oc.png
  - - meta
    - property: og:title
      content: PDF Export | OrgChart JS
---


# PDF Export

Use the predefined `menu` and `nodeMenu` items to export to PDF:

```javascript
nodeMenu: {
  pdf_export: { text: "Export PDF" },
},
```

Here is the result:

<Demo path="orgchart-js/direct-pdf-export" />

## Export options

```javascript
chart.exportToPDF({
  childLevels: 1,
  parentLevels: 1,
  expandChildren: true,
  fileName: "myChart.pdf",
  format: "A1", // "A2" | "A3" | "A4" | "A5" | "Letter" | "Legal" | "auto"
  header: '<text>My SVG Header</text>',
  footer: '<text>My SVG Footer. Slide {current-page} of {total-pages}</text>',
  landscape: true,
  min: false,
  openInNewTab: true,
  margin: [10, 10, 10, 10],
  padding: 50,
});
```

Not all options can work together.

## Add header and footer for A4

The header and footer are SVG definitions.

First define the function:

```javascript
function pdf(nodeId) {
  chart.exportToPDF({
    format: "A4",
    header: '<text style="font-size:36px;">My Header</text>',
    footer: '<text style="font-size:24px;">My Footer. Page {current-page} of {total-pages}</text>',
  });
}
```

Then use it in a menu option:

```javascript
menu: {
  export_pdf: {
    text: "Export to PDF with my header and footer",
    icon: OrgChart.icon.pdf(24, 24, "#7A7A7A"),
    onClick: pdf
  },
},
```

<Demo path="orgchart-js/pdf-export-with-header-and-footer" />

## Export by pages

You can export multiple charts or export a chart by teams using the `pages` property.

You can use the following options:

```javascript
chart.exportToPDF({
  pages: [
    {
      isProfile: true,
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
  ]
});
```

### Export a chart by teams

```javascript
chart.exportToPDF({
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

<Demo path="orgchart-js/pdf-export-in-pages" />

### Export multiple charts in one PDF file

```javascript
chart1.exportToPDF({
  format: "A4",
  pages: [
    { chartInstance: chart1, header: '<text>OrgChart 1</text>' },
    { chartInstance: chart2, header: '<text>OrgChart 2</text>' },
    { chartInstance: chart3, header: '<text>OrgChart 3</text>' },
    { chartInstance: chart4, header: '<text>OrgChart 4</text>' }
  ]
});
```

<Demo path="orgchart-js/pdf-export-multiple-charts" />

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

<Demo path="orgchart-js/pdf-export-styles" />

## PDF Preview

You can add PDF Preview as a `menu` item:

```javascript
menu: {
  pdf_preview: { text: "PDF Preview" }
}
```

And/or as a `nodeMenu` option:

```javascript
nodeMenu: {
  pdf_preview: { text: "PDF Preview from here" }
}
```

Click on the menu option to open the preview:

<Demo path="orgchart-js/pdf-preview" />

## Add header and footer

The header and footer are SVG definitions.

Define the function:

```javascript
function pdfPreview() {
  chart.pdfPreviewUI.show({
    header: '<text>My Header</text>',
    footer: '<text>My Footer. Page {current-page} of {total-pages}</text>'
  });
}
```

Use it in a menu option:

```javascript
menu: {
  pdfPreview: {
    text: "Export PDF",
    icon: OrgChart.icon.pdf(24, 24, "#7A7A7A"),
    onClick: pdfPreview
  }
}
```

<Demo path="orgchart-js/pdf-preview-with-header-and-footer" />

## Add pages programmatically

You can add custom pages in preview using the `pages` property.

Here is how to export a chart by teams:

```javascript
function pdfExportPreview() {
  chart.pdfPreviewUI.show({
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

<Demo path="orgchart-js/pdf-preview-pages" />

## Profile Export

With the `isProfile` property you can export a node profile:

```javascript
function previewPdf(id) {
  chart.pdfPreviewUI.show({
    pages: [
      {
        nodeId: id,
        isProfile: true
      }
    ]
  });
}
```

<Demo path="orgchart-js/pdf-profile" />

## Custom content pages

You can add a page with custom content:

```javascript
function pdfExportPreview() {
  chart.pdfPreviewUI.show({
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

<Demo path="orgchart-js/pdf-preview-with-custom-pages" />

## Preview Buttons Configuration

You can hide or show the following buttons:

```javascript
chart.pdfPreviewUI.buttons.addNewPage = true;
chart.pdfPreviewUI.buttons.childLevels = true;
chart.pdfPreviewUI.buttons.landscapePortrait = true;
chart.pdfPreviewUI.buttons.parentLevels = true;
chart.pdfPreviewUI.buttons.printProfileOrTree = true;
chart.pdfPreviewUI.buttons.removePage = true;
```

Here is an example:

<Demo path="orgchart-js/export-preview-buttons-configuration" />

## Localization

Here is what you can localize in PDF Preview:

```javascript
chart.pdfPreviewUI.locExport = 'Export';
chart.pdfPreviewUI.locLandscape = 'Landscape';
chart.pdfPreviewUI.locPortrait = 'Portrait';
chart.pdfPreviewUI.locCancel = 'Close';
chart.pdfPreviewUI.locParentLevels = 'parent levels';
chart.pdfPreviewUI.locChildLevels = 'child levels';
chart.pdfPreviewUI.locClickToAdd = 'Click on a node to display it here';
chart.pdfPreviewUI.locPrintTree = 'Print tree';
chart.pdfPreviewUI.locPrintProfile = 'Print profile';
chart.pdfPreviewUI.locAddNew = 'Add new page';
chart.pdfPreviewUI.locRemove = 'Remove page';
```

Here is an example:

<Demo path="orgchart-js/pdfpreviewui-localization" />

## Images

Sometimes you may need to convert images to base64 format before exporting.
Use this constant:

```javascript
OrgChart.CONVERT_IMAGES_TO_BASE64_BEFORE_EXPORT = true;
```

Code example: [convert images](https://code.balkan.app/orgchart-js/convert-images#JS)

::: warning Server JS
There may be cases where you do not want to use the BALKAN server for export. For example, if you are running a secure website or if you do not want your data to be passed to https://balkan.app.

In that case you need to set up your own [Server JS](/ServerJS).
:::

::: warning API Removal Notice (Version 9)
The following methods were removed in version 9. Update your implementation to use the new alternatives below.

| Removed | Use Instead |
| --- | --- |
| `exportPDF` | [`exportToPDF`](#export-options) |
| `exportPDFProfile` | [`exportToPDF`](#export-by-pages) with `pages` and `isProfile: true`, or [`previewPdf(id)`](#profile-export) |
| `exportPDFPreview` | [`pdf_preview`](#pdf-preview) option |
| `exportPDFFromCharts` | [`exportToPDF`](#export-by-pages) with `pages` option |
| `OrgChart.pdfPrevUI` | [`chart.pdfPreviewUI.show`](#add-pages-programmatically) |
:::

