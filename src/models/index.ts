require('dotenv').config();
const DB = process.env.DB;

const { Client } = require('pg');
const client = new Client(DB);

exports.connectDB = client.connect((e: any) => {
  console.log(e, 'Database Connect');
  console.log(DB);
});
client.query('SELECT NOW()', (err: any, res: any) => {
  console.log(err, res);
  client.end();
});
