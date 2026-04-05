---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
---

# Fields

There are two types of fields, **node fields** and **link fields**, you can define unlimited number of fields. To do that you have to override the template.

We have 2 predefined text fields and 1 image:

```javascript
nodeBinding: {
    field_0: 'name',
    field_1: 'city',
    img_0: 'img'
},
````

where **name**, **city** and **img** are node data (JSON) fields.

and 1 link field:

```javascript
linkBinding: {
    link_field_0: "date"
},
```


## Node text fields

In the following example we are going to demonstrate how to add four text fields. Define 4 fields in the template:

```javascript
OrgChart.templates.ana.field_0 =
    `<text class="field_0" style="font-size: 20px;" fill="#ffffff" x="125" y="30" text-anchor="middle">{val}</text>`;
OrgChart.templates.ana.field_1 =
    `<text class="field_1" style="font-size: 14px;" fill="#ffffff" x="125" y="50" text-anchor="middle">{val}</text>`;
OrgChart.templates.ana.field_2 =
    `<text class="field_2" style="font-size: 14px;" fill="#ffffff" x="125" y="70" text-anchor="middle">{val}</text>`;
OrgChart.templates.ana.field_3 =
    `<text class="field_3" style="font-size: 14px;" fill="#ffffff" x="125" y="90" text-anchor="middle">{val}</text>`;
```

Then define the binding:

```javascript
nodeBinding: {
    field_0: "name",
    field_1: "title",
    field_2: "phone",
    field_3: "email"
}
```

Here is the result:

<Demo path="org-chart-js/fields" />

Note that the email in the last node is missing, the fields are not mandatory in the JSON object.


## Node image fields

In the following example we are going to demonstrate how to add two image fields. Define two fields in the template:

```javascript
OrgChart.templates.ana.img_0 = 
    `<image preserveAspectRatio="xMidYMid slice" xlink:href="{val}" x="20" y="-15" width="80" height="80"></image>`;
OrgChart.templates.ana.img_1 = 
    `<image preserveAspectRatio="xMidYMid slice" xlink:href="{val}" x="150" y="-15" width="80" height="80"></image>`;
```

Then define the binding:

```javascript
nodeBinding: {
    field_0: "name",
    img_0: "photo1",
    img_1: "photo2",
}
```

<Demo path="org-chart-js/node-image-fields" />


## Node properties binding

You can also bind node properties like **id**, **pid**, **tags**, **title**, **children** etc.

```javascript
nodeBinding: {
    level: "level",
    templateName: "templateName",
    childrenIds: "childrenIds",
    tags: "tags",
    name: "name"
},
```

<Demo path="orgchart-js/custom-template-node-properties" />


## Node SVG fields

The nodes are not limited to text and image fields, you can define any SVG element as field.

```javascript
OrgChart.templates.olivia.webcallMe = '<g transform="matrix...';
OrgChart.templates.olivia.linkedIn = '<g transform="matrix...';
OrgChart.templates.olivia.facebook = '<g transform="matrix...';
```

Then define the binding:

```javascript
nodeBinding: {
    field_0: "name",
    webcallMe: "webcallMe",
    linkedIn: "linkedIn",
    facebook: "facebook"
},
```

Here is the result:

<Demo path="org-chart-js/node-svg-fields" />


## Node HTML fields

In some cases you will need to add HTML tags inside the node.

Define field in the template:

```javascript
OrgChart.templates.ana.html = 
    `<foreignobject class="node" x="10" y="10" width="200" height="100">{val}</foreignobject>`;
```

Add it in binding:

```javascript
html: "html"
```

Data example:

```javascript
{ 
  id: "1", 
  html: "<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id pellentesque lacus.</div>" 
}
```

Here is the result:

<Demo path="org-chart-js/node-html-fields" />


Another example (flip with CSS perspective):

<Demo path="org-chart-js/flip" />


## Dynamic field

You can create dynamic field using a function.

```javascript
OrgChart.templates.olivia.field_0 = function(node, data, template, config){
    return `<text data-width="${node.w - 20}"
                    style="font-size: 20px;"
                    class="olivia-f0"
                    x="${node.w / 2}" y="${node.h / 2}"
                    text-anchor="middle">
        <a href="${data.link}" target="blank">${data.name}</a>
    </text>`
};
```

<Demo path="orgchart-js/dynamic-field" />


## Labels

Also you can add link labels:

```javascript
linkBinding: {
    link_field_0: "createdAt"
},
```

<Demo path="org-chart-js/labels" />
```
