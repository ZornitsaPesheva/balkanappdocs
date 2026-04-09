---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
---


# Navigation

You can navigate the chart in the following ways:

1. Mouse Scroll  
2. Pan  
3. Zoom  

## Mouse Scroll

The default `mouseScroll` option is **zoom**.  
To disable zoom, you need to set a different option.

### Vertical and Horizontal scroll

Set `mouseScroll` to:

```javascript id="mouse-scroll"
mouseScroll: OrgChart.action.scroll
````

Then you can navigate using:

* Scroll up/down
* Hold **Shift** to scroll left/right
* Hold **Ctrl** to zoom with the mouse wheel
* On devices like **Apple Magic Mouse** or **Logitech G502**, you can scroll in all directions without holding Shift

<Demo path="org-chart-js/scroll" />

Add scroll bars using:

```javascript
showXScroll: true,
showYScroll: true
```

<Demo path="org-chart-js/ccrollbars" />

### Horizontal scroll only

In order to enable horizontal scroll bar set **showXScroll** to **true**. Also you have an option to use the mouse scroll set **mouseScrool** to **

<Demo path="org-chart-js/horizontal-scroll" />

### Vertical scroll only

Now set the **showYScroll** to **true** and change **mouseScrool** to **OrgChart.action.yScroll**

<Demo path="org-chart-js/vertical-scroll" />

### Scroll sensitivity

To increase or decrease scroll sensitivity change **OrgChart.scroll.smooth** and **OrgChart.scroll.speed** constants, the default values are:

```javascript
OrgChart.scroll.smooth = 12;
OrgChart.scroll.speed = 120;
```

Also you can change the scroll sensitivity for a specific browser. For example:

```javascript
OrgChart.scroll.safari = {
    smooth: 12,
    speed: 500
};
OrgChart.scroll.ie = { smooth: 12, speed: 200 };
OrgChart.scroll.edge = { smooth: 12, speed: 200 };
OrgChart.scroll.chrome = { smooth: 12, speed: 200 };
OrgChart.scroll.firefox = { smooth: 12, speed: 200 };
OrgChart.scroll.opera = { smooth: 12, speed: 200 };
```

## Pan

Pan/move, left-click and hold mouse button in the chart and drag the mouse in any direction. You cannot disable the Pan navigation.

## Zoom

Change **mouseScrool** to **OrgChart.action.zoom**:

<Demo path="org-chart-js/zoom" />

## Ctrl + Zoom

Change **mouseScrool** to **OrgChart.action.ctrlZoom** to use Ctrl + zoom without affecting mouse scroll for up/down and left/right:

<Demo path="org-chart-js/ctrl-zoom" />

## Toolbar

You can use the **Toolbar** buttons to change the zoom:

<Demo path="org-chart-js/toolbar-buttons" />

> ⚠️ **obsolete**  
> For better experience please use the new feature [Controls](https://balkan.app/OrgChartJS/Docs/Controls) instead of Toolbars.

## Mini map

Show mini map over the tree.

Set **miniMap** option to **true**.

<Demo path="org-chart-js/mini-map" />

## Mini map properties

You have several properties for the mini map, that you can set:

- **colors** - array of colors that are set for the different subtree levels  
- **selectorBackgroundColor** - the "background" color in the mini map  
- **focusStroke** - the color of the focus rectangle stroke  
- **opacity** - number from 0 to 1 - the opacity of the "background"  
- **border** - the CSS border definition of the mini map  
- **width** - width in pixels  
- **height** - height in pixels  
- **padding** - padding of the mini map in pixels  
- **position** - object with top, left, right and bottom properties to position the mini map. You can use `padding`, `undefined` or pixels  
- **draggable** - boolean - the default value is true  

**Example:**

<Demo path="org-chart-js/minimap-properties-example" />

## Moving the tree programmatically

You can move the tree programmatically using the methods  
**[moveStart](https://balkan.app/OrgChartJS/API/classes/OrgChart#moveStart)** and  
**[moveEnd](https://balkan.app/OrgChartJS/API/classes/OrgChart#moveEnd)**

Here is how you can move it holding a button down:

<Demo path="org-chart-js/moving-the-chart-with-mousedown-and-mouseup" />

Here is how you can move it by starting and stopping the function:

<Demo path="org-chart-js/moving-the-chart-on-button-click" />

## Moving nodes to the visible area

You can use the **moveNodesToVisibleArea** method to move an array of nodes to the visible area.

Here is a code demo, where we move nodes with ids 10 and 12 in the visible area:

<Demo path="org-chart-js/move-nodes-to-visible-area" />
