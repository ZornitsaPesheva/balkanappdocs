---
outline: deep
head:
  - - meta
    - property: og:image
      content: https://balkan.app/Content/img/oc.png
  - - meta
    - property: og:title
      content: Search | OrgChart JS
---


# Search

## Localization

We have localization for the OrgChart search option.  
You just have to set the **SEARCH_PLACEHOLDER** constant:

```javascript
// set before chart declaration
OrgChart.SEARCH_PLACEHOLDER = "Chercher"; // default is "Search"
```

## Enable or Disable Search

You can disable the search option by setting **enableSearch** to `false`.
It is enabled (`true`) by default.

```javascript 
enableSearch: false
```

## Search in particular fields

You can search only in specific fields using **searchFields**.
By default, the search works across all fields.

```javascript
searchFields: ["name", "title", etc...],
```

## Search by weight of the fields

You can control the priority of each field using **searchFieldsWeight**.  
Higher values have higher priority.

```javascript
searchFieldsWeight: {
    "name": 100, // percent
    "manager": 20 // percent
}
```

### Example data

```javascript
{ id: 1, name: "Denny Curtis", manager: "CEO" },
{ id: 2, pid: 1, name: "Ashley Barnett", manager: "Denny Curtis" },
{ id: 3, pid: 1, name: "Caden Ellison", manager: "Denny Curtis" },
```

### Case 1

```javascript
searchFieldsWeight: {
    "name": 100,
    "manager": 20
}
```

![Search by weight](https://code.balkan.app/screenshot/org-chart-js/search-weight-example)

[Click here to see the example](https://code.balkan.app/org-chart-js/search-weight-example#JS)


### Case 2

```javascript
searchFieldsWeight: {
    "name": 20,
    "manager": 100
}
```

![Search by weight](https://code.balkan.app/screenshot/org-chart-js/search-manager-weight-example)

[Click here to see the example](https://code.balkan.app/org-chart-js/search-manager-weight-example#JS)


## Highlight nodes on search enter

You can change how matching and non-matching nodes look using:

* `.match`
* `.no-match`

[CSS example](https://code.balkan.app/highlight-all-nodes-that-match-search-term#CSS)

[Templates example](https://code.balkan.app/org-chart-js/highlight-nodes-on-search-enter-with-templates#JS)


## Search fields abbreviation

You can search by field abbreviation.  
By default, abbreviations are the first letters of the data fields.

To search by abbreviation, type for example:

![Search field abbreviation](https://code.balkan.app/screenshot/org-chart-js/search-fields-abbreviation)

[Click here to see the example](https://code.balkan.app/org-chart-js/search-fields-abbreviation#JS)


You can also set your own search field abbreviations using the **searchFiledsAbbreviation** property:

```javascript
searchFiledsAbbreviation: {        
    tel: 'phone',
    n: 'name'
},
```

![Search field abbreviation](https://code.balkan.app/screenshot/org-chart-js/set-search-abbreviation)

[Click here to see the example](https://code.balkan.app/org-chart-js/set-search-abbreviation#JS)


## Help

You can type **?** for help.

In the help panel you can see the search field abbreviations that you can use to search in specific fields.

![Search help](https://code.balkan.app/screenshot/org-chart-js/search-help)

[Click here to see the example](https://code.balkan.app/org-chart-js/search-help#JS)

You can change the help symbol by setting the **SEARCH_HELP_SYMBOL** constant.  
It can also be a word.  
Leave it empty for the search help to open on click or focus.

```javascript
OrgChart.SEARCH_HELP_SYMBOL = "help";
```


## Display a field in the search result

You can use **searchDisplayField** to choose which field to display in the search results.

```javascript
searchDisplayField: "title",
```

## Search using a function

You can use the **search** function to search in the tree:

```javascript id="search-function"
chart.search(value, searchInFields, retrieveFields);
```

```js
chart.search("c", ["Name", "Title"], ["Title"]);
```

## Search UI Customization

You can use **show-items** and **add-item** event listeners to customize the UI.

In the example below we are using:

- **add-item** to create a custom search result  
- **show-items** to highlight hovered result nodes in the chart  

Here is the code demo:

<Demo path="org-chart-js/searchui-customization" height="900px" />













