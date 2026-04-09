---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
---

# Performance

**OrgChart JS** works well with **100,000** nodes.  
For such big data it may take several seconds for the first load from the backend server, depending on the data size.

For so many nodes we suggest loading only the visible node data, and then on node click requesting the full node data from the server.

## Load 100k nodes

Here is how to load all the nodes:

```javascript
fetch('https://balkan.app/Content/nodes.json')
    .then((response) => response.json())
    .then((data) => chart.load(data));
```

And here is how to load the data of a particular node:

```javascript id="k4m8v1"
let flag = false;
chart.editUI.on('show', function(sender, id){
    if (!flag){
        fetch(`https://balkan.app/Content/${id}.json`)
            .then((response) => response.json())
            .then((data) => {
                for(let i = 0; i < sender.obj.config.nodes.length; i++){
                    if (sender.obj.config.nodes[i].id == id){
                        sender.obj.config.nodes[i] = data;
                    }
                }
                sender.fields = Object.keys(data);
                chart.editUI.show(id)
            });
        flag = true;
        return false;	
    }
    else{
        flag = false;
    }
});
```

You can have a loading animation before the first load:

```javascript id="z2p9x6"
chart.on('init', function(sender){
    OrgChart.loading.show(sender);
});

chart.load(data, function () {
    OrgChart.loading.hide(chart);
});
```

[Here is the whole code.](https://github.com/ZornitsaPesheva/public/blob/master/100kNodes.html)

OrgChart JS is tested with 103,020 nodes on a PC with 8GB RAM:

* 8MB JSON (4 fields) → ~5 seconds
* 12MB JSON (5 fields incl. photo) → ~7 seconds

Here is an example of visualizing a big chart:

```javascript id="v8n2k5"
lazyLoading: true,
showXScroll: OrgChart.scroll.visible,
mouseScrool: OrgChart.action.xScroll,
layout: OrgChart.mixed,
scaleInitial: OrgChart.match.height,
```

Where:

* **lazyLoading** – only visible nodes are rendered in the DOM (default: true)
* **showXScroll: OrgChart.scroll.visible** – horizontal scroll bar is visible
* **mouseScrool: OrgChart.action.xScroll** – navigation with mouse scroll
* **layout: OrgChart.mixed** – last nodes aligned vertically
* **scaleInitial: OrgChart.match.height** – auto scale to fit vertically

## 5000 nodes with images

<Demo path="org-chart-js/performance" />

## Navigation with mini map

25000 nodes chart:

<Demo path="i-expect-all-22k-nodes-to-be-displayed-on-the-screen" />

