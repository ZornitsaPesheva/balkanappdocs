---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
  - - meta
    - property: og:title
      content: Assistant | OrgChart JS
---



# Assistant

<a target="_blank" href="https://www.youtube.com/watch?v=J-30kz27B5s" rel="noopener noreferrer" class="yt-hover-link">
  <div class="yt-hover-thumb">
    <img class="tn" src="https://img.youtube.com/vi/J-30kz27B5s/mqdefault.jpg" alt="OrgChart JS Assistant" width="150" height="80">
    <img class="yt" src="https://balkan.app/Content/img/youtube.jpg" alt="OrgChart JS Assistant" width="150" height="80">
  </div>
</a>

You can specify one or more Assistant nodes in one chart by setting their tag to `"assistant"`.

## Example

<Demo path="org-chart-js/assistant" />

```javascript
{ id: 8, pid: 2, tags: ["assistant"], name: "Rudy Griffiths" }
````

## Template for assistant nodes

If you want to change the template for assistant nodes, specify a template for the `"assistant"` tag:

```javascript
tags: {
    "assistant": {
        template: "mery"
    }
}
```

## Orientation support

Assistant nodes work in all orientation options:

<Demo path="org-chart-js/assistant-in-all-orientations" />

---

## assistantSeparation

You can change the spacing between assistant nodes using **assistantSeparation**.
Default value is `100`.

<Demo path="org-chart-js/assistant-separation" />
```

