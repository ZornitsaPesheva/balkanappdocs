---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
---

# Tags

With **tags** option you can:

- Set specific template for tagged nodes  
- Set specific CSS for tagged nodes  
- Set a specific node menu  
- Set node as assistant or a partner  
- Set the node level  
- Set a subtree configuration (see Sub Trees)  

### Set specific template for tagged nodes

Set a template for a tag in the chart configuration:

```javascript
tags: {
    Management: {
        template: "ula"
    }   
},
```

Add the tag in the node data:

```javascript 
{ id: 2, pid: 1, tags: ["Management"] }
```

### Set specific CSS for tagged nodes

Create the CSS for a tag (red):

```css 
.node.red rect {
    fill: #750000;
}
```

Add the tag in the node data:

```javascript
{ id: 2, pid: 1, tags: ["red"] }
```

### Set node menu items for tagged nodes

Create a tag with a specific menu:

```javascript 
tags: {
    customMenuItems: {
        nodeMenu: {
            add: { text: "Details" }
        }
    }
}
```

Add the tag in the node data:

```javascript 
{ id: 2, pid: 1, tags: ["customMenuItems"] }
```

### Set a template for an assistant

Add a template for the assistant in the configuration:

```javascript
tags: {
    assistant: {
        template: "mery"
    }
},
```

---

### Set the node level

Set the sublevel for a tag:

```javascript 
tags: {
    "subLevels1": {
        subLevels: 1
    },
},
```

Add the tag in the node data:

```javascript 
{ id: 3, pid: 1, tags: ["subLevels1"] }
```

