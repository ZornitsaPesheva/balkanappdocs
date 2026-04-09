---
outline: deep
head:
  - - meta
    - property: og:image
      content: https://balkan.app/Content/img/oc.png
  - - meta
    - property: og:title
      content: Keyboard Navigation | OrgChart JS
---


# Keyboard Navigation

You can enable keyboard navigation using **keyNavigation** property:

```javascript
keyNavigation: true
```

To select the node to be focused use **focusId** property:

```javascript
keyNavigation: {
    focusId: 2
}
```

<Demo path="org-chart-js/focus-node" />

Use these keys to navigate in the chart:

* **f** - to go to find
* **Arrows** - to move up/down/left/right
* **Space** - to expand/collapse

<Demo path="org-chart-js/keyboard-navigation" />

## Key-down event

Use the **key-down** event to catch every key pressed.

You can use these 3 parameters to add key functions:

* **args.node**
* **args.data**
* **args.event**

```javascript
chart.on('key-down', function(sender, args){
    if (args.node){
        if (args.event.code == "KeyN") {
            var newData = { id: sender.generateId(), pid: args.node.id };
            sender.addNode(newData, null, true);
        }
        else if (args.event.code == "Enter" || args.event.code == "NumpadEnter") {
            sender.editUI.show(args.node.id);
        }
        else if (args.event.code === "KeyD") {
            sender.removeNode(args.node.id, null, true);
        }
        else if (args.event.code === "KeyS") {
            sender.exportSVG({
                filename: "OrgChart.svg", 
                expandChildren: false, 
                nodeId: args.node.id
            });
        }
        else if (args.event.code === "KeyP") {
            sender.exportPDF({
                filename: "OrgChart.pdf", 
                expandChildren: false, 
                nodeId: args.node.id
            });
        }
        else if (args.event.code === "KeyC") {
            sender.exportCSV();
        }
        else if (args.event.code === "KeyX") {
            sender.exportXML();
        }
    }
});
```

Use keys **"n"**, **"Enter"**, **"d"**, **"s"**, **"p"**, **"c"** and **"x"** in the following example:

<Demo path="org-chart-js/key-down" />

## Screen-reader-text event

Use the **Screen-reader-text** event to read the text using
[Screen reader](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn).

You can use these 2 parameters to read the text:

* **args.id**
* **args.text**

```javascript
chart.on('screen-reader-text', function(sender, args){
    var text = (sender.get(args.id)).name;
    args.text = text;
});
```

You need to install the
[Screen reader](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn) extension for the following example:

<Demo path="org-chart-js/screen-reader" />


