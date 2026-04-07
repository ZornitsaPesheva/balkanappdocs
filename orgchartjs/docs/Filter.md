---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
---

# Filter

You can use filters to show/hide or edit particular nodes dynamically based on criteria.  
Filtering data in OrgChart is easy. You can filter by one or more criteria.


## Add Filtering

To add filtering functionality, use the **filterBy** option in the chart configuration.

Then you should add a template or CSS for the filtered nodes.


### filterBy values

The value of **filterBy** can be:

- an array of node properties  
- `"all"`  
- an object that contains filtering properties and initial state values  

You can also customize the text values in the filter.

```js
    //filterBy: ['title', 'city'],
    //filterBy: 'all',
    filterBy: {
        title: {
            'QA Lead': { checked: false, text: 'Leads not working'},
            'Manager': { checked: false, text: 'Managets not working'},
            'QA': { checked: true, text: 'QAs are working'},
        },
        name: {},
        city: {
            'Sofia': { checked: false }
        }
    },
```

## Hiding the filtered nodes

To hide the filtered nodes, add **filter** in the tag configuration and set a template (e.g. `dot`):

```javascript
tags: {
    filter: {
        template: 'dot'
    }
}
```
<Demo path="org-chart-js/filter-dot" />


## Change the template of the filtered nodes

To change the template of the filtered nodes, add **filter** in the tag configuration and set the desired template:

```javascript
tags: {
    filter: {
        template: 'filtered'
    }
}
```

<Demo path="org-chart-js/filter-and-custom-template" />


## Filtering with CSS

You can use CSS to style the filtered nodes:

```css
.filter rect,
.filter image,
.filter text,
.filter use {
    filter: blur(10px);
}
```

<Demo path="org-chart-js/filter-style-css" />


## UI Customization

You can use the following event listeners to customize the filters UI:

- **add-filter**
- **add-item**
- **show-items**


In the example below we are using:

- **add-filter** to add reset filter functionality  
- **add-item** to count nodes in the filter list  
- **show-item** to highlight nodes from the hovered filter  

Here is the code demo:

<Demo path="org-chart-js/filter-ui-customization" height="900px" />


## Localization

You can change the texts **"Filter by"** and **"all"**:

```javascript
OrgChart.filterUI.textFilterBy = 'Filtre par';
OrgChart.filterUI.all = '[Toute]';
```




