# RepairShipr Node Module

This is an unofficial [RepairShopr](https://www.repairshopr.com/)'s [API](https://api-docs.repairshopr.com/) Node client.

## Installation

```
npm install node-repairshopr
```

## Usage

First you need to instantiate it.

```javascript
const RepairShopr = require('node-repairshopr');

// initialize the class
const rsClient = new RepairShopr({
  host: 'yourname.repairshopr.com,
  key: 'your api key'
});
```

Using the created client, call the methods you need, example:

```javascript
// RepairShopr me: https://api-docs.repairshopr.com/#/User/get_me
rsClient
  .get("me")
  .then(me => {
    console.log("me:", me);
  })
  .catch(e => console.log("ERROR:", e));

// Repairshopr customers: https://api-docs.repairshopr.com/#/Customer/get_customers
rsClient
  .get("customers")
  .then(customers => {
    console.log("customers returned:", customers.length);
  })
  .catch(e => console.log("ERROR:", e));

// Repairshopr customers: https://api-docs.repairshopr.com/#/Customer/get_customers
// FetchAll customers example
rsClient
  .get(
    "customers",
    // Addtional Paramters
    {
      // Repairshopr has default 100 records limit. Use fetchAll to use multiple requests to get all the records.
      // warning, if you have (for example) 2700 customers, this will make 27 API requests.
      fetchAll: true
    }
  )
  .then(customers => {
    console.log("customers returned:", customers.length);
  })
  .catch(e => console.log("ERROR:", e));

// Repairshopr customers: https://api-docs.repairshopr.com/#/Customer/get_customers
// Addtional options example
rsClient
  .get(
    "customers",
    // Addtional Paramters
    // you can use any other Paramters from official api at https://api-docs.repairshopr.com/#/Customer/get_customers
    {
      // Repairshopr has default 100 records limit. Use fetchPages to return a few pages of records
      // warning, if you have (for example) over 300 customers, this will make 3 API requests.
      fetchPages: 3,

      // starting page to fetch (Default: 1)
      page: 3
    }
  )
  .then(customers => {
    console.log("customers returned:", customers.length);
  })
  .catch(e => console.log("ERROR:", e));
```

# Change Log

All notable changes to the "node-repairshopr" module will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.4]

## Added

- added fetchPages option to limit the amount of pages returned.

### Changed

- updated to latest version of request 2.88.2

#### Note

Changelog and License moved into Readme to simplify the package.

## [1.0.4]

## Added

- added option callsPerMinute to throttle the api calls. Currently RepairShopr limits api calls to 120 calls per minute. That is a max of 2 api calls per second.

## [1.0.3]

### Added

- add fetchAll to request options to get around the max api limit oppoised by RepairShopr.

### Changed

- License changed to MIT.

## [1.0.2]

- Fixed Add, Update, Delete requests.

## [1.0.0]

- Initial release

# License

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
