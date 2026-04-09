---
outline: deep
head:
  - - meta
    - property: og:image
      content: http://balkan.app/Content/img/mobile.png
  - - meta
    - property: og:title
      content: AI | OrgChart JS
---



# AI

To enable AI in your organizational chart, set **enableAI** to `true`:

```javascript
let chart = new OrgChart(document.getElementById("tree"), {
    enableAI: true,
    ...
});
````

<Demo path="orgchart-js/ai-example" height="700px" />

---

## Example prompts

* Add new employee Ivan under Ruby
* How many employees?
* Increase the salary of Amelia with little
* Highlight sales

---

## Customization

Here is an example that sends a message to a given employee:

<Demo path="orgchart-js/built-in-ai-experimental" height="700px" />

---

## aiChatTools

You can provide functions to the AI using **aiChatTools**:

```javascript
let chart = new OrgChart(document.getElementById("tree"), {
    enableAI: true,
    aiChatTools: [{
        functionName: 'sendEmail',
        functionDescription: 'Send an email to a given employee with a subject and message.',
        functionParameters: {
            type: "object",
            properties: {
                to: {
                    type: "string",
                    description: "The employee email address."
                },
                subject: {
                    type: "string",
                    description: "Email subject line."
                },
                body: {
                    type: "string",
                    description: "Body of the email message."
                }
            },
            required: ["to", "subject", "body"]
        },
        strict: true
    }]
});
```

## Handling AI tool calls

```javascript
function sendEmail(args){
    window.location.href =
        `mailto:${args.to}&subject=${encodeURI(args.subject)}&body=${encodeURI(args.body)}`;
    return 'ok';
}

chart.onAIToolCalls(function(args){
    for (var toolCall of args.toolCalls){
        if (toolCall.FunctionName == 'sendEmail'){
            toolCall.FunctionResult = sendEmail(toolCall.FunctionArguments);
        }
    }
});

chart.load(nodes);
```

## Example result

![Email example](http://balkan.app/Content/img/email.png)


## System instructions

You can provide system instructions:

```javascript
OrgChart.AI_SYSTEM_MESSAGES = [
    "You are acting as Microsoft's HR assistant."
];
```

<Demo path="orgchart-js/ai-system-messages" height="700px" />


::: warning Server JS

* The data is not used for training the AI model
* If you don’t want to send data, install [Server JS](/ServerJS) locally.
  :::

## Server JS Installation

### 1) Install Server JS on your server

* Follow the installation instructions
* Configure `appsettings.json`:

```json
{
  "OpenAIEndPoint": "https://api.openai.com/v1",
  "OpenAIApiKey": "YOUR_OPENAI_API_KEY"
}
```

### 2) Point OrgChart JS to your Server JS

Add the `serverUrl` option:

```javascript
let chart = new OrgChart({
  serverUrl: "https://your-server-js.example.com"
});
```

Replace `YOUR_OPENAI_API_KEY` and the URL with your actual values.

