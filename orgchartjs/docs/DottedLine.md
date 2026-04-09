---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
---

# Dotted lines

If an employee has a dotted line manager it means that, in addition to reporting to their direct manager, they also report indirectly to a secondary manager or supervisor (who may be in another team).

## example

```javascript
dottedLines: [
    { from: 5, to: 1 },
],
```

<Demo path="org-chart-js/dotted-line" />

## templates

Here is how to change the **template** for the dotted line nodes:

```javascript id="m4k2v7"
dottedLines: [
    { from: 5, to: 1, tags: ["ula"] },
],
tags: {
    "ula": {
        template: "ula"
    }
},
```

<Demo path="org-chart-js/dotted-line-templates" />

## css

Here is how to change the **CSS** for the dotted line nodes:

```css id="c8p1z5"
.link.boc-dotted-connector path, .node.boc-dotted-connector rect {
    stroke-dasharray: 5;
    stroke: rgb(255, 202, 40);
}
```

<Demo path="org-chart-js/dotted-lines-css#CSS" />

## children

You can use **rootId** to add children to dotted line nodes:

```javascript id="t9x6k3"
dottedLines: [
    { from: 5, to: 1 },
    { from: 4, to: 5, rootId: 1 },
],
```

<Demo path="org-chart-js/root-id" />

## groups

You can define dotted line **groups**:

```javascript id="r2v7m8"
groupDottedLines: [
    { from: 5, to: 2 }
],

tags: {
    "group-dotted-lines": {
        min: false,
        template: "group_dotted_lines"
    }
}
```

<Demo path="org-chart-js/dotted-line-groups" />
