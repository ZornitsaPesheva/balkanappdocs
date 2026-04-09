---
outline: deep
head:
  - - meta
    - property: og:image
      content: https://balkan.app/Content/img/oc.png
  - - meta
    - property: og:title
      content: C links | OrgChart JS
---



# C links

<a target="_blank" href="https://www.youtube.com/watch?v=0Sdbn9Ld4Po" rel="noopener noreferrer" class="yt-hover-link">
    <div class="yt-hover-thumb">
        <img class="tn" src="https://img.youtube.com/vi/0Sdbn9Ld4Po/mqdefault.jpg" alt="OrgChart JS C Links" width="150" height="80">
        <img class="yt" src="https://balkan.app/Content/img/youtube.jpg" alt="OrgChart JS C Links" width="150" height="80">
    </div>
</a>

Clink stands for curved links

You can specify two or more curved links in one **chart**  
We use clinks to show additional relations. You can have one-to-many or many-to-many clink relations.

## Clink options

```javascript
clinks: [
    { from: 4, to: 0, label: 'text' }, 
    { from: 4, to: 5, template: 'blue' },
    { from: 2, to: 6, template: 'yellow', label: 'lorem ipsum' },
]
````

* **from** – id of the start node
* **to** – id of the end node

Define **label** to add text in the middle of the clink.
Add **template** to apply specific styling.

<Demo path="org-chart-js/clink" />

## Clink constants

```javascript
OrgChart.CLINK_CURVE = 1.5;
````

Change **OrgChart.CLINK_CURVE** if you want to modify the curve.

Use **OrgChart.CLINK_CURVE = 0** for a straight link.

<Demo path="org-chart-js/clink_curve" />

[Here](https://code.balkan.app/org-chart-js/multi-parents-with-straight-clinks#JS) is a code demo on how to simulate multiple parents with Clinks.


## Clink methods

```javascript
chart.addClink(from, to, label, template)
````

<Demo path="org-chart-js/clink-methids" />

## Clink templates:

<Demo path="org-chart-js/clink-templates" />

::: details Get the source code of clink templates

```javascript
OrgChart.clinkTemplates.orange = {
    defs: '<marker id="arrowOrange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" '
        + 'orient="auto-start-reverse"><path fill="#F57C00" d="M 0 0 L 10 5 L 0 10 z" />'
        + '</marker>'
        + '<marker id="dotOrange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5">'
        + '<circle cx="5" cy="5" r="5" fill="#F57C00" />'
        + '</marker>',
    link: '<path marker-start="url(#dotOrange)" marker-end="url(#arrowOrange)" stroke="#F57C00" stroke-width="2" fill="none" d="{d}" />',
    label: '<text fill="#F57C00" text-anchor="middle" x="{x}" y="{y}">{val}</text>'
};

OrgChart.clinkTemplates.blue = {
    defs: '<marker id="arrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" '
        + 'orient="auto-start-reverse"><path fill="#039BE5" d="M 0 0 L 10 5 L 0 10 z" />'
        + '</marker>'
        + '<marker id="dotBlue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5">'
        + '<circle cx="5" cy="5" r="5" fill="#039BE5" />'
        + '</marker>',
    link: '<path marker-start="url(#dotBlue)" marker-end="url(#arrowBlue)" stroke="#039BE5" stroke-width="2" fill="none" d="{d}" />',
    label: '<text fill="#039BE5" text-anchor="middle" x="{x}" y="{y}">{val}</text>'
};

OrgChart.clinkTemplates.yellow = {
    defs: '<marker id="arrowYellow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" '
        + 'orient="auto-start-reverse"><path fill="#FFCA28" d="M 0 0 L 10 5 L 0 10 z" />'
        + '</marker>'
        + '<marker id="dotYellow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5">'
        + '<circle cx="5" cy="5" r="5" fill="#FFCA28" />'
        + '</marker>',
    link: '<path marker-start="url(#dotYellow)" marker-end="url(#arrowYellow)" stroke="#FFCA28" stroke-width="2" fill="none" d="{d}" />',
    label: '<text fill="#FFCA28" text-anchor="middle" x="{x}" y="{y}">{val}</text>'
};
````

:::

---

## clink-click event

```javascript id="clink-click"
chart.on('clink-click', function (sender, args) {
    // your code goes here  
});
```
Example:
<Demo path="org-chart-js/clink-click-event" />
