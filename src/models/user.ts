require('dotenv').config();

import { dbQuery } from './index';
// const jwt = require('../module/jwt');

exports.register = async (ctx: any) => {
  const { userEmail, userNickName, userPassword } = ctx.request.body;

  try {
    await dbQuery({
      text: 'INSERT INTO users VALUES ($1, $2, $3)',
      values: [userEmail, userNickName, userPassword],
    });
    ctx.body = {
      status: 200,
      resultCode: 1,
    };
  } catch (e: any) {
    console.log(e);
    ctx.body = {
      status: 200,
      resultCode: 0,
      error: e,
    };
  }
};
