---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
---

# Mobile View {#Mobile}

You can use **OrgChart.isMobile()** to check if the user is on a mobile device and display the chart in a mobile-friendly view.

<Demo path="orgchart-js/mobile-view":height="700" />

 We use the **Tree List Layout** to achieve this by adding a couple of rows:

 ```js
 if (OrgChart.isMobile()){    
    data[0].stpid = 'wrapper'
    data.push({ id: 'wrapper', tags: ["group"] });    
} 
```

Here is the same chart in a normal layout:

<Demo path="orgchart-js/normal-layout" :height="700" />

A simple example that looks different on desktop and mobile:
[Mobile Example](https://code.balkan.app/result/orgchart-js/mobile-example)

Here is another, more advanced example:

<div style="display: flex; justify-content: center;">
  <Demo path="orgchart-js/mobile-view-ui" :height="932" width="430" />
</div>

