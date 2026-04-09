---
outline: deep
head:
  - - meta
    - property: og:image
      content: https://balkan.app/Content/img/oc.png
  - - meta
    - property: og:title
      content: Multiple Templates in one chart | OrgChart JS
---


# Multiple Templates in one chart

You can specify two or more templates in a single **OrgChart JS** instance. Here is how to use a different template for Management department nodes.

1. Add a `Management` tag to the node data. 
A `tag` is used to group nodes into sets. All nodes with the same `tag` belong to the same set. See more in the Tags doc page.

```js
{ id: "2", tags: ["Management"] }
````

2. Define the template for the `Management` tag.

```js
tags: {
    "Management": {
        template: "rony"
    }
},
```

Now all nodes with the `Management` tag will use the `rony` template for nodes, links, add/remove buttons, expand/collapse buttons, and ripple.

<Demo path="org-chart-js/multiple-templates" />




