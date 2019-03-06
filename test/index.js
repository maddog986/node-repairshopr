const RepairShopr = require('../repairshopr.js');

if (!process.env.HOST || !process.env.KEY) {
  throw new Error('SETUP YOUR ENVIRONMENT VARIABLES');
}

const rsClient = new RepairShopr({
  host: process.env.HOST,
  key: process.env.KEY
});

rsClient
  .get('customers/14130772')
  .then(response => {
    console.log('customers:', response);
  })
  .catch(e => console.log('ERROR:', e));
