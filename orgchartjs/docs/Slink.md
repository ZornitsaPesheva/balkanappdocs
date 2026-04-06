---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
---


# S links

<a target="_blank" href="https://www.youtube.com/watch?v=jSj8ShvG1vc" rel="noopener noreferrer" class="yt-hover-link">
    <div class="yt-hover-thumb">
        <img class="tn" src="https://img.youtube.com/vi/jSj8ShvG1vc/mqdefault.jpg" alt="OrgChart JS S Links" width="150" height="80">
        <img class="yt" src="https://balkan.app/Content/img/youtube.jpg" alt="OrgChart JS S Links" width="150" height="80">
    </div>
</a>


**slink** stands for second links.

You can specify two or more second links in one chart.  
With slinks you can show multiple parents or any other relation.

---

## Slink options

```javascript
slinks: [
    { from: 4, to: 0, label: 'text' }, 
    { from: 4, to: 5, template: 'blue' },
    { from: 2, to: 6, template: 'yellow', label: 'lorem ipsum' },
]
````

* **from** – id of the start node
* **to** – id of the end node

Define **label** to add text in the middle of the slink.
Its position depends on `labelPosition` (`start`, `middle`, `end`).

Add **template** to style the slink.

<Demo path="org-chart-js/s-link" />

---

## Slink methods

```javascript
chart.addSlink(from, to, label, template)
```

```javascript id="8q9p6z"
chart.removeSlink(from, to)
```

<Demo path="org-chart-js/slink-methods" />

## Slink templates

<Demo path="org-chart-js/slink-templates" />

::: details Get the source code of slink templates

```javascript
OrgChart.slinkTemplates.orange = {
    defs: 
        `<marker id="arrowSlinkOrange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
            orient="auto-start-reverse"><path fill="#F57C00" d="M 0 0 L 10 5 L 0 10 z" />
        </marker> 
        <marker id="dotSlinkOrange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5">
            <circle cx="5" cy="5" r="5" fill="#F57C00" />
        </marker>`,
    link: 
        `<path stroke-dasharray="4, 2" marker-start="url(#dotSlinkOrange)" marker-end="url(#arrowSlinkOrange)"
            stroke-linejoin="round" stroke="#F57C00" stroke-width="2" fill="none" d="{d}" />`,
    label: 
        `<text dominant-baseline="middle" fill="#F57C00" text-anchor="middle" x="{x}" y="{y}">{val}</text>`,
    labelPosition: `middle`
};

OrgChart.slinkTemplates.blue = {
    defs: 
        `<marker id="arrowSlinkBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
            orient="auto-start-reverse"><path fill="#039BE5" d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
        <marker id="dotSlinkBlue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5">
            <circle cx="5" cy="5" r="5" fill="#039BE5" />
        </marker>`,
    link: 
        `<path stroke-dasharray="4, 2" marker-start="url(#dotSlinkBlue)" marker-end="url(#arrowSlinkBlue)"
            stroke-linejoin="round" stroke="#039BE5" stroke-width="2" fill="none" d="{d}" />`,
    label: `<text fill="#039BE5" text-anchor="middle" x="{x}" y="{y}">{val}</text>`,
    labelPosition: `middle`
};

OrgChart.slinkTemplates.yellow = {
    defs: 
        `<marker id="arrowSlinkYellow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6"
            orient="auto-start-reverse"><path fill="#FFCA28" d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
        <marker id="dotSlinkYellow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5">
            <circle cx="5" cy="5" r="5" fill="#FFCA28" />
        </marker>`,
    link: 
        `<path stroke-dasharray="4, 2" marker-start="url(#dotSlinkYellow)" marker-end="url(#arrowSlinkYellow)"
            stroke-linejoin="round" stroke="#FFCA28" stroke-width="2" fill="none" d="{d}" />`,
    label: `<text fill="#FFCA28" text-anchor="middle" x="{x}" y="{y}">{val}</text>`,
    labelPosition: `middle`
};
```

:::

## slink-click event

```javascript id="m2k8s1"
chart.on('slink-click', function (sender, args) {
    // your code goes here  
})
```

Example:

<Demo path="org-chart-js/slink-click-event" />

## slink gaps

From version 9.01.00, slink endpoints maintain spacing to prevent overlap.

```javascript id="v9s8k2"
OrgChart.SLINK_GAP = 10;
```

You may also adjust sibling spacing:

```javascript id="z0q4xp"
siblingSeparation: 60,
```

Example:

<Demo path="orgchart-js/slinks-gap" />

::: warning
Slinks are not supported between different trees and subtrees, although they may work in some cases.
You can use Clinks instead.
:::

