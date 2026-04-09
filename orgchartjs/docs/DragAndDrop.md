---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
  - - meta
    - property: og:title
      content: Drag and Drop | OrgChart JS
---


# Drag and Drop

<a target="_blank" href="https://www.youtube.com/watch?v=26geZxBM_4A" rel="noopener noreferrer" class="yt-hover-link">
  <div class="yt-hover-thumb">
    <img class="tn" src="https://img.youtube.com/vi/26geZxBM_4A/mqdefault.jpg" alt="Drag & Frop" width="150" height="80">
    <img class="yt" src="https://balkan.app/Content/img/youtube.jpg" alt="Drag & Frop" width="150" height="80">
  </div>
</a>

Move nodes within the hierarchy or change their position by simply dragging and dropping them.

## enableDragDrop

Enabling drag and drop allows you to move a node over another to change its parent.

```javascript
enableDragDrop: true,
```

In the example below drag and drop one of the nodes to see how it works:

<Demo path="org-chart-js/drag-and-drop" />

## Drag and Drop Events

If you want to conditionally cancel drag & drop operation use **onDrop** event listener before `chart.load()`:

```javascript id="h7s2k9"
chart.onDrop((args) => {
    if (args.dragId == 1){
        return false;
    }

    if (args.dropId == 4){
        return false;
    }
});
```

## Movable

Using the **movable** option, you can move a node to change its position in the tree without changing the data structure.

You have 3 options:

```javascript id="p9x4v1"
movable: OrgChart.movable.node, // moves the node
// movable: OrgChart.movable.tree, // moves a node with the tree below
// movable: OrgChart.movable.detachTree, // detaches the tree
```

You can test the functionality in this example:

<Demo path="how-to-use-draggable-option" />
```

