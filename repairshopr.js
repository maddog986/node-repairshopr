/**
 * Copyright (C) 2019. Drew Gauderman
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const request = require('request');

//repairshopr api limits
const limits = {
  customers: 100,
  invoices: 50,
  leads: 20,
  tickets: 100
};

const callsPerMinute = 120;

//export the sonar class
module.exports = class RepairShopr {
  //class startup
  constructor(opts) {
    //require host, username, password
    ['host', 'key'].forEach(name => {
      if (!opts.hasOwnProperty(name)) {
        throw new Error('options.' + name + ' is a required argument.');
      }
    });

    this.lastcall = 0;
    this.opts = opts;
  }

  //request that returns a promise
  modem(opts, postData = [], values = []) {
    let options = {
      uri: `https://${this.opts.host}/api/v1/${opts.endpoint}`,
      method: opts.method || 'GET',
      qs: {
        api_key: this.opts.key,
        page: opts.page || 1
      },
      json: true
    };

    if (postData) {
      options.json = postData;
    }

    return new Promise((res, rej) =>
      request(options, (e, r) => {
        if (e) return rej(e);

        if (r.body.error) return rej(r.body.error);

        let results = Object.values(r.body)[0];

        values = Object.assign(values, results);

        if (opts.fetchAll && limits[opts.endpoint.toLowerCase()] && results.length === limits[opts.endpoint.toLowerCase()]) {
          opts.page = (opts.page || 1) + 1;

          return this.modem(opts, postData, values);
        } else {
          res(values);
        }
      })
    );
  }

  //get something
  get(endpoint, opts = {}) {
    return this.modem({
      endpoint: endpoint,
      ...opts
    });
  }

  //add (post) something
  add(endpoint, opts, postData) {
    if (!postData) {
      postData = opts;
      opts = {};
    }

    return this.modem(
      {
        method: 'POST',
        endpoint: endpoint,
        ...opts
      },
      postData
    );
  }

  //update (patch) something
  update(endpoint, opts, postData) {
    if (!postData) {
      postData = opts;
      opts = {};
    }

    return this.modem(
      {
        method: 'PUT',
        endpoint: endpoint,
        ...opts
      },
      postData
    );
  }

  //delete something
  delete(endpoint, opts, postData) {
    if (!postData) {
      postData = opts;
      opts = {};
    }

    return this.modem(
      {
        method: 'DELETE',
        endpoint: endpoint,
        ...opts
      },
      postData
    );
  }
};
