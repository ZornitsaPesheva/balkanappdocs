---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
---

# Undo/Redo

This is useful if you've made a mistake or want to undo changes for any other reason.

You can undo and redo many actions in **OrgChart**, and you have counters for both. Every undo/redo action is saved in the browser `window.sessionStorage` and can also be saved in a database.

## How to add undo/redo buttons


You just need to add the **undoRedoStorageName** property in the configuration.  
This string will be used as the storage name:

```javascript
undoRedoStorageName: 'myStorageName',
```

<Demo path="simple-chart-with-undoredostoragename" />

## How to update the database

With the undo/redo option you should use the **onUpdated** method to update your database:

```javascript
chart.onUpdated(function(args){
    // post config data to your server
    // args.config.nodes
});
```

<Demo path="org-chart-js/database-update-on-undoredo" />

## UI customization

You can use the **onChange** method to create your own UI.

Buttons:
```html
<button id="btn_undo">Undo</button>
<button id="btn_redo">Redo</button>
```

JS:
```javascript
let btn_undo = document.getElementById('btn_undo');
let btn_redo = document.getElementById('btn_redo');

chart.undoRedoUI.onChange((args) => {    
    btn_undo.innerHTML = `undo (${args.undoStepsCount})`;          
    btn_redo.innerHTML = `redo (${args.redoStepsCount})`;        
    btn_undo.disabled = args.undoStepsCount == 0;
    btn_redo.disabled = args.redoStepsCount == 0;
    return false;
});

btn_undo.addEventListener('click', function(){
    chart.undo();
});

btn_redo.addEventListener('click', function(){
    chart.redo();
});
```

Here is a code demo:

<Demo path="org-chart-js/change-the-ui-if-undo-redo-buttons" />
```




