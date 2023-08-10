# oxiapi
The easiest way to interact with **[The OxiAPI](https://oxiapi.carrd.co)**, a spanish API.

## Table of contents
- **[Installation & examples](#installation)**
- **[Available endpoints](#available-endpoints)**

## Installation
```bash
npm install oxiapi
```
### Example
```js
const api = require('oxiapi');

(async () => {
    const data = await api.json.translate(null, 'en', '¡Hola!'); // 1st parameter is "from" (from what language to translate), if you leave it undefined or 'null', it'll use auto language detection.
    console.log('Result: ' + JSON.stringify(data));
});
```

## Available endpoints
> _**Note:** parameters including '?' at the end means they're optional._
- **JSON:**
  - **fact** - _Returns a random fact (in spanish)_
  - **translate(from, to, text)** - _Translates given text to another language._
  - **calculate(expr)** - _Solves a math expression._
  - **npm(packagename)** - _Get info about a NPM package._
  - **formatDate(timestamp, format, uselowcase?)** - _Format a date to nearly any format you want._
- **Image:**
  - > _Coming soon!_
