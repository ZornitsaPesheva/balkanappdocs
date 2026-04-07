---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
---

# Menus

## OrgChart has these menus

1. **menu** – top right corner  
2. **nodeMenu** – button inside the node  
3. **nodeContextMenu** – right-click menu  
4. **nodeCircleMenu** – circular node menu  


## menu

This is the main (hamburger) menu of the chart.

```javascript
menu: {
    pdf_export: { text: "Export PDF" },
    png_export: { text: "Export PNG" },
    svg_export: { text: "Export SVG" },
    csv_export: { text: "Export CSV" },
    pp_preview: { text: "Create PowerPoint Presentation" },
    pp_export: { text: "Export to PowerPoint" }
},
```

<Demo path="orgchart-js/menu" />

### Predefined menu items

Same as controls (export, zoom, layout, etc.)

## Node Menu

This menu opens from the node button.

```javascript
nodeMenu: {
    details: { text: "Details" },
    edit: { text: "Edit" },
    add: { text: "Add" },
    remove: { text: "Remove" }
},
```

<Demo path="org-chart-js/menus" />

### Predefined nodeMenu items

* add
* remove
* edit
* details
* * all export / layout / zoom options

## Custom node menu item

```javascript
let webcallMeIcon = `<svg width="24" height="24">...</svg>`;
```

```javascript id="custom-node-menu"
nodeMenu: {
    call: {
        icon: webcallMeIcon,
        text: "Call now",
        onClick: callHandler
    }
},
```

```javascript id="call-handler"
function callHandler(nodeId) {
    let nodeData = chart.get(nodeId);
    let employeeName = nodeData["name"];
    window.open(
        'https://webcall.me/' + employeeName,
        employeeName,
        'width=340px,height=670px'
    );
}
```

<Demo path="org-chart-js/add-menu-item" />

## Override node menu using tags

```javascript
nodeMenu: {
    pdf: { text: "Export To Pdf" }
}
```

```javascript id="override-tags"
tags: {
    overrideMenu: {
        nodeMenu: {
            edit: { text: "Edit" }
        }
    }
}
```

```javascript id="override-node"
{ id: 2, pid: 1, tags: ["overrideMenu"] }
```

<Demo path="org-chart-js/override-menu" />

## Node Context Menu

Opens on right-click.

```javascript
nodeContextMenu: {
    edit: { text: "Edit", icon: OrgChart.icon.edit(18, 18, '#039BE5') },
},
```

<Demo path="orgchart-js/nodecontextmenu" />

## Override menus with on show

```javascript
chart.nodeMenuUI.on('show', function(sender, args){
    args.menu = {
        myMenuItem: {
            text: "My Text",
            icon: OrgChart.icon.add(16,16,"#ccc"),
            onClick: function(id){ alert(id) }
        }
    }
});

chart.menuUI.on('show', function(sender, args){
    args.menu = { ...args.menu }
});

chart.nodeContextMenuUI.on('show', function(sender, args){
    args.menu = { ...args.menu }
});
```

<Demo path="org-chart-js/menu-on-show-event" />

## Custom icons

<Demo path="orgchart-js/custom-icons" />

## Node Circle Menu

### 1) Define button

```javascript
OrgChart.templates.ana.nodeCircleMenuButton = {
    radius: 18,
    x: 250,
    y: 60,
    color: '#fff',
    stroke: '#aeaeae'
};
```

### 2) Configure menu

```javascript id="circle-menu"
nodeCircleMenu: {
    addNode: {
        icon: OrgChart.icon.add(24, 24, '#aeaeae'),
        text: "Add node",
        color: "white"
    },
    editNode: {
        icon: OrgChart.icon.edit(24, 24, '#aeaeae'),
        text: "Edit node",
        color: "white"
    },
    addClink: {
        icon: OrgChart.icon.link(24, 24, '#aeaeae'),
        text: "Add C link",
        color: '#fff',
        draggable: true
    }
}
```

### 3) Show event

```javascript id="circle-show"
chart.nodeCircleMenuUI.on('show', function (sender, args){
    let node = chart.getNode(args.nodeId);
    if (args.menu.delete) delete args.menu.delete;

    if (node.parent) {
        args.menu.delete = {
            icon: OrgChart.icon.remove(24, 24, '#aeaeae'),
            text: "Remove node",
            color: "white"
        };
    }
});
```

### 4) Events

```javascript id="circle-click"
chart.nodeCircleMenuUI.on('click', function (sender, args) {
    switch (args.menuItem.text) {
        case "Add node":
            let id = chart.generateId();
            chart.addNode({ id: id, pid: args.nodeId });
            break;
        case "Edit node":
            chart.editUI.show(args.nodeId);
            break;
        case "Remove node":
            chart.removeNode(args.nodeId);
            break;
    }
});
```

```javascript id="circle-drop"
chart.nodeCircleMenuUI.on('drop', function (sender, args) {
    chart.addClink(args.from, args.to).draw(OrgChart.action.update);
});
```

```javascript id="circle-hover"
chart.nodeCircleMenuUI.on('mouseenter', function (sender, args) {
    if (args.menuItem.text == "Remove node") {
        document.querySelector('[data-n-id="' + args.from + '"]').style.opacity = 0.5;
    }
});
```

```javascript id="circle-out"
chart.nodeCircleMenuUI.on('mouseout', function (sender, args) {
    document.querySelector('[data-n-id="' + args.from + '"]').style.opacity = 1;
});
```

<Demo path="org-chart-js/node-circle-menu" />

## Custom node circle menu via tags

```javascript id="circle-tags"
tags:{
    overrideMenu:{
        nodeCircleMenu: {
            addNode: {
                icon: OrgChart.icon.add(24, 24, '#aeaeae'),
                text: "Add node",
                color: "white"
            },
            editNode: {
                icon: OrgChart.icon.edit(24, 24, '#aeaeae'),
                text: "Edit node",
                color: "white"
            },
            editNode1: {
                icon: OrgChart.icon.edit(24, 24, '#F57C00'),
                text: "Edit node 1",
                color: "white"
            },
            addClink: {
                icon: OrgChart.icon.link(24, 24, '#aeaeae'),
                text: "Add C link",
                color: '#fff',
                draggable: true
            }
        }
    }
}
```

<Demo path="org-chart-js/custom-node-circle-menu" />
