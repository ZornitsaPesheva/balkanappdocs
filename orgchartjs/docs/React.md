---
outline: deep
head:
  - - meta
    - property: og:image
      content: https://balkan.app/Content/img/oc.png
  - - meta
    - property: og:title
      content: React | OrgChart JS
---

# React

This document shows you how to create an **OrgChart JS** React project.

## Creating a local React project

1. Create a new project:

```bash
npx create-react-app orgchart
```

Go to the project root folder:

```bash
cd orgchart
```

2. Create file **mytree.js** in the **src** folder with the following content:

```javascript
import React, { Component } from "react";

export default class Tree extends Component {
  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.chart = new OrgChart(this.divRef.current, {
      nodes: this.props.nodes,
      nodeBinding: {
        field_0: "name",
        img_0: "img"
      }
    });
  }

  render() {
    return <div id="tree" ref={this.divRef}></div>;
  }
}
```

3. Install **OrgChart JS**.

<Tabs defaultTab="downloaded">
  <Tab name="downloaded" label="Downloaded package">

[Downloaded package installation](https://balkan.app/OrgChartJS/Download):

- Add the extracted **orgchart.js** in your project **src** folder.
- In your **mytree.js** file add this reference:

```javascript
import OrgChart from "./orgchart.js";
```

> Note:
> For **TypeScript** projects use **orgchart.esm.js** and **orgchart.esm.d.ts** files.

  </Tab>

  <Tab name="npm" label="NPM package">

> Warning!
> May not work for the licensed version.

```bash
npm i balkan-orgchart-js
```

In your **mytree.js** file add this reference:

```javascript
import OrgChart from "balkan-orgchart-js";
```

  </Tab>
</Tabs>

4. Change **app.js** as follows:

```javascript
import React, { Component } from "react";
import Tree from "./mytree";

export default class App extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Tree
          nodes={[
            { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
            { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
            { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
            { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
            { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
            { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
            { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
          ]}
        />
      </div>
    );
  }
}
```

5. Start the project:

```bash
npm start
```

## Using online references

1. Create an HTML file with an **app** element and add the online references of **react**, **react-dom**, **babel** and **OrgChart JS**:

```html
<html>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://balkan.app/js/orgchart.js"></script>
  </body>
</html>
```

2. Add the **div** element and the **javascript**:

```jsx
<div id="tree"></div>
<script type="text/jsx">
  const app = document.getElementById("app");

  function OrgChartComponent(props) {
    const chart = new OrgChart(document.getElementById("tree"), {
      nodeBinding: props.nodeBinding,
      nodes: props.nodes
    });
    return null;
  }

  const data = [
    { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
    { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
    { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
    { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
    { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
    { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
    { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
  ];

  const nodeBinding = {
    field_0: "name",
    img_0: "img"
  };

  ReactDOM.render(
    <OrgChartComponent nodes={data} nodeBinding={nodeBinding} />,
    app
  );
</script>
```

[Download a React TypeScript Project](https://github.com/ZornitsaPesheva/ReactTS)

## Next.js

1. Create a new file called **package.json** with an empty object `{}`.

```json
{}
```

2. Install **Next.js**:

```bash
npm install react react-dom next
```

You will get something like this in **package.json**:

```json
{
  "dependencies": {
    "next": "^12.1.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}
```

3. Add a script in **package.json** to run the Next.js development server while you develop:

```json
"scripts": {
  "dev": "next dev"
}
```

4. Install the **OrgChart JS** NPM package:

```bash
npm i balkan-orgchart-js
```

5. Create a **pages** folder and an **index.js** file in it with the following content:

```javascript
import OrgChart from "balkan-orgchart-js";

function OrgChartComponent(props) {
  if (typeof window === "object") {
    const chart = new OrgChart(document.getElementById("tree"), {
      nodeBinding: props.nodeBinding,
      nodes: props.nodes
    });
  }
  return null;
}

const data = [
  { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
  { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
  { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
  { id: 4, pid: 2, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
  { id: 5, pid: 2, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
  { id: 6, pid: 3, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
  { id: 7, pid: 3, name: "Fran Parsons", title: "Developer", img: "https://cdn.balkan.app/shared/8.jpg" }
];

const nodeBinding = {
  field_0: "name",
  img_0: "img"
};

export default function HomePage() {
  return (
    <div>
      <div id="tree"></div>
      <OrgChartComponent nodes={data} nodeBinding={nodeBinding} />
    </div>
  );
}
```

6. Install **next-transpile-modules**:

```bash
npm install --save next-transpile-modules
```

7. Create **next.config.js** in the root folder with the following content:

```javascript
const withTM = require("next-transpile-modules")(["balkan-orgchart-js"]);

module.exports = withTM();
```

8. Run the project:

```bash
npm run dev
```
