---
outline: deep
head:
  - - meta
    - property: og:image
      content: https://balkan.app/Content/img/oc.png
  - - meta
    - property: og:title
      content: Angular | OrgChart JS
---

# Angular

This document shows you how to create an **OrgChart JS** Angular project.

1. Create a new project:

```bash
ng new orgchart
```

Go to the project root folder:

```bash
cd orgchart
```

2. Install **OrgChart JS**.

<Tabs defaultTab="downloaded">
  <Tab name="downloaded" label="Downloaded package">

- [Download OrgChart JS](https://balkan.app/OrgChartJS/Download) and extract the package.
- Create a folder **balkanapp** in **src/assets** and add your extracted **orgchart.esm.js** and **orgchart.esm.d.ts** files there.
- Add the script in your **angular.json** file under **options**:

```json
"scripts": [
  "src/assets/balkanapp/orgchart.esm.js"
]
```

- In your **app ts** file add this reference:

```javascript
import OrgChart from "../assets/balkanapp/orgchart.esm";
```

  </Tab>

  <Tab name="npm" label="NPM package">

> Warning!
> May not work for the licensed version.

```bash
npm i balkan-orgchart-js
```

In your **app ts** file add this reference:

```javascript
import OrgChart from "balkan-orgchart-js";
```

  </Tab>
</Tabs>

3. In the **app html** file add or replace the content with this:

```html
<div id="tree"></div>
```

4. In the export class of **app ts** add this code:

```javascript
constructor() { }

ngOnInit() {
  const tree = document.getElementById("tree");
  if (tree) {
    const chart = new OrgChart(tree, {
      nodeBinding: {
        field_0: "name",
        img_0: "img"
      }
    });

    chart.load([
      { id: 1, name: "John Doe", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
      { id: 2, pid: 1, name: "Jane Smith", title: "CTO", img: "https://cdn.balkan.app/shared/3.jpg" }
    ]);
  }
}
```

5. Start the project:

```bash
ng serve
```

6. Here is how you can add some CSS to **app css**:

```css
:host ::ng-deep [data-n-id='1'] rect {
  fill: #750000;
}
```

[Here is how to define templates in Angular](https://blog.balkan.app/orgchart-js-angular-templates)
