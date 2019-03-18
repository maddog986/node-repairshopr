# RepairShipr Node Module

This is an unofficial [RepairShopr](https://www.repairshopr.com/)'s [API](https://feedback.repairshopr.com/knowledgebase/articles/376312-repairshopr-http-rest-api) Node client.

Test it live at https://codesandbox.io/s/github/maddog986/node-repairshopr

## Installation

```
npm install node-repairshopr
```

## Usage

First you need to instantiate it.

```javascript
const RepairShopr = require('node-repairshopr');

const rsClient = new RepairShopr({
  host: 'yourname.repairshopr.com,
  key: 'your api key'
});
```

Using the created client, call the methods you need, example:

```javascript
rsClient
  .get('me')
  .then(response => {
    console.log('me:', response);
  })
  .catch(e => console.log('ERROR:', e));

//RepairShopr limits to 100
rsClient
  .get('customers')
  .then(response => {
    console.log('customers:', response);
  })
  .catch(e => console.log('ERROR:', e));

//RepairShopr limits to 100, use fetchAll to keep requesting until all customers are fetched
//warning, if you have (for example) 2700 customers, this will make 27 API requests.
rsClient
  .get('customers', { fetchAll: true })
  .then(response => {
    console.log('customers:', response);
  })
  .catch(e => console.log('ERROR:', e));
```

## Release Notes

[See Changelog](https://github.com/maddog986/node-repairshopr/blob/master/CHANGELOG.md)

## License

MIT License

Copyright(c) 2019 Drew Gauderman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files(the "Software"), to deal
  in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
