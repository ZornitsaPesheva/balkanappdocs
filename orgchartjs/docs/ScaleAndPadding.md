---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
---

# Scale and Padding

## Initial scale

### scaleInitial: OrgChart.match.boundaryIfOutside

Auto zooms out the chart so that it stays within the visible boundaries both horizontally and vertically (fit to screen).  
This is the **default value**.

<Demo path="orgchart-js/match-boundaryifoutside" />

### Custom value

You can manually increase or decrease the scale.  
The root node will always remain centered.

<Demo path="org-chart-js/initial-scale" />

### scaleInitial: OrgChart.match.boundary

Auto scales the chart to fully fit within both width and height boundaries.

<Demo path="org-chart-js/match-boundary" />

### scaleInitial: OrgChart.match.height

Auto scales the chart so all nodes are visible vertically (fit to height).

<Demo path="org-chart-js/match-height" />

### scaleInitial: OrgChart.match.width

Auto scales the chart so all nodes are visible horizontally (fit to width).

<Demo path="org-chart-js/match-widt" />

## Controls

You can use [Controls](~/OrgChartJS/Docs/Controls) to adjust zoom:

<Demo path="orgchart-js/zoom" />

## Padding

The `padding` option sets spacing around all sides of the chart.

```javascript id="padding-example"
padding: 20
```

## Separation between nodes

You can control spacing using:

* `levelSeparation`
* `siblingSeparation`
* `subtreeSeparation`
* `mixedHierarchyNodesSeparation`

![Separation illustration](https://cdn.balkan.app/shared/docs-13.png)

### Example

```javascript id="level-separation"
levelSeparation: 50
```

### Change dynamically

```javascript id="dynamic-separation"
chart._layoutConfigs.base.levelSeparation = 200;
chart.draw();
```

You can also apply different separation settings for specific groups (nodes) and their subtrees.
