---
outline: deep
head:
  - - meta
    - property: og:image
      content: https://balkan.app/Content/img/oc.png
  - - meta
    - property: og:title
      content: Tree List Layout | OrgChart JS
---


# Tree List Layout

A **TreeList layout** is a hierarchical layout that displays the chart in a **structured list**, allowing nodes to be expanded or collapsed while preserving the tree structure.

Like the normal layout, the treeList layout applies to **all hierarchy levels**, supporting unlimited nesting with **scroll-based expand/collapse**.

Treelists are added via **Sub Trees**.

## Enable Tree List Layout

To use `treeList`, configure it in `subTreeConfig`:

```javascript id="treelist-config"
tags: {
    group: {
        subTreeConfig: {
            layout: OrgChart.layout.treeList,
            template: 'treeListItem'
        }
    }
}
```

Example:

<Demo path="orgchart-js/treelist-layout" height="700px" />

## Templates

You can use any template with treeList layout.

<Demo path="orgchart-js/treelistlayout-with-ula" />

## Minimize / Maximize

You can use min/max functionality to collapse or expand groups:

<Demo path="orgchsrt-js/treelistlayout-with-min-max" />

## Customization

### Group

Customize the group template:

```javascript id="treelist-group"
OrgChart.templates.ana.field_0 = function (node, data, template, config, value) {
    let y = 35;
    let x = 15;
    let anchor = 'start';
    let width = node.w / 2;

    if (!node.stChildren.length) {
        width = node.w;
    }

    return `<text data-width="${width}" style="font-size: 20px;" fill="#ffffff" x="${x}" y="${y}" text-anchor="${anchor}">${value}</text>`;
};

// padding
OrgChart.templates.ana.padding = [80, 10, 10, 50];

// max height (scroll appears if exceeded)
OrgChart.templates.ana.treeListMaxHeight = 400;
```

### Items

The default template is **`treeListItem`**. You can modify or replace it.

```javascript id="treelist-items"
// size
OrgChart.templates.treeListItem.size = [430, 50];

// colors
let colors = ['#4FC3F7', '#26A69A', '#607D8B'];

OrgChart.templates.treeListItem.node = function (node) {
    let fill = colors[node.level];
    return `<rect fill="${fill}" x="0" y="0" height="${node.h}" width="${node.w}" rx="0" ry="0"></rect>`;
};

// main field
OrgChart.templates.treeListItem.field_0 = function (node, data, template, config, value) {
    let indent = 30 + node.level * 50;
    let y = node.h / 2 + 5;

    return `<text data-width="100" data-text-overflow="ellipsis"
                 x="${indent}" y="${y}"
                 fill="#757575"
                 style="font-size:16px; font-weight:700;">
                ${value}
            </text>`;
};

// right field
OrgChart.templates.treeListItem.field_1 = function (node, data, template, config, value) {
    let x = node.w - 20;
    let y = node.h / 2 + 5;

    return `<text fill="#757575"
                 x="${x}" y="${y}"
                 style="font-size:16px;"
                 text-anchor="end">
                ${value}
            </text>`;
};

// expand button
OrgChart.templates.treeListItem.plus = function(node){
    let x = 15 + node.level * 50;
    let y = node.h / 2;

    return `<g transform="matrix(1,0,0,1,${x},${y})">
                <line x1="-10" y1="0" x2="10" y2="0" stroke="#757575" stroke-width="2"/>
                <line x1="0" y1="-10" x2="0" y2="10" stroke="#757575" stroke-width="2"/>
                <rect x="-15" y="-15" width="30" height="30" style="opacity:0"/>
            </g>`;
};

// collapse button
OrgChart.templates.treeListItem.minus = function(node){
    let x = 15 + node.level * 50;
    let y = node.h / 2;

    return `<g transform="matrix(1,0,0,1,${x},${y})">
                <line x1="-10" y1="0" x2="10" y2="0" stroke="#757575" stroke-width="2"/>
                <rect x="-15" y="-15" width="30" height="30" style="opacity:0"/>
            </g>`;
};
```

## Tree List Constants

```javascript id="treelist-constants"
// scroll step
OrgChart.TREELIST_WHEEL_STEP = 10;

// scrollbar width
OrgChart.TREELIST_SCROLLBAR_WIDTH = 5;
```

## Result

<Demo path="orgchart-js/tree-list-customization" height="700px" />

## Row Grouping

Group nodes by field values:

<Demo path="orgchart-js/grouping" />

## Example

Complex example:

<Demo path="orgchart-js/hr" />


