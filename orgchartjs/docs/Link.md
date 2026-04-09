---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
  - - meta
    - property: og:title
      content: Links | OrgChart JS
---


# Links

Links are the main connections between the nodes.  
You can have different types of links.

## Rounded link

<Demo path="org-chart-js/rounded-link" />

You can use **OrgChart.LINK_ROUNDED_CORNERS** constant to change the radius of the rounded links.

<Demo path="org-chart-js/rounded-links-corners" />

## Edge link

<Demo path="org-chart-js/edge-link" />


## Curve link

<Demo path="org-chart-js/curve-link" />

## Link Labels

Link binding in OrgChart JS maps node data to link labels.

### Nodes data

```javascript
{ id: "1" },
{ id: "2", pid: "1", createdAt: "Since 08/08/2018" },
{ id: "3", pid: "1", createdAt: "Since 05/04/2018" }
````

### Binding

```javascript id="n1q3zp"
linkBinding: {
    link_field_0: "createdAt"
},
```

<Demo path="org-chart-js/link-labels" />


Using the **label** event you can change the link labels:

<Demo path="org-chart-js/link-labels-event" />


## Links rendering

By default OrgChart JS renders links after the nodes are rendered. You can change this behavior:

```javascript id="0o7m7g"
OrgChart.RENDER_LINKS_BEFORE_NODES = true;
```

