---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
---

# Import

OrgChart JS supports importing from CSV, XML, and JSON files.

## CSV

```javascript
menu: {
  importCSV: {
    text: "Import CSV",
    icon: OrgChart.icon.csv(24, 24, "#7A7A7A"),
    onClick: function () { chart.importCSV(); }
  }
},
```

## XML

```javascript
menu: {
  importXML: {
    text: "Import XML",
    icon: OrgChart.icon.xml(24, 24, "#7A7A7A"),
    onClick: function () { chart.importXML(); }
  }
},
```

## JSON

```javascript
menu: {
  importJSON: {
    text: "Import JSON",
    icon: OrgChart.icon.json(24, 24, "#7A7A7A"),
    onClick: function () { chart.importJSON(); }
  },
},
```

## Demo

This is a demo for importing. You can export, edit the file, and then import it again.

<Demo path="org-chart-js/importing" />

