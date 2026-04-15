---
outline: deep
head:
  - - meta
    - property: og:image
      content: https://balkan.app/Content/img/oc.png
  - - meta
    - property: og:title
      content: Salesforce | OrgChart JS
---

# Salesforce Lightning Web Component

This document shows you how you can use **OrgChart JS** in a Salesforce Lightning Web Component.

## 1. Edit orgchart.js

Download OrgChart JS and add the following line at the end of **orgchart.js**:

```javascript
window.OrgChart = OrgChart;
```

## 2. Signup / Login

Signup with Salesforce using this [link](https://developer.salesforce.com/signup) or login to your account.

## 3. Upload static resource

Once you login to Salesforce:

* Click the gear icon → **Setup**
![Setup](https://balkan.app/Content/img/salesforceGearIconSetup.png)
* Search for **Static Resources**
![Staic](https://balkan.app/Content/img/salesforceStaticResources.png)
* Click **New**
![New](https://balkan.app/Content/img/SalesforceNewStaticResource.png)
* Upload `orgchart.js`

You shuld see this:
![Upload](https://balkan.app/Content/img/salesforceOrgChartUloaded.png)

## 4. Add Trusted Sites (optional)

Only needed for trial version, exports or AI services.

* Go to **Trusted URLs**
![Trusted](https://balkan.app/Content/img/salesforceCSP.png)
* Click **New Trusted URL**
![New Trusted](https://balkan.app/Content/img/salesforceNewTrusted.png)

Add:

* `https://*.azurewebsites.net` (trial)
* `https://serverjs.balkan.app` (exports & AI)
![Add Trusted](https://balkan.app/Content/img/salesforceAzureAdd.png)

If you have added both, you should see this in the list:
![All Trusted](https://balkan.app/Content/img/salesforceTrusted.png)

## 5. Install Visual Studio Code

Install VS Code if you don’t have it.

## 6. Setup VS Code

Follow:
[Set Up Visual Studio Code for Salesforce](https://trailhead.salesforce.com/en/content/learn/projects/quick-start-lightning-web-components/set-up-visual-studio-code)

## 7. Install Salesforce CLI

[https://developer.salesforce.com/tools/sfdxcli](https://developer.salesforce.com/tools/sfdxcli)

## 8. Create project

* Open Command Palette (**Ctrl+Shift+P**) ((**Cmd+Shift+P**) for macOS)
* Type `SFDX`
* Select **SFDX: Create Project**
* Name: `OrgChartLightningWebComponent`

## 9. Authorize Org

* Command Palette → `SFDX`
* Select **Authorize an Org** -> **Project Default**
* Login and allow access

## 10. Create Lightning Web Component

* Command Palette → `SFDX`
* Select **Create Lightning Web Component**
* Name: `orgchartLWC` and accept default folder

![VS](https://balkan.app/Content/img/salesforceCreateLWC.png)

## 11. Add(Replace) code

### HTML

```html
<template>
    <div class="slds-box slds-theme_default custom-background">
        <div data-id="tree" class="orgchart" data-width="800" data-height="450" lwc:dom="manual"></div>
    </div>
</template>
```

### JS

```javascript
import { LightningElement, api } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import orgChartJSF from '@salesforce/resourceUrl/orgchart';

export default class ContactHierarchy extends LightningElement {
    error;
    chart;
    initialized = false;

    @api recordId;

    renderedCallback() {
        if (this.initialized) return;
        this.initialized = true;

        Promise.all([
            loadScript(this, orgChartJSF),
        ])
        .then(() => {
            this.initialize();
        })
        .catch((error) => {
            this.error = error; 
        });
    }
       
    initialize() {
        var nodes = [
            { id: 1 },
            { id: 2, pid: 1 },
            { id: 3, pid: 1 }
        ];

        var chart = new OrgChart(this.template.querySelector('[data-id="tree"]'), {});
        chart.load(nodes);
    }
}
```

### meta.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <targets> 
        <target>lightning__AppPage</target>
        <target>lightning__RecordPage</target>
        <target>lightning__HomePage</target>
    </targets>
    <apiVersion>52.0</apiVersion>
    <isExposed>true</isExposed>
</LightningComponentBundle>
```

## 12. Deploy project

* Right-click `force-app/main/default`
* Select **SFDX: Deploy This Source to Org**
You should have received a notice that states:ended SFDX: Deploy Source to Org
![Deploy](https://balkan.app/Content/img/salesforceDeploy.png)

## 13. Use component in Salesforce

* Go to **Accounts**
![Accounts](https://balkan.app/Content/img/SalesForceAccounts.png)
* Open a record
* Click **Edit Page**
![Edit](https://balkan.app/Content/img/salesforceEditPage.png)
* Search for `orgchartLWC`
![Search](https://balkan.app/Content/img/salesforceFindComponent.png)
* Drag & drop component
![DragDrop](https://balkan.app/Content/img/salesforceDragDrop.png)
You should now be able to see the chart.
![See chart](https://balkan.app/Content/img/salesforceSeeChart.png)
* Click **Save** and **Activate**
On Activation: Contact Record Page click on **Assign as Org Default**

On the next page select **Desktop and Phone** and click **Next**

On the next page click **Save**

You should now see the chart on the page.
![Done](https://balkan.app/Content/img/salesforceFinal.png)


