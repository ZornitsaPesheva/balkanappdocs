---
outline: deep
head:
  - - meta
    - property: og:image
      content: https://code.balkan.app/screenshot/org-chart-js/olivia
  - - meta
    - property: og:title
      content: Crating Custom Templates | OrgChart JS
---


# Crating Custom Templates


In some cases, you may want to create your own custom template. To do that, inherit one of the predefined templates and override some of its properties.

## OrgChart JS visual components {#components}

You can customize the following **OrgChart JS** components:

1. Node
2. Fields
3. Image
4. Link
5. Node menu button
6. Expand/Collapse button
7. Menu button
8. Move icon

The first thing you need to do is inherit one of the existing templates:

```js
OrgChartJS.templates.myTemplate = Object.assign({}, OrgChartJS.templates.@{@Model.DefaultTemplate});
````

## Node customization {#node}

To change the color, shape, or size of the node, define `node` and `size`.

Here is an example:

```js
OrgChartJS.templates.myTemplate.size = [200, 200];
OrgChartJS.templates.myTemplate.node =
    '<circle cx="100" cy="100" r="100" fill="#4D4D4D" stroke-width="1" stroke="#aeaeae"></circle>';
OrgChartJS.templates.myTemplate.defs = '';
```

You will also need to modify the `ripple` configuration: color, radius, and rect.

```js
OrgChartJS.templates.myTemplate.ripple = {
    radius: 100,
    color: "#e6e6e6",
    rect: null
};
```

Or you can disable the `ripple`:

```js
OrgChartJS.templates.myTemplate.ripple = {
    radius: 0,
    color: "none",
    rect: null
};
```

## Field customization {#field}

To change the fields, define `field_0` and `field_1`. You can define as many fields as you want.

```js
OrgChartJS.templates.myTemplate.field_0 = 
    `<text style="font-size: 24px;" fill="#ffffff" x="100" y="90" text-anchor="middle">{val}</text>`;

OrgChartJS.templates.myTemplate.field_1 = 
    `<text style="font-size: 16px;" fill="#ffffff" x="100" y="60" text-anchor="middle">{val}</text>`;
```

You can rotate the text using `transform`.

```js
OrgChartJS.templates.myTemplate.field_0 =
    `<text width="230" transform="translate(300, -70) rotate(90)" style="font-size: 18px;" fill="#fff" x="125" y="95" text-anchor="middle">
        {val}
    </text>`;
```

## Image customization {#image}

To change the position of the image, define `img_0`.

```js
OrgChartJS.templates.myTemplate.img_0 =
    `<clipPath id="ulaImg"><circle cx="100" cy="150" r="40"></circle></clipPath>
    <image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="60" y="110" width="80" height="80"></image>`;
```

## Link customization {#link}

To change the links between nodes, override `link`.

```js
OrgChartJS.templates.myTemplate.link =
    `<path stroke="#686868" stroke-width="1px" fill="none" data-l-id="[{id}][{child-id}]" d="M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}" />`;
```

## Node menu button customization {#nodeMenu}

To change the position and shape of the node menu button, define `nodeMenuButton`.

```js
OrgChartJS.templates.myTemplate.nodeMenuButton =
    `<g style="cursor:pointer;" transform="matrix(1,0,0,1,93,15)" data-ctrl-n-menu-id="{id}">
        <rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect>
        <line x1="0" y1="0" x2="0" y2="10" stroke-width="2" stroke="rgb(255, 202, 40)" />
        <line x1="7" y1="0" x2="7" y2="10" stroke-width="2" stroke="rgb(255, 202, 40)" />
        <line x1="14" y1="0" x2="14" y2="10" stroke-width="2" stroke="rgb(255, 202, 40)" />
    </g>`;
```

## Expand/Collapse button customization {#expandCollapse}

To change the shape and color, define `plus`, `minus`, and `expandCollapseSize`.

```js
OrgChart.templates.myTemplate.plus =
    `<rect x="0" y="0" width="36" height="36" rx="12" ry="12" fill="#2E2E2E" stroke="#aeaeae" stroke-width="1"></rect>
    <line x1="4" y1="18" x2="32" y2="18" stroke-width="1" stroke="#aeaeae"></line>
    <line x1="18" y1="4" x2="18" y2="32" stroke-width="1" stroke="#aeaeae"></line>`;

OrgChart.templates.myTemplate.minus =
    `<rect x="0" y="0" width="36" height="36" rx="12" ry="12" fill="#2E2E2E" stroke="#aeaeae" stroke-width="1"></rect>
    <line x1="4" y1="18" x2="32" y2="18" stroke-width="1" stroke="#aeaeae"></line>`;

OrgChart.templates.myTemplate.expandCollapseSize = 36;
```

## Menu button customization {#menu}

To change the shape and color, define `menuButton`.

```js
OrgChartJS.templates.myTemplate.menuButton =
    `<div style="position:absolute;right:{p}px;top:{p}px; width:40px;height:50px;cursor:pointer;" data-ctrl-menu="">
        <hr style="background-color: rgb(255, 202, 40); height: 3px; border: none;">
        <hr style="background-color: rgb(255, 202, 40); height: 3px; border: none;">
        <hr style="background-color: rgb(255, 202, 40); height: 3px; border: none;">
    </div>`;
```

## Move icon customization {#move}

To change the tree move icon, define `pointer`.

```js
OrgChartJS.templates.myTemplate.pointer =
    `<g data-pointer="pointer" transform="matrix(0,0,0,0,100,100)">
        <g transform="matrix(0.3,0,0,0.3,-17,-17)">
            <polygon fill="rgb(255, 202, 40)" points="53.004,173.004 53.004,66.996 0,120" />
            <polygon fill="rgb(255, 202, 40)" points="186.996,66.996 186.996,173.004 240,120" />
            <polygon fill="rgb(255, 202, 40)" points="66.996,53.004 173.004,53.004 120,0" />
            <polygon fill="rgb(255, 202, 40)" points="120,240 173.004,186.996 66.996,186.996" />
            <circle fill="rgb(255, 202, 40)" cx="120" cy="120" r="30" />
        </g>
    </g>`;
```

Voila, here is the result:

<Demo path="org-chart-js/custom-template" />

## Function definition {#func}

The examples above define template properties as strings.
You can also use a function for the properties below to create dynamic templates:

* `nodeMenuButton`
* `node`
* `minus`
* `plus`
* `fields`

### Node example {#nodefunc}

```js
OrgChart.templates.ana.node = function(node, data, template, config){
    let fill = '#4D4D4D';
    if (data.title == "IT Manager"){
        fill = '#FFCA28';
    }
    return `<rect x="0" y="0" height="${node.h}" width="${node.w}" fill="${fill}" stroke-width="1" stroke="#aeaeae" rx="10" ry="10"></rect>`;
}
```

<Demo path="orgchart-js/dynamic-template-definition" />

### Node properties list {#list}

Here is a list of the node properties that you can use in the node definition:

```js
node.templateName = templateName;
node.id = id;
node.pid = pid;
node.children = [];
node.childrenIds = [];
node.parent = null;
node.stpid = null;
node.stParent = null;
node.stChildren = [];
node.stChildrenIds = [];
node.tags = tags;
node.childCount = 0;
node.collapsedChildCount = 0;
node.deepCollapsedChildCount = 0;
node.deepChildCount = 0;
node.leftNeighbor = null;
node.rightNeighbor = null;
node.x = null;
node.y = null;
node.lcn = undefined; //layout config name
node.isAssistant = undefined;
node.subLevels = undefined;
node.stContainerNodes = undefined;
node.w;
node.collapsed = false;
node.h;
node.order
node.padding = [10,10,10,10]
node.isSplit
node.isMirror
node.movex
node.movey
node.level = undefined;
node.min = false;
node.hasPartners = undefined;
node.hasAssistants = undefined;
node.sl = undefined //structire level;
node.isPartner = undefined; // 1
node.ppid
node.partnerSeparation = undefinded;
node.parentPartner = undefinded;
node.isChildOfPartner = undefined;
node.isTreeListItem = true // undefined;
```

## Dynamic field {#fieldfunc}

You can create a dynamic field using a function.

For example, you can add a clickable link that opens another page:

```js
OrgChart.templates.olivia.field_0 = function(node, data, template, config){
    return `<text data-width="${node.w - 20}"
                    style="font-size: 20px;"
                    class="olivia-f0"
                    x="${node.w / 2}" y="${node.h / 2}"
                    text-anchor="middle">
        <a href="${data.link}" target="blank">${data.name}</a>
    </text>`
};
```

<Demo path="orgchart-js/dynamic-field" />

### nodeMenuButton example {#nmbfunc}

```js
OrgChart.templates.myGroup.nodeMenuButton = function (node, data, template, config) {
    return `<g style="cursor:pointer;" transform="matrix(1,0,0,1,${node.w - 25},25)" data-ctrl-n-menu-id="${node.id}">
                <g transform="matrix(1,0,0,1,-22,-8)">
                    <rect x="0" y="0" fill="red" fill-opacity="0" width="22" height="22"></rect>
                    <line x1="0" y1="2" x2="22" y2="2" stroke="#aeaeae" stroke-width="1"></line>
                    <line x1="0" y1="9" x2="22" y2="9" stroke="#aeaeae" stroke-width="1"></line>
                    <line x1="0" y1="16" x2="22" y2="16" stroke="#aeaeae" stroke-width="1"></line>
                </g>
            </g>`
    };
```

<Demo path="orgchart-js/dynamic-nodemenubutton" />

If you have any difficulties creating a template, please [contact us](https://balkan.app/OrgChartJS/Support). We will create a template that matches your project design for free.

[Code demo](https://code.balkan.app/org-chart-js/two-charts-in-one-page#JS) showing how to create multiple charts on one page with different template definitions.

Below is a screenshot, provided to us by a [client](https://github.com/BALKANGraph/OrgChartJS/issues/39#issuecomment-474164351), that demonstrates how customizable OrgChart JS is.

![Client custom OrgChart JS template](https://cdn.balkan.app/shared/client.png)

In our [Demos](https://balkan.app/OrgChartJS/Demos) you can find some of our customers' templates.

We would be happy if you share your template with us. Please send it as a jsfiddle or HTML file to [support@balkan.app](mailto:support@balkan.app?subject=myTemplate).

```
```

