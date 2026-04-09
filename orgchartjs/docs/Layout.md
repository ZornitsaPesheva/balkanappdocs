---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
  - - meta
    - property: og:title
      content: Layout | OrgChart JS
---



# Layout

You can use different layouts in OrgChart JS.

## Node Levels

You can set node levels using the **tags.subLevels** property.  
The value defines how many levels to go down from a particular node.

More about tags:  
[Tags documentation](https://balkan.app/OrgChartJS/Docs/Tags)

<Demo path="org-chart-js/sublevels" />

> Note: sublevels are not supported with partners and children of partners.

## OrgChart.layout.normal (default)

<Demo path="org-chart-js/normal-layout" />

## Mixed Hierarchy

To optimize space using both vertical and horizontal layouts, set `layout` to:

- `OrgChart.layout.mixed`
- `OrgChart.layout.tree`
- `OrgChart.layout.treeLeftOffset`
- `OrgChart.layout.treeRightOffset`

### OrgChart.layout.mixed

<Demo path="org-chart-js/mixd-hierarchy" />

### Mixed layout with `MIXED_LAYOUT_ALL_NODES = false`

<Demo path="org-chart-js/mixed-layout-all-nodes-false" />

### OrgChart.layout.tree

<Demo path="org-chart-js/tree-layout" />

### OrgChart.layout.treeLeft

<Demo path="org-chart-js/treeleft" />

### OrgChart.layout.treeLeftOffset

<Demo path="org-chart-js/treeleftoffset" />

### OrgChart.layout.treeRight

<Demo path="org-chart-js/treeRight" />

### OrgChart.layout.treeRightOffset

<Demo path="org-chart-js/treerightoffset" />

### Mixed layout for collapsed nodes

<Demo path="org-chart-js/mixed-layout-for-nodes-with-collapsed-children." />

### Change layout after number of children

<Demo path="org-chart-js/one-child-layout" />

### Sublevels with layouts

<Demo path="orgchart-js/layouts-with-sublevels#JS" />

## Grid layout

<Demo path="org-chart-js/grid-layout-with-8-nodes" />

## node-layout event

### Different layouts per branch

<Demo path="org-chart-js/different-layouts-in-one-chart" />

### Different layouts per node

<Demo path="multi-layout" />

[Example: different layouts per branch](https://code.balkan.app/orgchart-js/changing-nodes-layouts-in-different-branches)  

[Example: custom layout with layout events](https://code.balkan.app/org-chart-js/multi-layout#JS)

