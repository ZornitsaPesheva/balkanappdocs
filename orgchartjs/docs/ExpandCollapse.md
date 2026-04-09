---
outline: deep
head:
  - - meta
    - property: og:image
      content: https://balkan.app/Content/img/oc.png
  - - meta
    - property: og:title
      content: Expand/Collapse | OrgChart JS
---


# Expand/Collapse

You can specify expand/collapse state by setting expand/collapse options.

## Expand and Collapse options

To initially collapse the chart to the second level, add this in the configuration:

```javascript
collapse: {
    level: 2
}
```

<Demo path="org-chart-js/collapse" />

In the example above if you click the expand button of node with id "2" all children will be expanded.

Here is an example how to collapse the chart to the second level and all children of the second level:

```javascript id="c1v8s4"
collapse: {
    level: 2,
    allChildren: true
}
```

<Demo path="org-chart-js/collapse-allchildren" />

In the example above if you click the expand button of node with id "2" only the children from the third level will be expanded.

Here is an example how to collapse the chart to the second level and all children of the second level, except node with id "4":

```javascript id="x9m3b2"
collapse: {
    level: 2,
    allChildren: true
},
expand: {
    nodes: [4]
}
```

<Demo path="org-chart-js/collapseallexcept" />

Here is an example how to collapse the chart to the second level and all children of the second level, except node with id "4" and its children:

```javascript id="p4z6n8"
collapse: {
    level: 2,
    allChildren: true
},
expand: {
    nodes: [4],
    allChildren: true
}
```

<Demo path="org-chart-js/expand-collapce-all-except" />

## Expand/Collapse programmatically

You can use the following methods:
[expand](https://balkan.app/OrgChartJS/API/classes/OrgChart#expand),
[collapse](https://balkan.app/OrgChartJS/API/classes/OrgChart#collapse),
[expandCollapse](https://balkan.app/OrgChartJS/API/classes/OrgChart#expandCollapse)

To expand all children to the leaf under a specific node, you need to
[iterate](https://balkan.app/OrgChartJS/Docs/NodeAPI#iterate) the nodes.
[Here](https://code.balkan.app/org-chart-js/expand-all-under-the-searched-node#JS) is a code example.

## Expand/Collapse on node click event

To expand or collapse on node click set **nodeMouseClick** to **OrgChart.action.expandCollapse**:

```javascript
nodeMouseClick: OrgChart.action.expandCollapse,
```

<Demo path="org-chart-js/expand-collapse-on-node-click" />

In some cases you might not need the expand/collapse button, to hide it you will need to override the template.

To do it, add these before chart declaration:

```javascript id="y2t5k7"
OrgChart.templates.ana.plus = "";        
OrgChart.templates.ana.minus = "";
```

<Demo path="org-chart-js/hise-expnad-collapse-btn" />

**How to iterate and collapse all nodes and then expand by level:**

<Demo path="org-chart-js/collapse-all-iteration" />

## onExpandCollpaseButtonClick event

To define custom expand/collapse logic use onExpandCollpaseButtonClick event.
[Here](https://balkan.app/OrgChartJS-Demos/DecisionTree) is a demo that you can use to get started.

**How to iterate and collapse all on minus button click:**

<Demo path="org-chart-js/collapse-all-on-expcollclick" />

## Number of nodes

To display the number of the direct children change the template as follows:

```javascript id="g3n9h1"
OrgChart.templates.ana.plus = 
    `<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>
    <text text-anchor="middle" style="font-size: 18px;cursor:pointer;" fill="#757575" x="15" y="22">{children-count}</text>`;
OrgChart.templates.ana.minus = 
    `<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>
    <text text-anchor="middle" style="font-size: 18px;cursor:pointer;" fill="#757575" x="15" y="22">{children-count}</text>`;
```

<Demo path="org-chart-js/children-count" />

To display the number of the total children change the template as follows:

```javascript id="v8k2d6"
OrgChart.templates.ana.plus = 
    `<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>
    <text text-anchor="middle" style="font-size: 18px;cursor:pointer;" fill="#757575" x="15" y="22">{children-total-count}</text>`;
OrgChart.templates.ana.minus = 
    `<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>
    <text text-anchor="middle" style="font-size: 18px;cursor:pointer;" fill="#757575" x="15" y="22">{children-total-count}</text>`;
```

<Demo path="org-chart-js/children-total-count" />

To display the number of the direct collapsed children change the template as follows:

```javascript id="m6s1p4"
OrgChart.templates.ana.plus = 
    `<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>
    <text text-anchor="middle" style="font-size: 18px;cursor:pointer;" fill="#757575" x="15" y="22">{collapsed-children-count}</text>`;
```

<Demo path="org-chart-js/number-of-children" />

To display the number of the total collapsed nodes change the template as follows:

```javascript id="t4c9x2"
OrgChart.templates.ana.plus = 
    `<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#aeaeae" stroke-width="1"></circle>
    <text text-anchor="middle" style="font-size: 18px;cursor:pointer;" fill="#757575" x="15" y="22">{collapsed-children-total-count}</text>`;
```

<Demo path="org-chart-js/number-of-total-children" />

## Dynamic Expand/Collapse

You can use a function to define the Expand/Collapse buttons.

Here are the node properties that you can use:

* **node.childCount** - number of direct children
* **node.deepChildCount** - total number of children
* **node.collapsedChildCount** - number of direct collapsed children
* **node.deepCollapsedChildCount** - total number of collapsed children

```javascript id="u7b3k9"
OrgChart.templates.ana.plus = function(node, data, template, config){
return `<g transform="matrix(1,0,0,1,${node.w},${node.h})">
    <rect x="-50" y="-30" height="20" width="40" fill="#fff" stroke-width="1" stroke="#aeaeae" rx="7" ry="7"></rect>
    <line x1="-40" y1="-20" x2="-30" y2="-20" stroke="#757575" stroke-width="1"></line>
    <line x1="-35" y1="-15" x2="-35" y2="-25" stroke="#757575" stroke-width="1"></line>
    <text x="-15" y="-14" text-anchor="end" style="font-size: 18px;cursor:pointer;" fill="#757575">${node.childCount}</text>
</g>`;
};

OrgChart.templates.ana.minus = function(node, data, template, config){
return `<g transform="matrix(1,0,0,1,${node.w},${node.h})">
    <rect x="-50" y="-30" height="20" width="40" fill="#fff" stroke-width="1" stroke="#aeaeae" rx="7" ry="7"></rect>
    <line x1="-40" y1="-20" x2="-30" y2="-20" stroke="#757575" stroke-width="1"></line>
    <text x="-15" y="-14" text-anchor="end" style="font-size: 18px;cursor:pointer;" fill="#757575">${node.childCount}</text>
</g>`;
};
```

<Demo path="orgchart-js/plus-minus-function" />

## Expand Up

Using the Up level functionality you can expand one level up.

The functionality is available when you have defined roots in the chart configuration:

```javascript
roots: [3]
```

<Demo path="org-chart-js/expand-up" />

You can remove the Up level functionality by setting the Up field to empty string:

```javascript id="h3p6w1"
OrgChart.templates.ana.up = "";
```

Or you can change it. This is the Up field definition:

```javascript id="k8r2z5"
OrgChart.templates.ana.up = 
    `<rect x="20" y="-25" width="30" height="17" fill="#aeaeae" rx="3" ry="3"></rect>
    <line x1="35" x2="35" y1="0" y2="-8" stroke="#aeaeae" stroke-width="1"></line>`;
```

