---
outline: deep
head:
  - - meta
    - property: og:image
      content: https://balkan.app/Content/img/oc.png
  - - meta
    - property: og:title
      content: Sub Trees | OrgChart JS
---



# Sub Trees

**OrgChart JS** supports an unlimited number of sub trees in a single chart.

## Define sub tree

Defining a sub tree is very easy — use `stpid` instead of `pid` in your nodes data.

- `stpid` = sub tree parent id  

Example:

```javascript
let chart = new OrgChart(document.getElementById("tree"));

chart.load([
    { id: 0 }, 
    { id: 1, pid: 0 }, 
    { id: 2, stpid: 1 }, 
    { id: 3, pid: 2 }
]);
```

In this example, node `2` becomes the root of a sub tree.

<Demo path="org-chart-js/subtrees" height="700px" />

## Custom template for sub tree nodes

By default, all nodes use the same template.
To highlight nodes that contain sub trees, use tags.

<Demo path="org-chart-js/group-template" height="700px" />

The built-in template for sub tree nodes is **`group`**.
You can define your own custom template if needed.

## Sub tree orientation

You can configure different layouts for sub trees using `subTreeConfig`.

<Demo path="org-chart-js/subtree-orientation" />

## subTreeConfig options

```javascript
tags: {
    "node-with-subtrees": {
        subTreeConfig: {
            orientation: OrgChart.orientation.left,
            levelSeparation: 100,
            mixedHierarchyNodesSeparation: 15,
            subtreeSeparation: 50,
            siblingSeparation: 20,
            layout: OrgChart.mixed,
            columns: 2,
            collapse: {
                level: 1
            }
        }
    }
}
```

## Sub tree inside sub tree

<Demo path="org-chart-js/subtree-in-a-subtree" height="700px" />

## Group nodes

<Demo path="org-chart-js/group-nodes" />

To change spacing between grouped nodes, adjust `columns` and `siblingSeparation` in `subTreeConfig`.

## Simulate different layouts

You can simulate multiple orientations or multiple parents using the `invisibleGroup` template.

<Demo path="org-chart-js/simulate-diffrent-oriantations" />

## Minimize / Maximize

You can minimize or maximize nodes using menu actions, buttons, or links.

<Demo path="org-chart-js/subtree-minimize-maximize" />

This works for nodes with and without sub trees.

For more information on how to minimize or maximize a node see [Minimize/Maximize node](https://balkan.app/OrgChartJS/Docs/MinMax)
