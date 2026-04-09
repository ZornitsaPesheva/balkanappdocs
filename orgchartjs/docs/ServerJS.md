---
outline: deep
head:
  - - meta
    - property: og:image
      content: https://balkan.app/Content/img/oc.png
  - - meta
    - property: og:title
      content: Server JS Installation | OrgChart JS
---


# Server JS Installation

<Tabs defaultTab="windows">
  <Tab name="windows" label="Windows">

## Prerequisites

- IIS (Internet Information Services) installed
- ASP.NET Core Runtime 9.0.2
- Admin rights on your Windows machine

## Installation

1. Download [serverjs.zip](https://orgchartjs.balkan.app/_content/JS/ServerJS.zip).
2. Unzip it to `C:\inetpub\wwwroot\YourWebsite`.
3. Run `inetmgr` (IIS).
4. Add a website:
   - Right-click `Sites` and select `Add Website`
   - Name: `YourWebsite`
   - Path: `C:\inetpub\wwwroot\YourWebsite`
   - Port: `80` or custom
   - Click `OK`
5. Start the site and test it:
   - In IIS, right-click the site and select `Manage Website > Browse`
   - Or go to `http://localhost`; if the installation was successful, you should see a home page like [this](https://serverjs.balkan.app/)
   - To test the PowerPoint export functionality, click `Test PowerPoint Export`

::: details Visio-Specific Instructions

1. Make sure you can create and save a Visio file.
2. Run `dcomcnfg` as administrator.
3. In the right pane go to `Console Root > Component Services > Computers > [My Computer] > DCOM Config`.
4. Right-click `Microsoft Visio 2003-2010 Drawing` and select `Properties`.
5. Open the `Security` tab and in `Launch and Activation Permission` select `Customize > Edit > Add > Advanced > Find Now`, then select `IIS_IUSRS`, click `OK`, enable all `Allow` permissions, and click `OK` again. Do the same for `Access Permissions`, then click `Apply`.
6. On the `Identity` tab select `The interactive user`.
7. Click `Apply`.
8. Start the website and open `http://localhost` on the same machine, then click `Test Visio Export`.

### Remote server session requirement

To export Visio files, Visio needs an open user session to run. On a remote server, you can keep the current session active after closing Remote Desktop by adding a Scheduled Task.

1. Press `Win + R`, type `taskschd.msc`, and press Enter.
2. In Task Scheduler, click `Create Task` in the right-hand pane.
3. Give the task a name, then select `Run whether user is logged on or not` and `Run with highest privileges`.
4. Open `Triggers` and click `New`.
5. For `Begin the task`, select `On disconnect from user session`, then click `OK`.
6. Open `Actions` and enter `tscon` in `Program/script`, and `2 /dest:console` in `Add arguments`, where `2` is the number of the current session.

:::

  </Tab>

  <Tab name="linux" label="Linux">

## 1. Install .NET 9 Runtime

Run the following commands:

```bash
wget https://packages.microsoft.com/config/ubuntu/22.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb
sudo apt update
sudo apt install -y dotnet-sdk-9.0
```

## 2. Install graphic packages

```bash
sudo apt update && sudo apt install -y libnss3 libatk1.0-0t64 libatk-bridge2.0-0t64 libcups2t64 libdrm2 libxcomposite1 libxdamage1 libxrandr2 libgbm1 libasound2t64 libpangocairo-1.0-0 libxshmfence1 libxkbcommon0
```

and

```bash
sudo apt update && sudo apt install -y libxfixes3 libxrender1 libxcursor1 libxi6 libxtst6
```

## 3. Download Server JS

Download the package here: [serverjs.zip](https://orgchartjs.balkan.app/_content/JS/ServerJS.zip)

## 4. Extract the archive

```bash
unzip ServerJS.zip
```

## 5. Change settings for Linux

Open `appsettings.json` and make the following changes.

Change the temp folder to `/tmp`:

```json
"TempDir": "/tmp"
```

Uncomment this row:

```json
"Args": [ "--no-sandbox" ],
```

## 6. Run Server JS

Navigate to the `ServerJS` folder and start the application:

```bash
cd ServerJS
dotnet serverjs.balkan.app.dll
```

The server should now be running.

  </Tab>
</Tabs>

## Usage

To use your own Server JS, add the `serverUrl` option to the OrgChart JS configuration:

```javascript
var chart = new OrgChart('#tree', {
    serverUrl: "https://YourWebsite.com"
});
```

