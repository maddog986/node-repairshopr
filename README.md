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
const rsClient = new RepairShopr({
  host: process.env.HOST,
  key: process.env.KEY
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

## License

[See License](https://github.com/maddog986/node-repairshopr/blob/master/LICENSE)

## Release Notes

[See Changelog](https://github.com/maddog986/node-repairshopr/blob/master/CHANGELOG.md)
