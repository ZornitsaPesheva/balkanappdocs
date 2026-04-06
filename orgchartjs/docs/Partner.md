---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
---

# Partner

<a target="_blank" href="https://www.youtube.com/watch?v=9Bs2v2knvTk" rel="noopener noreferrer" class="yt-hover-link">
  <div class="yt-hover-thumb">
    <img class="tn" src="https://img.youtube.com/vi/9Bs2v2knvTk/mqdefault.jpg" alt="OrgChart JS Partner" width="150" height="80">
    <img class="yt" src="https://balkan.app/Content/img/youtube.jpg" alt="OrgChart JS Partner" width="150" height="80">
  </div>
</a>

You can specify one or more partners of a node by setting their tag to `"partner"`, `"left-partner"`, or `"right-partner"`.

## Partner example

```javascript
{ id: 2, pid: 1, tags: ["partner"] }
```

<Demo path="org-chart-js/add-partner" />

## Left partner

```javascript
{ id: 2, pid: 1, tags: ["left-partner"] }
```

<Demo path="org-chart-js/left-partner" />

## Multiple partners

You can also specify multiple partners.

```javascript
{ id: 4, pid: 1, tags: ["partner"] },
{ id: 5, pid: 1, tags: ["partner"] },
{ id: 6, pid: 1, tags: ["partner"] },
{ id: 7, pid: 1, tags: ["partner"] }
```

<Demo path="org-chart-js/multiple-partners" />

## Children of partners

Children can have parent id `pid` and parent partner id `ppid`.

```javascript
{ id: 1 },
{ id: 2, pid: 1, tags: ["partner"] },
{ id: 3, pid: 1, tags: ["partner"] },
{ id: 4, pid: 1, ppid: 2 },
{ id: 5, pid: 1, ppid: 3 }
```

<Demo path="org-chart-js/children" />

Here is an example with a partner's children:

<Demo path="org-chart-js/children-of-partner" />

## Add a link icon for partners

Use the `render-link` event in partners to add a link icon.

First define the icon:

```javascript
OrgChart.templates.ana.defs =
    `<g transform="matrix(0.05,0,0,0.05,-12,-9)" id="heart">
        <path fill="#F57C00" d="M438.482,58.61c-24.7-26.549-59.311-41.655-95.573-41.711c-36.291,0.042-70.938,15.14-95.676,41.694l-8.431,8.909
        l-8.431-8.909C181.284,5.762,98.663,2.728,45.832,51.815c-2.341,2.176-4.602,4.436-6.778,6.778
        c-52.072,56.166-52.072,142.968,0,199.134l187.358,197.581c6.482,6.843,17.284,7.136,24.127,0.654
        c0.224-0.212,0.442-0.43,0.654-0.654l187.29-197.581C490.551,201.567,490.551,114.77,438.482,58.61z"/>
    <g>`;
```

Then add the event listener before the `chart.load()` method:

```javascript
chart.on('render-link', function(sender, args){
    if (args.cnode.ppid != undefined){
        args.html += '<use xlink:href="#heart" x="' + args.p.xa + '" y="' + args.p.ya + '" />'
    }
});
```

<Demo path="org-chart-js/link-icon" />

## Complex scenario

<Demo path="org-chart-js/partners" />

Partner nodes are very useful for family trees. See the [Royal Family Tree](https://balkan.app/OrgChartJS/Demos/RoyalFamilyTree) demo.

