---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
  - - meta
    - property: og:title
      content: Node API | OrgChart JS
---


# Node API

There are two types of nodes: source node and node model.  
The source node is the data you provided in **OrgChart JS** options or when calling `load([source nodes array])`.  
The node model represents how the boxes are visualized.

To get node model object you can use `chart.getNode(id)`.  
To get the source node object you can call `chart.get(id)`.

## Node model (let node = chart.getNode(id))

- **id** - the same id you provided in the source node  
- **pid** - same pid you provided in the source node  
- **parent** - reference to the parent node  
- **stpid** - sub tree parent id  
- **stParent** - reference to sub tree parent node  
- **pppid** - partner parent id  
- **parnerSeparation** - distance between partner node and parent node  
- **childrenIds** - array of ids  
- **children** - array of children nodes  
- **stChildrenIds** - array of sub tree children root node ids  
- **stChildren** - array of sub tree children root nodes  
- **tags** - array of string values  
- **templateName** - template name  
- **leftNeighbor** - reference to the left node neighbor  
- **rightNeighbor** - reference to the right node neighbor  
- **x** - x position  
- **y** - y position  
- **w** - width of the node  
- **h** - height of the node  
- **isAssistant** - indicates assistant node  
- **stContainerNodes** - sub tree container nodes  
- **order** - order value  
- **collapsed** - collapse state  
- **level** - level starting from zero  
- **sl** - structure level  
- **min** - minimized state  
- **subLevels** - sub levels  
- **padding** - padding  
- **lcn** - layout configuration name  
- **isSplit** - dynamic split node  

Full API:  
https://balkan.app/OrgChartJS/API/interfaces/OrgChart.node

## Source Node (let node = chart.get(id))

- **id** - node id (mandatory)  
- **pid** - parent id (optional)  
- **stpid** - sub tree parent id (optional)  
- **tags** - tags (optional)  
- **...n** - other fields  

## How to iterate through nodes?

You should put the `onInit` method before `chart.load()`:

```javascript
function iterate(c, n){
    if (Array.isArray(n)){
        for(let i = 0; i < n.length; i++){
            iterate(c, n[i])
        }
        return;
    }

    console.log(n.id);
        
    for(let i = 0; i < n.stChildrenIds.length; i++){
        iterate(c, c.getNode(n.stChildrenIds[i]))
    }
        
    for(let i = 0; i < n.childrenIds.length; i++){
        iterate(c, c.getNode(n.childrenIds[i]))
    }
}

chart.onInit(() => {
    iterate(chart, chart.roots)
});
```

Iteration through node structure including dynamic nodes (splits), skips collapsed and minimized subtrees:

```javascript 
function iterate(c, n){
    if (Array.isArray(n)){
        for(let i = 0; i < n.length; i++){
            iterate(c, n[i])
        }
        return;
    }

    console.log(n.id);
        
    for(let i = 0; i < n.stChildren.length; i++){
        iterate(c, n.stChildren[i])
    }
        
    for(let i = 0; i < n.children.length; i++){
        iterate(c, n.children[i])
    }
}

chart.onInit(() => {
    iterate(chart, chart.roots)
});
```

Iteration through visible nodes on the screen:

```javascript
chart.onInit(() => {
    for(let i = 0; i < chart.visibleNodeIds.length; i++){
        let vnode = chart.getNode(chart.visibleNodeIds[i]);
        console.log(vnode.id);
    }
});
```

Iteration through all nodes:

```javascript
chart.onInit(() => {
    for(let id in chart.nodes){
        console.log(chart.nodes[id].id);
    }
});
```

## How to get the root node?

Get the root node of a tree:

```javascript
function getRootOf(node){
    while (node) {
        if (!node.parent){
            break;
        }
        node = node.parent;
    }
    return node;
}

chart.onInit(() => {
    let root = getRootOf(chart.getNode(4));
    console.log(root);
});
```

Get the root node if the node is child of sub tree:

```javascript
function getRootOf(node){
    while (node) {
        if (!node.parent && !node.stParent){
            break;
        }
        node = node.parent ? node.parent : node.stParent;
    }
    return node;
}

chart.onInit(() => {
    let root = getRootOf(chart.getNode(4));
    console.log(root);
});
```

## Methods

* **OrgChart.childrenCount(chart, node)** - returns number of all children
* **OrgChart.collapsedChildrenCount(chart, node)** - returns number of all collapsed children

