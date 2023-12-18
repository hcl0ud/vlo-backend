require('dotenv').config();
const DB = process.env.DB;

const { Client } = require('pg');
const client = new Client({
  user: 'cl0ud',
  host: '127.0.0.1',
  database: 'vlo',
  password: '131217',
  port: 5432,
});

export const dbQuery = (query: Object) => {
  client.connect();
  client
    .query(query)
    .then((res: any) => {
      console.log(res);
      client.end();

      return res;
    })
    .catch((e: any) => console.log(e));
};
