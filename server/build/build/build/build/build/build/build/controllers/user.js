'use strict';

var _pg = require('pg');

// Install PG --Fix Error
const userController = {
  userDisplay: async (req, res) => {
    const client = new _pg.Client();
    client.connect().then(() => {
      console.log('Connection Complete');
      const sql = 'SELECT * FROM users';
      return client.query(sql);
    }).then(result => {
      console.log('result?', result);
      res.status(201).send({
        status: res.statusCode,
        data: result
      });
    });
  }
};
module.exports = userController;