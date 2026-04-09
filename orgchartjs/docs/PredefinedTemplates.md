---
outline: deep
head:
  - - meta
    - property: og:image
      content: https://balkan.app/Content/img/oc.png
  - - meta
    - property: og:title
      content: Predefined Templates | OrgChart JS
---


# Predefined Templates

## Modes {#modes}

**OrgChart JS** can be displayed in **"dark"** or **"light"** mode by setting the `mode` option:

light mode:
<Demo path="org-chart-js/light-mode" />

Dark mode:
<Demo path="org-chart-js/dark-mode" />

````md id="76144"
# Predefined Templates

OrgChart JS comes with a number of predefined templates. You can change the template by setting the `template` option:

```js
template: "olivia",
````

You can get the source code of any template and customize it. For example, to change the size of the node shape, update the `size` definition of the template.

The default template is **ana**. All predefined templates inherit from **ana**. If a predefined property is missing in your template, you can inherit it from the `ana` template.

## ana {#anaTemplate}

<Demo path="org-chart-js/ana" />

::: details Source code of **ana**

```js
OrgChart.templates.ana.defs = '';

OrgChart.templates.ana.size = [250, 120];

OrgChart.templates.ana.linkAdjuster = {
    fromX: 0,
    fromY: 0,
    toX: 0,
    toY: 0
};

OrgChart.templates.ana.ripple = {
    radius: 0,
    color: "#e6e6e6",
    rect: null
};

OrgChart.templates.ana.expandCollapseSize = 30;

OrgChart.templates.ana.svg =
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        style="display:block;" width="{w}" height="{h}" viewBox="{viewBox}">{content}
    </svg>`;

OrgChart.templates.ana.link =
    `<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="{rounded}" />`;

OrgChart.templates.ana.assistanseLink =
    `<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none"
            d="M{xa},{ya} {xb},{yb} {xc},{yc} {xd},{yd} L{xe},{ye}"/>`;

OrgChart.templates.ana.node = function(node, data, template, config){
    return `<rect x="0" y="0" height="${node.h}" width="${node.w}"
                fill="#039BE5" stroke-width="1" stroke="#aeaeae" rx="10" ry="10">
            </rect>`;
};

OrgChart.templates.ana.plus = function(node, data, template, config, defaultPosition){
    var fill = config.mode == 'dark' ? '#1E1E1E' : '#ffffff';
    return `<g transform="matrix(1,0,0,1,${defaultPosition.x - 15},${defaultPosition.y - 15})">
                <circle cx="15" cy="15" r="15" fill="${fill}" stroke="#aeaeae" stroke-width="1"></circle>
                <text text-anchor="middle" style="font-size: 14px;cursor:pointer;" fill="#aeaeae" x="15" y="21">
                    ${node.deepCollapsedChildCount}
                </text>
            </g>`;
};

OrgChart.templates.ana.minus = function(node, data, template, config, defaultPosition){
    var fill = config.mode == 'dark' ? '#1E1E1E' : '#ffffff';
    return `<g transform="matrix(1,0,0,1,${defaultPosition.x - 15},${defaultPosition.y - 15})">
                <circle cx="15" cy="15" r="15" fill="${fill}" stroke="#aeaeae" stroke-width="1"></circle>
                <line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#aeaeae"></line>
            </g>`;
};

OrgChart.templates.ana.up =
    `<rect x="20" y="-25" width="30" height="17" fill="#aeaeae" rx="3" ry="3"></rect>
    <line x1="35" x2="35" y1="0" y2="-8" stroke="#aeaeae" stroke-width="1"></line>`;

OrgChart.templates.ana.nodeMenuButton = function(node, data, template, config){
    return  `<g transform="matrix(1,0,0,1,${node.w - 25},${node.h - 15})">
                <rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect>
                <circle cx="0" cy="0" r="2" fill="#ffffff"></circle>
                <circle cx="7" cy="0" r="2" fill="#ffffff"></circle>
                <circle cx="14" cy="0" r="2" fill="#ffffff"></circle>
            </g>`;
};

OrgChart.templates.ana.menuButton = OrgChart.templates.base.menuButton;

OrgChart.templates.ana.img_0 = function(node, data, template, config, value){
    var cx = 50;
    var cy = 30;
    var r = 40;
    var randId = OrgChart.randomId();
    return `<clipPath id="${randId}"><circle cx="${cx}" cy="${cy}" r="${r}"></circle></clipPath>
            <image preserveAspectRatio="xMidYMid slice" clip-path="url(#${randId})" xlink:href="${value}"
                x="${cx - r}" y="${cy - r}" width="${r * 2}" height="${r * 2}" >
            </image>`;
};

OrgChart.templates.ana.link_field_0 =
    `<text text-anchor="middle" fill="#aeaeae" ${OrgChart.attr.width}="290" x="0" y="0" style="font-size:10px;">
        {val}
    </text>`;

OrgChart.templates.ana.field_0 = function(node, data, template, config, value){
    return OrgChart.wrapText(value, 
        `<text style="font-size: 18px;" fill="#ffffff" x="${node.w / 2}" y="${node.h -25}" text-anchor="middle"></text>`, 
        node.w - 20, 1);
};

OrgChart.templates.ana.field_1 = function(node, data, template, config, value){
    return OrgChart.wrapText(value, 
        `<text style="font-size: 14px;" fill="#ffffff" x="${node.w - 20}" y="30" text-anchor="end"></text>`, 
        node.w - 120, 3)
};

OrgChart.templates.ana.padding = [75, 5, 50, 5];

OrgChart.templates.ana.editFormHeaderColor = '#039BE5';

OrgChart.templates.ana.treeListMaxHeight = 500;
```
:::

## olivia {#oliviaTemplate}

<Demo path="org-chart-js/olivia" />

::: details Source code of **olivia**

```js
OrgChart.templates.olivia = Object.assign({}, OrgChart.templates.ana);

OrgChart.templates.olivia.defs = `<style>
                                    #olivia_gradient {
                                        --color-stop-1: #ffffff;
                                        --color-stop-2: #eeeeee;
                                        --opacity-stop: 1;
                                    }
                                    .olivia-f0{
                                        font-size: 18px;
                                        fill: #757575;
                                    }
                                    .olivia-f1{
                                        font-size: 14px;
                                        fill: #757575;
                                    }
                                    .boc-dark .olivia-f0,.boc-dark .olivia-f1{
                                        fill: #aeaeae;
                                    }
                                    .boc-dark #olivia_gradient {
                                        --color-stop-1: #646464;
                                        --color-stop-2: #363636;
                                        --opacity-stop: 1;
                                    }
                                </style>
                                <linearGradient id="olivia_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stop-color="var(--color-stop-1)" stop-opacity="var(--opacity-stop)"/>
                                    <stop offset="100%" stop-color="var(--color-stop-2)" stop-opacity="var(--opacity-stop)" />
                                </linearGradient>`;

OrgChart.templates.olivia.field_0 = function(node, data, template, config, value){
    return OrgChart.wrapText(
        value, `<text class="olivia-f0" x="100" y="55"></text>`, node.w - 105, 1);
};

OrgChart.templates.olivia.field_1 = function(node, data, template, config, value){
    return OrgChart.wrapText(
        value, `<text class="olivia-f1" x="100" y="76"></text>`, node.w - 105, 3);
};

OrgChart.templates.olivia.node = function(node, data, template, config){
    return `<rect fill="url(#olivia_gradient)" x="0" y="0" height="${node.h}" width="${node.w}" 
                stroke-width="1" stroke="#aeaeae" rx="10" ry="10">
            </rect>`;
};

OrgChart.templates.olivia.img_0 = 
        `<clipPath id="{randId}"><circle cx="50" cy="60" r="40"></circle></clipPath>
        <image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" 
            x="10" y="20" width="80" height="80" >
        </image>`;

OrgChart.templates.olivia.nodeMenuButton = function(node, data, template, config){
    return `<g style="cursor:pointer;" transform="matrix(1,0,0,1,${node.w - 25},${node.h - 15})">
                <rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect>
                <circle cx="0" cy="0" r="2" fill="#AEAEAE"></circle>
                <circle cx="7" cy="0" r="2" fill="#AEAEAE"></circle>
                <circle cx="14" cy="0" r="2" fill="#AEAEAE"></circle>
            </g>`
};

OrgChart.templates.olivia.padding = [110, 15, 30, 15];
```
:::

## diva {#divaTemplate}

<Demo path="org-chart-js/diva" />

::: details Source code of **diva**

```js
OrgChart.templates.diva = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.diva.size = [200, 170];
OrgChart.templates.diva.padding = [160, 10, 30, 10];

OrgChart.templates.diva.node = function(node, data, template, config){
    return `<rect x="0" y="80" height="${node.h - 80}" width="${node.w}" fill="#039BE5"></rect>
            <circle cx="${node.w / 2}" cy="50" fill="#ffffff" r="50" stroke="#039BE5" stroke-width="2"></circle>`;
};

OrgChart.templates.diva.img_0 = function(node, data, template, config, value){ 
    var cx = node.w / 2;
    var cy = 50;
    var r = 45;
    var randId = OrgChart.randomId();
    return `<clipPath id="${randId}"><circle cx="${cx}" cy="${cy}" r="${r}"></circle></clipPath>
            <image preserveAspectRatio="xMidYMid slice" clip-path="url(#${randId})" xlink:href="${value}" 
                x="${cx - r}" y="${cy - r}" width="${r * 2}" height="${r * 2}" >
            </image>`;
}

OrgChart.templates.diva.field_0 = function(node, data, template, config, value){
    return OrgChart.wrapText(
        value, `<text style="font-size: 18px;" fill="#ffffff" x="${node.w / 2}" y="125" text-anchor="middle"></text>`, 
        node.w - 15, 1);
};

OrgChart.templates.diva.field_1  = function(node, data, template, config, value){
    return OrgChart.wrapText(
        value,`<text  style="font-size: 14px;" fill="#ffffff" x="${node.w / 2}" y="145" text-anchor="middle"></text>`, 
        node.w - 15, 1);
};
OrgChart.templates.diva.pointer = 
        `<g data-pointer="pointer" transform="matrix(0,0,0,0,100,100)">
            <radialGradient id="pointerGradient"><stop stop-color="#ffffff" offset="0" />
                <stop stop-color="#039BE5" offset="1" />
            </radialGradient>
            <circle cx="16" cy="16" r="16" 
                stroke-width="1" stroke="#acacac" fill="url(#pointerGradient)">
            </circle>
        </g>`;

OrgChart.templates.diva.nodeMenuButton = function(node, data, template, config){
    return 
        `<g transform="matrix(1,0,0,1,${node.w - 30}, ${node.h - 15})">
            <rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect>
            <circle cx="0" cy="0" r="2" fill="#ffffff"></circle>
            <circle cx="7" cy="0" r="2" fill="#ffffff"></circle>
            <circle cx="14" cy="0" r="2" fill="#ffffff"></circle>
        </g>`;
}
```
:::

## mila {#milaTemplate}

<Demo path="org-chart-js/mila" />

::: details Source code of **mila**

```js
OrgChart.templates.mila = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.mila.padding = [60, 15, 120, 15];

OrgChart.templates.mila.node = function(node, data, template, config){
    return `<rect x="0" y="0" height="${node.h}" width="${node.w}" fill="#039BE5" stroke-width="1" stroke="#aeaeae">
            </rect>
            <rect x="-5" y="${node.h - 50}" height="30" width="${node.w + 10}" fill="#ffffff" stroke-width="1" stroke="#039BE5">
            </rect>
            <line x1="-5" x2="0" y1="${node.h - 20}" y2="${node.h - 15}" stroke-width="1" stroke="#039BE5"/>
            <line x1="${node.w + 5}" x2="${node.w}" y1="${node.h - 20}" y2="${node.h - 15}" stroke-width="1" stroke="#039BE5"/>`;
};

OrgChart.templates.mila.img_0 = function(node, data, template, config, value){
    return `<image preserveAspectRatio="xMidYMid slice" xlink:href="${value}" 
                x="20" y="${node.h - 115}"  width="64" height="64">
            </image>`;
}

OrgChart.templates.mila.field_0 = function(node, data, template, config, value){
    return OrgChart.wrapText(
        value, `<text style="font-size: 18px;" fill="#039BE5" x="${node.w / 2}" y="${node.h - 28}" text-anchor="middle"></text>`, 
        node.w - 10, 1);
}

OrgChart.templates.mila.nodeMenuButton = function(node, data, template, config){
    return `<g transform="matrix(1,0,0,1,${node.w - 25},${node.h - 10})">
                <rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect>
                <circle cx="0" cy="0" r="2" fill="#ffffff"></circle>
                <circle cx="7" cy="0" r="2" fill="#ffffff"></circle>
                <circle cx="14" cy="0" r="2" fill="#ffffff"></circle>
            </g>`;
};
```
:::

## polina {#polinaTemplate}

<Demo path="org-chart-js/polina" />

::: details Source code of **polina**

```js
OrgChart.templates.polina = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.polina.size = [300, 80];
OrgChart.templates.polina.padding = [80, 15, 30, 15];

OrgChart.templates.polina.ripple = {
    color: "#e6e6e6",
    radius: 40,
    rect: null
};

OrgChart.templates.polina.node = function(node, data, template, config){
    return `<rect x="0" y="0" height="${node.h}" width="${node.w}" fill="#039BE5" 
                stroke-width="1" stroke="#686868" rx="40" ry="40">
            </rect>`;
};

OrgChart.templates.polina.img_0 = 
        `<clipPath id="{randId}"><circle  cx="40" cy="40" r="35"></circle></clipPath>
        <image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" 
                x="0" y="0"  width="80" height="80">
        </image>`;

OrgChart.templates.polina.field_0 = function(node, data, template, config, value){
    return OrgChart.wrapText(
        value, `<text style="font-size: 18px;" fill="#ffffff" x="80" y="30" text-anchor="start"></text>`, 
        node.w - 90, 1)
};

OrgChart.templates.polina.field_1 = function(node, data, template, config, value){
    return OrgChart.wrapText(
        value, `<text  style="font-size: 14px;" fill="#ffffff" x="80" y="55" text-anchor="start"></text>`, 
        node.w - 90, 1);
};

OrgChart.templates.polina.link = 
        `<path stroke="#686868" stroke-width="1px" fill="none" d="M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}" />`;

OrgChart.templates.polina.nodeMenuButton = function(node, data, template, config){
    return `<g transform="matrix(1,0,0,1,${node.w - 15},33)">
                <rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect>
                <circle cx="0" cy="0" r="2" fill="#ffffff"></circle>
                <circle cx="0" cy="7" r="2" fill="#ffffff"></circle>
                <circle cx="0" cy="14" r="2" fill="#ffffff"></circle>
            </g>`;
}
```
:::

## mery {#meryTemplate}

<Demo path="org-chart-js/mery" />

::: details Source code of **mery**

```js
OrgChart.templates.mery = Object.assign({}, OrgChart.templates.ana);

OrgChart.templates.mery.ripple = {
    color: "#e6e6e6",
    radius: 50,
    rect: null
};

OrgChart.templates.mery.node = function(node, data, template, config){
    return `<rect x="0" y="0" height="${node.h}" width="${node.w}" fill="#ffffff"    
                stroke-width="1" stroke="#686868" rx="50" ry="50">
            </rect>
            <rect x="0" y="${node.h / 2 - 15}" height="30" width="${node.w}" fill="#039BE5" 
                stroke-width="1">
            </rect>`;
}

OrgChart.templates.mery.link = 
        `<path stroke="#aeaeae" stroke-width="1px" fill="none" d="M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}" />`;

OrgChart.templates.mery.img_0 =  function(node, data, template, config, value){
    var cx = node.w / 2;
    var cy = node.h / 2;
    var r = 24;
    var randId = OrgChart.randomId();
    return `<clipPath id="${randId}"><circle cx="${cx}" cy="${cy}" r="${r}"></circle></clipPath>
            <image preserveAspectRatio="xMidYMid slice" clip-path="url(#${randId})" xlink:href="${value}" 
                x="${cx - r}" y="${cy - r}" width="${r * 2}" height="${r * 2}" >
            </image>`;
}

OrgChart.templates.mery.field_0 = function(node, data, template, config, value){
    return OrgChart.wrapText(
        value, 
        `<text style="font-size: 18px;" fill="#039BE5" x="${node.w / 2}" y="${node.h / 2 - 30}" text-anchor="middle"></text>`, 
        node.w - 30, 1);
};

OrgChart.templates.mery.field_1 = function(node, data, template, config, value){
    return OrgChart.wrapText(
        value, 
        `<text style="font-size: 14px;" fill="#039BE5" x="${node.w / 2}" y="${node.h / 2 + 40}" text-anchor="middle"></text>`, 
        node.w - 30, 1);
};

OrgChart.templates.mery.nodeMenuButton = function(node, data, template, config){
    return `<g transform="matrix(1,0,0,1,${node.w - 25}, ${node.h / 2})">
                <rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect>
                <circle cx="0" cy="0" r="2" fill="#ffffff"></circle>
                <circle cx="7" cy="0" r="2" fill="#ffffff"></circle>
                <circle cx="14" cy="0" r="2" fill="#ffffff"></circle>
            </g>`
};
```
:::

## rony {#ronyTemplate}

<Demo path="org-chart-js/rony" />

::: details Source code of **rony**

```js
OrgChart.templates.rony = Object.assign({}, OrgChart.templates.ana);

OrgChart.templates.rony.svg = 
        `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            style="background-color:#E8E8E8;display:block;" width="{w}" height="{h}" viewBox="{viewBox}">
            {content}
        </svg>`;

OrgChart.templates.rony.defs = 
        `<filter id="{randId}" x="0" y="0" width="200%" height="200%">
            <feOffset result="offOut" in="SourceAlpha" dx="5" dy="5"></feOffset>
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5"></feGaussianBlur>
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>
        </filter>`;

OrgChart.templates.rony.size = [180, 250];

OrgChart.templates.rony.ripple = {
    color: "#F57C00",
    radius: 5,
    rect: null
};

OrgChart.templates.rony.padding = [250, 0, 30, 0];

OrgChart.templates.rony.img_0 =  function(node, data, template, config, value){
    var cx = node.w / 2;
    var cy = 160;
    var r = 60
    var randId = OrgChart.randomId();
    return `<clipPath id="${randId}"><circle cx="${cx}" cy="${cy}" r="${r}"></circle></clipPath>
            <image preserveAspectRatio="xMidYMid slice" clip-path="url(#${randId})" xlink:href="${value}" 
                x="${cx - r}" y="${cy - r}" width="${r * 2}" height="${r * 2}" >
            </image>`;
}

OrgChart.templates.rony.node = function(node, data, template, config){
    return `<rect filter="url(#{randId})" x="0" y="0" height="${node.h}" width="${node.w}" 
                fill="#ffffff" stroke-width="0" rx="10" ry="10">
            </rect>`
};

OrgChart.templates.rony.field_0 = function(node, data, template, config, value){
    return OrgChart.wrapText(
        value, `<text style="font-size: 18px;" fill="#039BE5" x="${node.w / 2}" y="40" text-anchor="middle"></text>`, 
        node.w - 15, 1);
};

OrgChart.templates.rony.field_1 = function(node, data, template, config, value){
    return OrgChart.wrapText(
        value, `<text style="font-size: 14px;" fill="#F57C00" x="${node.w / 2}" y="60" text-anchor="middle"></text>`, 
        node.w - 15, 3);
};

OrgChart.templates.rony.field_2 = function(node, data, template, config, value){
    return OrgChart.wrapText(
        value, `<text style="font-size: 14px;" fill="#FFCA28" x="${node.w / 2}" y="80" text-anchor="middle"></text>`, 
        node.w - 15, 1);
};

OrgChart.templates.rony.link = 
        `<path stroke="#039BE5" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}"/>`;

OrgChart.templates.rony.plus = function(node, data, template, config, defaultPosition){
    return `<g transform="matrix(1,0,0,1,${defaultPosition.x - 15},${defaultPosition.y - 15})">
                <circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#039BE5" stroke-width="1"></circle>
                <line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#039BE5"></line>
                <line x1="15" y1="4" x2="15" y2="26" stroke-width="1" stroke="#039BE5"></line>
            </g>`;
}    

OrgChart.templates.rony.minus = function(node, data, template, config, defaultPosition){
    return `<g transform="matrix(1,0,0,1,${defaultPosition.x - 15},${defaultPosition.y - 15})">
                <circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#039BE5" stroke-width="1"></circle>
                <line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#039BE5"></line>
            </g>`;
}

OrgChart.templates.rony.nodeMenuButton = function(node, data, template, config){
    return `<g transform="matrix(1,0,0,1,${node.w - 25},${node.h - 15})">
                <rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect>
                <circle cx="0" cy="0" r="2" fill="#F57C00"></circle>
                <circle cx="7" cy="0" r="2" fill="#F57C00"></circle>
                <circle cx="14" cy="0" r="2" fill="#F57C00"></circle>
            </g>`;
};
```
:::

## belinda {#belindaTemplate}

<Demo path="org-chart-js/belinda" />

::: details Source code of **belinda**

```js
OrgChart.templates.belinda = Object.assign({}, OrgChart.templates.ana);

OrgChart.templates.belinda.size = [180, 180];

OrgChart.templates.belinda.ripple = {
    radius: 90,
    color: "#e6e6e6",
    rect: null
};

OrgChart.templates.belinda.node = function(node, data, template, config){
    return `<circle cx="${node.w / 2}" cy="${node.h / 2}" r="${node.w / 2}" fill="#039BE5" 
                stroke-width="1" stroke="#aeaeae">
            </circle>`;
};

OrgChart.templates.belinda.img_0 = function(node, data, template, config, value){    
    var cx = node.w  / 2;
    var cy = 45;
    var r = 40;
    var randId = OrgChart.randomId();
    return `<clipPath id="${randId}"><circle cx="${cx}" cy="${cy}" r="${r}"></circle></clipPath>
            <image preserveAspectRatio="xMidYMid slice" clip-path="url(#${randId})" xlink:href="${value}" 
                x="${cx - r}" y="${cy - r}" width="${r * 2}" height="${r * 2}" >
            </image>`; 
};
OrgChart.templates.belinda.field_0 = function(node, data, template, config, value){    
    return OrgChart.wrapText(
        value,  
        `<text style="font-size: 18px;" text-anchor="middle" fill="#ffffff"  x="${node.w / 2}" y="${node.h / 2 + 15}"></text>`, 
        node.w - 10, 1);
};
OrgChart.templates.belinda.field_1 = function(node, data, template, config, value){   
    return OrgChart.wrapText(
        value,
        `<text style="font-size: 14px;" text-anchor="middle" fill="#ffffff"  x="${node.w / 2}" y="${node.h / 2 + 35}"></text>`, 
        node.w - 20, 2);
};

OrgChart.templates.belinda.link = 
        `<path stroke="#aeaeae" stroke-width="1px" fill="none" d="M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}"/>`;

OrgChart.templates.belinda.nodeMenuButton = function(node, data, template, config){ 
    return `<g style="cursor:pointer;" transform="matrix(1,0,0,1,${node.w  / 2- 11},5)">
                <rect x="0" y="0" fill="#000000" fill-opacity="0" width="22" height="22"></rect>
                <line stroke-width="2" stroke="#000" x1="0" y1="3" x2="22" y2="3"></line>
                <line stroke-width="2" stroke="#000" x1="0" y1="9" x2="22" y2="9"></line>
                <line stroke-width="2" stroke="#000" x1="0" y1="15" x2="22" y2="15"></line>
            </g>`
};
```
:::

## ula {#ulaTemplate}

<Demo path="org-chart-js/ula" />

::: details Source code of **ula**

```js
OrgChart.templates.ula = Object.assign({}, OrgChart.templates.ana);

OrgChart.templates.ula.field_0 = function(node, data, template, config, value){
    return OrgChart.wrapText(
        value, `<text style="font-size: 18px;" fill="#039BE5" x="100" y="55"></text>`, 
        node.w - 105, 1);
};


OrgChart.templates.ula.field_1 = function(node, data, template, config, value){
    return OrgChart.wrapText(
        value, `<text data-text-overflow="multiline" style="font-size: 14px;" fill="#afafaf" x="100" y="76"></text>`, 
        node.w - 105, 3);
};

OrgChart.templates.ula.node = function(node, data, template, config){
    return `<rect x="0" y="0" height="${node.h}" width="${node.w}" fill="#ffffff" stroke-width="1" stroke="#aeaeae"></rect>
            <line x1="0" y1="0" x2="${node.w}" y2="0" stroke-width="2" stroke="#039BE5"></line>`
};

OrgChart.templates.ula.img_0 =  function(node, data, template, config, value){
    var cx = 50;
    var cy = 60;
    var r = 40;
    var randId = OrgChart.randomId();
    return `<clipPath id="${randId}"><circle cx="${cx}" cy="${cy}" r="${r}"></circle></clipPath>
            <image preserveAspectRatio="xMidYMid slice" clip-path="url(#${randId})" xlink:href="${value}" 
                x="${cx - r}" y="${cy - r}" width="${r * 2}" height="${r * 2}" >
            </image>`
};

OrgChart.templates.ula.menu = 
    `<g style="cursor:pointer;" transform="matrix(1,0,0,1,225,12)" ${OrgChart.attr.control_node_menu_id}="{id}">
        <rect x="-4" y="-10" fill="#ffffff" width="22" height="22"></rect>
        <circle cx="0" cy="0" r="2" fill="#039BE5"></circle>
        <circle cx="7" cy="0" r="2" fill="#039BE5"></circle>
        <circle cx="14" cy="0" r="2" fill="#039BE5"></circle>
    </g>`;

OrgChart.templates.ula.nodeMenuButton = function(node, data, template, config){
    return `<g transform="matrix(1,0,0,1,${node.w - 25}, ${node.h - 15})">
                <rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect>
                <circle cx="0" cy="0" r="2" fill="#AEAEAE"></circle>
                <circle cx="7" cy="0" r="2" fill="#AEAEAE"></circle>
                <circle cx="14" cy="0" r="2" fill="#AEAEAE"></circle>
            </g>`
};

OrgChart.templates.ula.padding = [110, 1, 1, 1];
```
:::

## isla {#islaTemplate}

<Demo path="org-chart-js/isla" />

::: details Source code of **isla**

```js
OrgChart.templates.isla = Object.assign({}, OrgChart.templates.ana);

OrgChart.templates.isla.defs =
    `<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="isla-shadow">
        <feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0" 
            in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1" />
        <feMerge><feMergeNode in="shadowMatrixOuter1" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>`;

OrgChart.templates.isla.size = [180, 120];

OrgChart.templates.isla.padding = [70, 1, 60, 1];

OrgChart.templates.isla.node = function(node, data, template, config){
    return `<rect filter="url(#isla-shadow)" x="0" y="20" rx="10" ry="10" height="${node.h - 20}" width="${node.w}"
                fill="#FFF" stroke-width="1" stroke="#039BE5" >
            </rect>
            <rect x="25" y="${node.h - 45}" rx="10" ry="10" height="20" width="${node.w - 50}" 
                fill="#039BE5" stroke-width="3" stroke="#039BE5">
            </rect>
            <rect fill="#ffffff" stroke="#039BE5" stroke-width="1" x="${node.w / 2- 20}" 
                y="0" rx="13" ry="13" width="40" height="40">
            </rect>
            <circle stroke="#FFCA28" stroke-width="3" fill="none" cx="${node.w / 2}" cy="12" r="8"></circle>
            <path d="M${node.w / 2 - 15},34 C${node.w / 2 - 15},17 ${node.w / 2 + 15},17 ${node.w / 2 + 15},34" 
                stroke="#FFCA28" stroke-width="3" fill="none">
            </path>`;
}

OrgChart.templates.isla.field_0 = function(node, data, template, config, value){
    return OrgChart.wrapText(
        value,
        `<text style="font-size: 12px;" fill="#fff" x="${node.w / 2}" y="${node.h - 30}" text-anchor="middle"></text>`,
        node.w - 60, 1);
}

OrgChart.templates.isla.field_1 = function(node, data, template, config, value){
    return OrgChart.wrapText(
        value,
        `<text  style="font-size: 13px;" fill="#039BE5" x="${node.w / 2}" y="64" text-anchor="middle"></text>`,
        node.w - 20, 1);
}

OrgChart.templates.isla.img_0 = '';

OrgChart.templates.isla.img_0 = function(node, data, template, config, value){
    var randId = OrgChart.randomId();
    return `<clipPath id="${randId}">
                <rect filter="url(#isla-shadow)" fill="#ffffff" stroke="#039BE5" stroke-width="1" 
                    x="${node.w / 2 - 20}" y="0" rx="13" ry="13" width="40" height="40">
                </rect>
            </clipPath>
            <image preserveAspectRatio="xMidYMid slice" clip-path="url(#${randId})" xlink:href="${value}" 
                x="${node.w / 2 - 20}" y="0"  width="40" height="40">
            </image>`;
}

OrgChart.templates.isla.minus =
    `<circle cx="15" cy="15" r="15" fill="#F57C00" stroke="#F57C00" stroke-width="1"></circle>
    <line x1="8" y1="15" x2="22" y2="15" stroke-width="1" stroke="#ffffff"></line>`;

OrgChart.templates.isla.plus =
    `<circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#039BE5" stroke-width="1"></circle>
    <line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#039BE5"></line>
    <line x1="15" y1="4" x2="15" y2="26" stroke-width="1" stroke="#039BE5"></line>`;

OrgChart.templates.isla.nodeMenuButton =  function(node, data, template, config){
    return `<g transform="matrix(1,0,0,1,${node.w / 2 - 7},45)">
                <rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect>
                <circle cx="0" cy="0" r="2" fill="#F57C00"></circle>
                <circle cx="7" cy="0" r="2" fill="#F57C00"></circle>
                <circle cx="14" cy="0" r="2" fill="#F57C00"></circle>
            </g>`
};

OrgChart.templates.isla.ripple = {
    radius: 0,
    color: "#F57C00",
    rect: { x: 0, y: 20, width: 180, height: 100 }
};
```
:::

## deborah {#deborahTemplate}

<Demo path="org-chart-js/deborah" />

::: details Source code of **deborah**

```js
OrgChart.templates.deborah = Object.assign({}, OrgChart.templates.polina);
   
OrgChart.templates.deborah.size = [150, 150];

OrgChart.templates.deborah.node = function(node, data, template, config){
    return `<rect x="0" y="0" height="${node.h}" width="${node.w}" fill="#039BE5" 
                stroke-width="1" stroke="#686868" rx="15" ry="15">
            </rect>`
}

OrgChart.templates.deborah.img_0 = function(node, data, template, config, value){
    var randId = OrgChart.randomId();
    return `<clipPath id="${randId}">
                <rect fill="#ffffff" stroke="#039BE5" stroke-width="1" 
                    x="5" y="5" rx="15" ry="15" width="${node.w - 10}" height="${node.h - 10}">
                </rect>
            </clipPath>
            <image preserveAspectRatio="xMidYMid slice" clip-path="url(#${randId})" xlink:href="${value}" 
                x="5" y="5"  width="${node.w - 10}" height="${node.h - 10}">
            </image>
            <rect x="3" y="5" height="30" width="${node.w - 6}" fill="#039BE5" opacity="0.5" rx="3" ry="3"></rect>
            <rect x="3" y="${node.h - 35}" height="30" width="${node.w - 6}" fill="#039BE5" opacity="0.5" rx="3" ry="3"></rect>`;
}
   
OrgChart.templates.deborah.field_0 = function(node, data, template, config, value){
    return OrgChart.wrapText(
        value, 
        `<text style="font-size: 18px;" fill="#ffffff" x="15" y="25" text-anchor="start"></text>`, 
        node.w - 25, 1);
};

OrgChart.templates.deborah.field_1 = function(node, data, template, config, value){
    return OrgChart.wrapText(
        value, 
        `<text style="font-size: 11px;" fill="#ffffff" x="15" y="${node.h - 15}" text-anchor="start"></text>`, 
        node.w - 45, 1);
}

OrgChart.templates.deborah.nodeMenuButton = function(node, data, template, config){
    return `<g style="cursor:pointer;" transform="matrix(1,0,0,1,${node.w - 25},${node.h - 20})">
                <rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect>
                <circle cx="0" cy="0" r="2" fill="#ffffff"></circle>
                <circle cx="7" cy="0" r="2" fill="#ffffff"></circle>
                <circle cx="14" cy="0" r="2" fill="#ffffff"></circle>
            </g>`;
}
```
:::

## clara {#claraTemplate}

<Demo path="orgchart-js/clara" />

::: details Source code of **clara**

```js
OrgChart.templates.clara = Object.assign({}, OrgChart.templates.ana);

OrgChart.templates.clara.size = [180, 210];

OrgChart.templates.clara.padding = [80,7,7,7];

OrgChart.templates.clara.img_0 = function(node, data, template, config, value){
    var cx = 50;
    var cy = 30;
    var r = 40;
    if (!node.stChildren.length){     
        r = 60;
        cx = node.w / 2;
        cy = 70;
    }
    var randId = OrgChart.randomId();
    return `<clipPath id="${randId}"><circle cx="${cx}" cy="${cy}" r="${r}"></circle></clipPath>
            <image preserveAspectRatio="xMidYMid slice" clip-path="url(#${randId})" xlink:href="${value}" 
                x="${cx - r}" y="${cy - r}" width="${r * 2}" height="${r * 2}" >
            </image>`
};

OrgChart.templates.clara.treeListMaxHeight = 387;

OrgChart.templates.clara.field_0 = function(node, data, template, config, value){
    var y = 65;
    var x = node.w / 2;
    var anchor = 'middle';
    var width = node.w - 100;
    if (!node.stChildren.length){     
        anchor = 'middle';
        x = node.w / 2;
        y = 160;
        width = node.w - 20;
    }

    return OrgChart.wrapText(
        value, 
        `<text style="font-size: 20px;" fill="#ffffff" x="${x}" y="${y}" text-anchor="${anchor}"></text>`, 
        width, 1);
} ;

OrgChart.templates.clara.field_1 = function(node, data, template, config, value){
    var y = 35;
    var x = node.w - 15;
    var anchor = 'end';
    var width = node.w - 100;
    if (!node.stChildren.length){     
        anchor = 'middle';
        x = node.w / 2;
        y = 180;
        width = node.w - 20;
    }
    return OrgChart.wrapText(
        value, 
        `<text style="font-size: 14px;" fill="#ffffff" x="${x}" y="${y}" text-anchor="${anchor}"></text>`,
        width, 1);
} ;

OrgChart.templates.clara.nodeMenuButton = function(node, data, template, config){
    return `<g style="cursor:pointer;" transform="matrix(1,0,0,1, ${node.w - 35}, 2)">
                <rect x="0" y="0" fill="red" style="opacity: 0;"  width="26" height="26"></rect>
                <circle cy="13" cx="6" r="2" fill="#fff"></circle>
                <circle cy="13" cx="13" r="2" fill="#fff"></circle>
                <circle cy="13" cx="20" r="2" fill="#fff"></circle>
            </g>`;
}

OrgChart.templates.clara.node = function(node, data, template, config) {
    return `<rect x="0" y="0" height="${node.h}" width="${node.w}" fill="#039BE5" 
                stroke-width="1" stroke="#aeaeae" rx="10" ry="10">
            </rect>`;
}; 
```
:::

## group & invisibleGroup {#groupTemplate}

More examples for groups are available in the **Sub Trees** doc page.

<Demo path="org-chart-js/group" />

::: details Source code of **group** and **invisibleGroup**

```js
OrgChart.templates.group = Object.assign({}, OrgChart.templates.ana);

OrgChart.templates.group.size = [250, 120];

OrgChart.templates.group.padding = [50, 20, 35, 20];

OrgChart.templates.group.node = 
    `<rect rx="50" ry="50" x="0" y="0" height="{h}" width="{w}" fill="#f2f2f2" stroke-width="0"></rect>`;

OrgChart.templates.group.link = 
    `<path stroke="#aeaeae" stroke-width="1px" fill="none" d="M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}"/>`;

OrgChart.templates.group.nodeMenuButton = 
    `<g style="cursor:pointer;" transform="matrix(1,0,0,1,{ew},25)">
        <g transform="matrix(1,0,0,1,-22,-8)">
            <rect x="0" y="0" fill="red" fill-opacity="0" width="18" height="22"></rect>
            <line x1="0" y1="2" x2="9" y2="2" stroke="#aeaeae" stroke-width="1"></line>
            <line x1="0" y1="9" x2="18" y2="9" stroke="#aeaeae" stroke-width="1"></line>
            <line x1="0" y1="16" x2="22" y2="16" stroke="#aeaeae" stroke-width="1"></line>
        </g>
    </g>`;

OrgChart.templates.group.field_0 = 
    `<text ${OrgChart.attr.width}="230" style="font-size: 18px;" fill="#aeaeae" 
        x="{cw}" y="30" text-anchor="middle">{val}
    </text>`;
    
OrgChart.templates.group.field_1 = '';

OrgChart.templates.group.ripple = {
    radius: 50,
    color: "#aeaeae"
};

OrgChart.templates.invisibleGroup = Object.assign({}, OrgChart.templates.group);

OrgChart.templates.invisibleGroup.node = '';

OrgChart.templates.invisibleGroup.padding = [0,0,0,0];

OrgChart.templates.invisibleGroup.field_0 = '';

OrgChart.templates.invisibleGroup.nodeMenuButton = '';
```
:::

## treeListItem {#treeList}

More examples for `treeListLayout` are available in the **Layouts** doc page.

<Demo path="orgchart-js/treelistlayout" />

::: details Source code of **treeListItem**

```js
OrgChart.templates.treeListItem = Object.assign({}, OrgChart.templates.ana);

OrgChart.templates.treeListItem.size = [350, 60];

OrgChart.templates.treeListItem.field_0 = function(node, data, template, config, value){
    var indent = node.level * template.expandCollapseSize  + 45;
    var fill = config.mode == 'dark' ? '#ccc' : '#757575';
    return OrgChart.wrapText(value, `<text fill="${fill}"  x="${indent}" y="27" style="font-size:16px;"></text>`, node.w - indent - 70, 1);
};

OrgChart.templates.treeListItem.field_1 = function(node, data, template, config, value){
    var indent = node.level * template.expandCollapseSize + 45;
    var fill = config.mode == 'dark' ? '#ccc' : '#757575';
    
    return OrgChart.wrapText(value, `<text fill="${fill}" x="${indent}" y="47" style="font-size:12px;"></text>`, node.w - indent - 70, 1);
};

OrgChart.templates.treeListItem.img_0 =  function(node, data, template, config, value){
    var cx = node.w - 55;
    var cy = node.h / 2;
    var r = node.h / 2 - 4;
    var randId = OrgChart.randomId();

    return `<clipPath id="${randId}"><circle cx="${cx}" cy="${cy}" r="${r}"></circle></clipPath>
            <image preserveAspectRatio="xMidYMid slice" clip-path="url(#${randId})" xlink:href="${value}" 
                x="${cx - r}" y="${cy - r}" width="${r * 2}" height="${r * 2}" >
            </image>`;
};

OrgChart.templates.treeListItem.expandCollapseSize = 24;

OrgChart.templates.treeListItem.plus = function(node, data, template, config){    
    var x = template.expandCollapseSize / 2 + node.level * template.expandCollapseSize;
    var y = (node.h / 2);
    y = y - template.expandCollapseSize / 2;      
    var fill = config.mode == 'dark' ? '#ccc' : '#757575';
    return `<g transform="matrix(1,0,0,1,${x},${y})">
                <text x="6" style="font-size: 10px;" fill="${fill}" y="15.5" text-anchor="end">${node.deepCollapsedChildCount}</text>
                <path fill="${fill}" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                <rect style="opacity: 0" x="-3" y="-3" width="30" height="30"></rect>
            </g>`
};

OrgChart.templates.treeListItem.minus = function(node, data, template, config){
    var x = template.expandCollapseSize / 2 + node.level * template.expandCollapseSize;
    var y = (node.h / 2);
    y = y - template.expandCollapseSize / 2;      
    var fill = config.mode == 'dark' ? '#ccc' : '#757575';
    return `<g transform="matrix(1,0,0,1,${x},${y})">
                <path fill="${fill}" d="M7.42,8.59L12,13.17L16.59,8.59L18,10L12,16L6,10L7.42,8.59Z" />
                <rect style="opacity: 0" x="-3" y="-3" width="30" height="30"></rect>
            </g>`
};

OrgChart.templates.treeListItem.nodeMenuButton = function(node, data, template, config){
    var fill = config.mode == 'dark' ? '#ccc' : '#757575';

    return `<g style="cursor:pointer;" transform="matrix(1,0,0,1, ${node.w - 36}, ${node.h / 2 - 13})">
                <rect x="0" y="0" fill="red" style="opacity: 0;"  width="26" height="26"></rect>
                <circle cx="13" cy="6" r="2" fill="${fill}"></circle>
                <circle cx="13" cy="13" r="2" fill="${fill}"></circle>
                <circle cx="13" cy="20" r="2" fill="${fill}"></circle>
        </g>`
};

OrgChart.templates.treeListItem.node = function (node, data, template, config){
    var topLine = '';
    var fill = '#FFFFFF';
    if ((node.isTreeListItem && !node.stParent) || (node.isTreeListItem && node.stParent && node.stParent.stChildren[0] != node)){
        var stroke = '#E0E0E0';
        if (config.mode == 'dark'){
            stroke = '#444444';
        }
        topLine = `<line stroke="${stroke}" stroke-width="1" x1="0" x2="${node.w}" y1="0" y2="0"></line>`
    }

    if (config.mode == 'dark'){
        fill = '#252526';
    }    
    return `<rect fill="${fill}" x="0" y="0" height="${node.h}" width="${node.w}"  rx="0" ry="0" ></rect>${topLine}`
};
```
:::

We also provide a base template that you can use directly or inherit from and customize.

## base {#baseOCTemplate}

<Demo path="org-chart-js/base" />

::: details Source code of **base**

```js
OrgChart.templates.base.defs = '';

OrgChart.templates.base.size = [250, 120];

OrgChart.templates.base.expandCollapseSize = 30;

OrgChart.templates.base.linkAdjuster = {
    fromX: 0,
    fromY: 0,
    toX: 0,
    toY: 0
};

OrgChart.templates.base.ripple = {
    radius: 0,
    color: "#e6e6e6",
    rect: null
};

OrgChart.templates.base.assistanseLink = 
    `<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="2px" fill="none" 
        d="M{xa},{ya} {xb},{yb} {xc},{yc} {xd},{yd} L{xe},{ye}"/>`;

OrgChart.templates.base.svg = 
    `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:block;" 
        width="{w}" height="{h}" viewBox="{viewBox}">{content}
    </svg>`;

OrgChart.templates.base.link = 
    `<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" 
        d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}"/>`;

OrgChart.templates.base.node = 
    `<rect x="0" y="0" height="120" width="250" fill="none" stroke-width="1" stroke="#aeaeae" rx="7" ry="7"></rect>`;

OrgChart.templates.base.plus = function(node, data, template, config, defaultPosition){
    var fill = config.mode == 'dark' ? '#1E1E1E' : '#ffffff';
    return `<g transform="matrix(1,0,0,1,${defaultPosition.x - 15},${defaultPosition.y - 15})">
                <circle cx="15" cy="15" r="15" fill="${fill}" stroke="#aeaeae" stroke-width="1"></circle>
                <text text-anchor="middle" style="font-size: 14px;cursor:pointer;" fill="#aeaeae" 
                    x="15" y="21">${node.deepCollapsedChildCount}
                </text>
            </g>`;
};

OrgChart.templates.base.minus = function(node, data, template, config, defaultPosition){
    var fill = config.mode == 'dark' ? '#1E1E1E' : '#ffffff';
    return `<g transform="matrix(1,0,0,1,${defaultPosition.x - 15},${defaultPosition.y - 15})">
                <circle cx="15" cy="15" r="15" fill="${fill}" stroke="#aeaeae" stroke-width="1"></circle>
                <line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#aeaeae"></line>
            </g>`;
};

OrgChart.templates.base.nodeMenuButton = 
    `<g style="cursor:pointer;" transform="matrix(1,0,0,1,225,105)">
        <rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect>
        <circle cx="0" cy="0" r="2" fill="#ffffff"></circle>
        <circle cx="7" cy="0" r="2" fill="#ffffff"></circle>
        <circle cx="14" cy="0" r="2" fill="#ffffff"></circle>
    </g>`;

OrgChart.templates.base.menuButton = 
    `<div style="user-select:none;position:absolute;right:{p}px;top:{p}px; 
        width:30px;height:50px;cursor:pointer;" ${OrgChart.attr.control_export_menu}="">
        <hr style="background-color: #7A7A7A; height: 3px; border: none;">
        <hr style="background-color: #7A7A7A; height: 3px; border: none;">
        <hr style="background-color: #7A7A7A; height: 3px; border: none;">
    </div>`;

OrgChart.templates.base.img_0 = 
    `<clipPath id="{randId}"><circle cx="60" cy="60" r="40"></circle></clipPath>
    <image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" 
        x="20" y="20"  width="80" height="80">
    </image>`;

OrgChart.templates.base.link_field_0 = 
    `<text text-anchor="middle" fill="#aeaeae" ${OrgChart.attr.width}="290" x="0" y="0" style="font-size:10px;">{val}</text>`;

OrgChart.templates.base.editFormHeaderColor = '#039BE5';

OrgChart.templates.base.treeListMaxHeight = 500;
```
:::



