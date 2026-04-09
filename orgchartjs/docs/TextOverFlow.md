---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
  - - meta
    - property: og:title
      content: Text Overflow | OrgChart JS
---


# Text Overflow

The `data-text-overflow` template field attribute specifies how overflowed content that is not displayed should be signaled to the user. It can be clipped, display an ellipsis (...), or multiline.  
If the `data-text-overflow` is set to `ellipsis` the entire text is shown on hover.

Both attributes are required:

- **data-text-overflow** – how to handle the text overflow  
- **data-width** – the field width  



## Clipped field (ellipsis)

```javascript
OrgChart.templates.myTemplate.field_0 = 
    `<text data-width="230" data-text-overflow="ellipsis" style="font-size: 24px;" fill="#757575" x="125" y="100" text-anchor="middle">
        {val}
    </text>`;
```


## Multiline field

```javascript id="7pq1mh"
OrgChart.templates.myTemplate.field_1 = 
    `<text data-width="230" data-text-overflow="multiline" style="font-size: 16px;" fill="#757575" x="125" y="30" text-anchor="middle">
        {val}
    </text>`;
```


## Available options for `data-text-overflow`

* **ellipsis** – adds ellipsis if the field is longer than `data-width`
* **multiline** – splits the text into multiple lines
* **multiline-2** – splits the text into 2 lines
* **multiline-3** – splits the text into 3 lines
* **multiline-n** – splits the text into n lines
* **multiline-2-ellipsis** – 2 lines + ellipsis
* **multiline-3-ellipsis** – 3 lines + ellipsis
* **multiline-n-ellipsis** – n lines + ellipsis


## Result

<Demo path="org-chart-js/text-overflow" />



The `text-anchor` attribute is used to align (start-, middle- or end-alignment) a string of text relative to a given point.



## Text overflow with dynamic field

In some cases we create the fields dynamically. In these cases we use:

**`OrgChart.wrapText`**

```javascript id="f8k2pz"
let field_template = `<text x="125" y="70" style="font-size: 24px;" fill="#039ae5" text-anchor="middle"></text>`

OrgChart.templates.olivia.field_0 = function (node, data, template, config, value) {

    let text = OrgChart.wrapText(
        value,
        field_template,
        node.w - 10,
        2 // lines
    );

    return `<a href="${data.link}" target="_blank">${text}</a>`
};
```

<Demo path="orgchart-js/wraptext" />

## Dynamic group field

Here is an example of dynamic group field:

<Demo path="orgchart-js/dynamic-group-field-text-width" />


