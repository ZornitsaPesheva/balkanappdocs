---
outline: deep
head:
  - - meta
    - property: og:image
      content: https://balkan.app/Content/img/oc.png
  - - meta
    - property: og:title
      content: How to Use Custom CSS | OrgChart JS
---


# How to Use Custom CSS

Sometimes you may want to customize your **OrgChart JS** - for example, changing colors or font styles. You can use custom CSS to override or add new styles to the chart.


## CSS selectors that you can use {#selectors}

- **[data-n-id]** — attribute selector  
- **[data-l-id]** — attribute selector  
- **[data-ctrl-ec-id]** — attribute selector  
- **[data-ctrl-n-menu-id]** — attribute selector  
- **svg** — tag selector  

## Nodes {#nodes}

To change the color of all rectangular nodes

```css
[data-n-id] rect {
    fill: #016e25;
}
````

To change the color of all circular nodes {#circles}

```css
[data-n-id] circle {
    fill: #016e25;
}
```

To change the color of a specific node

(node with id `1`)

```css
[data-n-id='1'] rect {
    fill: #750000;
}
```

To change the color by data tag

(assuming the node has a tag `"red"`)

```css
.node.red rect {
    fill: #750000;
}
```

## Links {#links}

To change the color of all links

```css
[data-l-id] path {
    stroke: #750000;
}
```

To change the color of a specific link

(link from `4` to `3`)

```css
[data-l-id='[3][4]'] path {
    stroke: #016e25;
}
```

## Expand/Collapse buttons

To change the color of all expand/collapse buttons

```css
[data-ctrl-ec-id] circle {
    fill: #750000 !important;
}
```

To change the color of a specific button

(button with id `3`)

```css
[data-ctrl-ec-id='3'] circle {
    fill: #016e25 !important;
}
```

## Node menu buttons

To change the color of all node menu buttons

```css
[data-ctrl-n-menu-id] circle {
    fill: #bfbfbf;
}
```
## Fields {#fields}

To change a field, define a class in the field declaration

```js
OrgChart.templates.ana.field_0 = 
    '<text width="230" style="font-size: 18px;" fill="#ffffff" x="125" y="95" text-anchor="middle" class="field_0">{val}</text>';

OrgChart.templates.ana.field_1 = 
    '<text data-width="130" data-text-overflow="multiline" style="font-size: 14px;" fill="#ffffff" x="230" y="30" text-anchor="end" class="field_1">{val}</text>';
```

To change the color and font-family of the first field

```css
.field_0 {
    font-family: Impact;
    text-transform: uppercase;
    fill: #cfcfcf;
}
```

the color of the second field

```css
.field_1 {
    fill: #cfcfcf;
}
```

## Other selectors

### background color

```css
#tree > svg {
    background-color: #2E2E2E;
}
```

To change the mode use this option in the configuration:

```js
let @Model.ObjectName = new OrgChartJS(document.getElementById("tree"), {
    mode: "dark",
});
```

Here is the result:

<Demo path="org-chart-js/css" />

### fullscreen background color

```css
#tree:fullscreen {
    background-color: #2E2E2E;
}
```

### move text vertically

```css
[data-n-id="3"] text:nth-of-type(2) tspan:nth-of-type(1) {
    baseline-shift: 10px;
}

[data-n-id="3"] text:nth-of-type(2) tspan:nth-of-type(2) {
    baseline-shift: 10px;
}
```

### add node shadow on hover

```css
[data-n-id] rect:hover {
    filter: drop-shadow(4px 5px 5px #aeaeae);
}
```

### hover the clinks

```css
[data-c-l-from]:hover {
    cursor: pointer !important;
}

[data-c-l-from]:hover > path:first-child {
    stroke-width: 3;
}
```

### link labels color

```css id="z4d9hx"
[data-l-id] text {
    fill: #750000;
}
```

### search items

```css
/* border color */
div.boc-light .boc-input>input{
    border-color: red ;
}

/* input field on focus */
div.boc-light .boc-input>input:focus {
    border-color: green;
}

/* the search label on focus */
.boc-light .boc-input>label.focused, .boc-dark .boc-input>label.focused {
    color: green !important;
}

/* the hovered search resutt */
.boc-light .boc-search [data-search-item-id]:hover, .boc-light .boc-search [data-selected=yes] {
    background-color: green !important;
}

/* close (X) button */
[data-input-btn] {
    color: red !important;
}
```
