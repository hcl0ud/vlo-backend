const randToken = require('rand-token');
const Jwt = require('jsonwebtoken');
const key = require('../config/secretKey');
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

module.exports = {
  sign: async (userEmail: string) => {
    return {
      token: Jwt.sign(userEmail, key.secretKey, key.option),
      refreshToken: randToken.uid(256),
    };
  },
  verify: async (token: object) => {
    let decoded;

    try {
      decoded = Jwt.verify(token, key.secretKey);
    } catch (e) {
      // @ts-ignore
      if (e.message === 'Jwt expired') {
        console.log('expired token');
        return TOKEN_EXPIRED;
      } else {
        // @ts-ignore
        if (e.message === 'invalid token') {
          console.log('invalid token');
          console.log(TOKEN_INVALID);
          return TOKEN_INVALID;
        } else {
          console.log('invalid token');
          return TOKEN_INVALID;
        }
      }
    }
    return decoded;
  },
};
