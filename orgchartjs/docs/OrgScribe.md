---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
  - - meta
    - property: og:title
      content: OrgScribe | OrgChart JS
---



# OrgScribe

<a target="_blank" href="https://www.youtube.com/watch?v=uGmlbLWEJjA" rel="noopener noreferrer" class="yt-hover-link">
  <div class="yt-hover-thumb">
    <img class="tn" src="https://img.youtube.com/vi/uGmlbLWEJjA/mqdefault.jpg" alt="OrgScribe" width="150" height="80">
    <img class="yt" src="https://balkan.app/Content/img/youtube.jpg" alt="OrgScribe" width="150" height="80">
  </div>
</a>

OrgScribe is like Markdown for org charts.  
You can create your org chart by writing node data in a list.

We add each node on a new line, and to show hierarchy, we use indentation or another symbol as an offset.

<Demo path="orgchart-js/orgscribe" />

The node name becomes the value of the **name** field.

## Adding OrgScribe

To open OrgScribe UI:

```javascript
document.getElementById("btn").addEventListener("click", function () {
    chart.orgscribeUI.show();
});
```

## Node data

To add node data, write the field name in square brackets under the node name:

```text
Denny Curtis
[title] CEO
 Ashley Barnett
 [title] Sales Manager
 Caden Ellison
 [title] Dev Manager
```

<Demo path="orgchart-js/open-orgscribe" />

## Editing

Editing the data in the Edit Form updates the OrgScribe data:

<Demo path="orgchart-js/orgscribe-edit" />

## Node tags

You can add tags in parentheses next to the node name.

Example CSS:

```css
.node.yellow rect {
    fill: #FFCA28;
}
```

OrgScribe example:

```text
Denny Curtis
 Ashley Barnett (yellow)
```

<Demo path="orgchart/orgscribe-node-color" />

## Offset symbol

Use the `ORGSCRIBE_OFFSET` constant to change the offset symbol:

```javascript
OrgChart.ORGSCRIBE_OFFSET = "#";
```

<Demo path="orgchart-js/orgscribe-offset" />






