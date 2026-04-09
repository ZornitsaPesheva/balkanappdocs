---
outline: deep
head:
  - - meta
    - property: og:image
      content: https://balkan.app/Content/img/oc.png
  - - meta
    - property: og:title
      content: State | OrgChart JS
---


# State

Persist the state (scale, position, expanded/collapsed and min/max nodes) in the url or indexedDB.

*Default value:* null

## Options:

- name  
- readFromLocalStorage  
- writeToLocalStorage  
- readFromIndexedDB  
- writeToIndexedDB  
- readFromUrlParams  
- writeToUrlParams  

**Code example:**

```javascript
let chart = new OrgChart(document.getElementById('tree'), {
    state: {
        name: 'StateForMyTree',
        readFromLocalStorage: true,
        writeToLocalStorage: true,
        readFromIndexedDB: true,
        writeToIndexedDB: true,
        readFromUrlParams: true,
        writeToUrlParams: true
    },
    nodes: [
        { id: 1 },
        { id: 2, pid: 1 }
    ]
});
```

## 1. Local storage

Use **name** to save a state name.

**Code example:**

```javascript
state: {
    name: 'StateForMyTree',
    readFromLocalStorage: true,
    writeToLocalStorage: true,
},
```

You can see the result here:

![State](https://balkan.app/Content/img/state.png)

You can test the state here by collapsing some nodes, changing the position of the chart and refreshing the page (F5).

**Limitation:** most browsers have a 5MB limit for local storage.

<Demo path="org-chart-js/state" />


## 2. IndexedDB

Usage is the same as Local storage.  
**Limitations:** does not work in iframe.

**Code example:**

```javascript
state: {
    name: 'StateForMyTree',
    readFromIndexedDB: true,
    writeToIndexedDB: true,
},
```

## 3. URL

Use **stateToUrl** method to open the saved state in the browser.

**Signature:**

```javascript 
chart.stateToUrl();
```

<Demo path="org-chart-js/state-in-url" />

## Priority

1. readFromUrlParams  
2. readFromLocalStorage  
3. readFromIndexedDB 

