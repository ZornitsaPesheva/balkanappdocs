---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
---


# Controls

Controls are small buttons displayed on the chart that let users quickly perform actions such as exporting, zooming, switching layouts, or fitting the chart to the screen.

You can configure controls through the `controls` option in your chart configuration.

## Example

```javascript
controls: {
    pdf_export: { title: 'Export to PDF' },
    fit: { title: "Fit the chart" }
}
```

<Demo path="orgchart-js/controls-example" />

## Built-in Controls

OrgChartJS comes with predefined controls that you can enable:

* **svg_export** – Export to SVG
* **pdf_export** – Export to PDF
* **png_export** – Export to PNG
* **visio_export** – Export to Visio (VSDX)
* **pp_export** – Export to PowerPoint (PPTX)
* **pp_preview** – PPTX preview
* **pdf_preview** – PDF preview
* **svg_preview** – SVG preview
* **png_preview** – PNG preview
* **csv_export** – Export to CSV
* **xml_export** – Export to XML
* **json_export** – Export to JSON
* **fit** – Fit chart to screen
* **expand_all** – Expand all nodes
* **full_screen** – Toggle fullscreen
* **zoom_in** – Zoom in
* **zoom_out** – Zoom out
* **layout_mixed** – Mixed layout
* **layout_normal** – Normal layout
* **layout_right_offset** – Right offset layout
* **layout_left_offset** – Left offset layout
* **layout_tree** – Tree layout
* **layout_grid** – Grid layout

## Positioning Controls

The `anchor` property specifies where the control is displayed:

* `OrgChart.anchor.bottom`
* `OrgChart.anchor.bottom_left`
* `OrgChart.anchor.bottom_right`
* `OrgChart.anchor.left`
* `OrgChart.anchor.left_bottom`
* `OrgChart.anchor.left_top`
* `OrgChart.anchor.right`
* `OrgChart.anchor.right_bottom`
* `OrgChart.anchor.right_top`
* `OrgChart.anchor.top`
* `OrgChart.anchor.top_left`
* `OrgChart.anchor.top_right`

Example:

```javascript id="controls-anchor"
controls: {
    full_screen: { title: 'test', anchor: OrgChart.anchor.top_left },
},
```

By default, controls are anchored to `bottom_right`.

<Demo path="orgchart-js/controls-css" />

## On/Off effect

The `isOn` property indicates whether a control is active.

* `true`
* `false` (default)

```javascript id="controls-onoff"
controls: {
    full_screen: { title: 'test', isOn: true },
},
```

## Custom Controls

You can add your own control:

```javascript id="custom-control"
controls: {
    myControl: { 
        title: 'My Control', 
        onClick: function(){
            alert('My Control clicked')
        } 
    }
}
```

<Demo path="orgchart-js/controls" />

## Custom Icons

Each control has a default icon. You can define your own:

```javascript id="custom-icon"
let expandUpIcon = `<svg width="32px" height="32px">
<path stroke-width="3" fill="none" stroke="#757575" d="M8,16 L16,8 L24,16"></path>
<line x1="16" y1="8" x2="16" y2="24" stroke-width="3" stroke="#757575"></line>
</svg>`;
```

Use it:

```javascript id="use-icon"
controls: {
    myControl: {
        title: 'Expand Up',
        icon: expandUpIcon,
        onClick: expandUp
    },
},
```

<Demo path="orgchart-js/custom-control-icon" />

The icons can be SVG or HTML.

Example with animated / material icons:

<Demo path="orgchart-js/control-icons" />
