---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
  - - meta
    - property: og:title
      content: How to create an OrgChart JS programmatically | OrgChart JS
---


# How to create an OrgChart JS programmatically

There are a number of ways to create **OrgChart JS** programmatically.

## Using add function

Here is an example:

```javascript
chart.add({ id: 1, name: "Denny Curtis", title: "CEO" });
chart.add({ id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager" });
chart.draw();
```

<Demo path="org-chart-js/add" />

If you call `draw` function with `OrgChart.action.init` it will draw the chart based on `scaleInitial` and will center the graph.

## Using addNode function

If you add a node using **addNode** you will not need to call `draw` function:

```javascript
chart.addNode({ id: 1, name: "Denny Curtis", title: "CEO" });
```

<Demo path="org-chart-js/addnode" />

## Using update function

```javascript
chart.update({ id: 4, pid: 2, name: "Updated Name", title: "Updated Title" });
chart.update({ id: 1, name: "Updated Name", title: "Updated Title" });
chart.draw();
```

<Demo path="org-chart-js/update" />

## Using updateNode function

```javascript
chart.updateNode({ id: 4, pid: 2, name: "Updated Name", title: "Updated Title" });
```

<Demo path="org-chart-js/updatenode" />

## Using remove function

```javascript
chart.remove(2);
chart.draw();
```

<Demo path="org-chart-js/remove" />

## Using removeNode function

```javascript
chart.removeNode(2);
```

<Demo path="org-chart-js/remove" />


