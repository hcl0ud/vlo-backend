require('dotenv').config();

const Koa = require('koa');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const api = require('./router');

const app = new Koa();

app
  .use(cors())
  .use(bodyParser())
  .use(api.routes())
  .use(api.allowedMethods())
  .listen(process.env.API_PORT, () => {
    console.log(`${process.env.API_HOST}:${process.env.API_PORT}`);
  });
