---
outline: deep
head:
  - - meta
    - property: og:image
      content: https://balkan.app/Content/img/oc.png
  - - meta
    - property: og:title
      content: Edit | OrgChart JS
---



# Edit

## Open Edit Form

The Edit Form can be opened from the node menu, the node click event, the `nodeMouseClick` option, or by directly calling `chart.editUI.show()`.

Example with `nodeMenu`:

```javascript
nodeMenu: {
    details: { text: "Details" },
    edit: { text: "Edit" },
    add: { text: "Add" },
    remove: { text: "Remove" }
},
```

Open the Edit Form on node click:

```javascript id="edit-on-click"
chart.onNodeClick((args) => {
    chart.editUI.show(args.node.id, false);
    // chart.editUI.show(args.node.id, true); // details mode
    return false; // cancel the click event
});
```

`nodeMouseClick` option values:

```javascript id="node-mouse-click"
nodeMouseClick: OrgChart.action.edit, // edit mode
// nodeMouseClick: OrgChart.action.details, // details mode
// nodeMouseClick: OrgChart.action.none, // prevent opening
```

## Read only

The Edit Form can be opened in two modes: **edit** and **details**.
Details mode is read-only.

To disable editing, set:

```javascript id="read-only"
editForm: { readOnly: true }
```

## Configure Edit Form

![Edit Form](http://balkan.app/content/img/edit-form.png)

## Elements binding

The Edit Form is fully configurable and consists of **Title**, **Photo**, **Buttons**, and **Elements**.

Example data:

```javascript id="edit-data"
let nodes = [
    { id: 1, Name: "John Smith", ImgUrl: "https://cdn.balkan.app/shared/anim/1.gif" }
];
```

Bind title and photo:

```javascript id="title-photo-binding"
editForm: {
    titleBinding: "Name",
    photoBinding: "ImgUrl"
}
```

OrgChart will display `"Name"` as the title and `"ImgUrl"` as the photo, and it will auto-generate input elements for those fields.

If you want to customize the labels or hide some generated fields, set `generateElementsFromFields` to `false` and define your own elements:

```javascript id="custom-elements"
editForm: {
    generateElementsFromFields: false,
    elements: [
        { type: 'textbox', label: 'Full Name', binding: 'Name' },
        { type: 'textbox', label: 'Phone number', binding: 'phone' }
    ]
}
```

Supported input elements:

```javascript id="element-types"
{ type: 'textbox', label: 'Full Name', binding: 'EmployeeName' },
{ type: 'date', label: 'Start Date', binding: 'sdate' },
{ type: 'checkbox', label: 'Is Active', binding: 'active' },
{
    type: 'select',
    options: [
        { value: 'bg', text: 'Bulgaria' },
        { value: 'ru', text: 'Russia' }
    ],
    label: 'Country',
    binding: 'country'
},
{
    type: 'multiSelect',
    options: [
        { value: 'tag0', text: 'Tag 0' },
        { value: 'tag1', text: 'Tag 1' },
        { value: 'tag2', text: 'Tag 2' },
        { value: 'tag3', text: 'Tag 3' },
        { value: 'tag4', text: 'Tag 4' },
        { value: 'tag5', text: 'Tag 5' },
        { value: 'tag6', text: 'Tag 6' }
    ],
    label: 'Tags',
    binding: 'tags'
}
```

You can also add validation for textboxes:

```javascript id="textbox-validation"
{
    type: 'textbox',
    label: 'Email Address',
    binding: 'Email',
    validators: {
        required: 'Is required',
        email: 'Invalid email'
    }
}
```

## Buttons configuration

Configure the buttons like this:

```javascript id="edit-form-buttons"
editForm: {
    buttons: {
        edit: {
            icon: OrgChart.icon.edit(24,24,'#fff'),
            text: 'Edit',
            hideIfEditMode: true,
            hideIfDetailsMode: false
        },
        share: {
            icon: OrgChart.icon.share(24,24,'#fff'),
            text: 'Share'
        },
        pdf: {
            icon: OrgChart.icon.pdf(24,24,'#fff'),
            text: 'Save as PDF'
        },
        remove: {
            icon: OrgChart.icon.remove(24,24,'#fff'),
            text: 'Remove',
            hideIfDetailsMode: true
        }
    }
}
```

If you do not need a button, set it to `null`:

```javascript id="remove-button"
editForm: {
    buttons: {
        pdf: null
    }
}
```

Use `hideIfEditMode` and `hideIfDetailsMode` to control button visibility.

Built-in buttons with actions are:

* **edit** – switches the form to edit mode
* **share** – uses the native device share feature
* **pdf** – exports node data to an A4 PDF
* **remove** – deletes the node

You can also change the Edit Form header color for a template:

```javascript id="edit-form-color"
OrgChart.templates.anaOrange.editFormHeaderColor = '#FFCA28';
```

## Edit Form Example

<Demo path="org-chart-js/editform" />

## Cancel changes

The chart data changes while you type. By default, data is saved when the form is closed.

To add a **Cancel** button and prevent auto-save on hide, set `saveOnHide` to `false`:

<Demo path="orgchart-js/saveonhide" />

You can also customize the button text:

```javascript id="save-cancel-text"
editForm: {
    cancelBtn: 'Close',
    saveAndCloseBtn: 'Save'
}
```

## Edit form Style

You can change the Edit Form color for a node with CSS and node tags.

<Demo path="org-chart-js/edit-form-css#CSS" />

## "Add more fields"

To change or hide the **Add More Fields** text, configure these properties:

```javascript id="add-more-fields"
editForm: {
    addMore: 'Add more elements',
    addMoreBtn: 'Add element',
    addMoreFieldName: 'Element name',
}
```

## Add Your Buttons

In some cases you may want to add more buttons to the Edit Form, for example:

* change the selected node template
* export to SVG
* open a new browser tab

Example: open Google Maps for a node:

<Demo path="org-chart-js/your-button-in-edit-form" />

## Add Your Elements

You can add custom input elements to the Edit Form by adding a new static method to `OrgChart.elements`.

Example with a custom textarea element:

<Demo path="org-chart-js/your-element-in-edit-form" />

## Custom Edit Form

If you do not want to use the built-in Edit Form, you can define your own.

Create a JavaScript class with the following methods:

```javascript id="custom-edit-form-class"
let editForm = function () {

};

editForm.prototype.init = function (obj) {

};

editForm.prototype.show = function (node) {

};

editForm.prototype.hide = function (shouldUpdateTheNode) {

};
```

Then instantiate it:

```javascript id="custom-edit-form-init"
editUI: new editForm(),
```

Example:

<Demo path="org-chart-js/custom-edit-form" />


