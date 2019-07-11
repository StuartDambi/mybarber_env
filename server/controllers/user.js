import { Client } from 'pg';

// Install PG --Fix Error
const userController = {
  userDisplay: async (req, res) => {
    const client = new Client();
    client.connect()
      .then(() => {
        console.log('Connection Complete');
        const sql = 'SELECT * FROM users';
        return client.query(sql);
      }).then((result) => {
        res.status(201).send({
          status: res.statusCode,
          data: result,
        });
      });
  },
};
module.exports = userController;
