const Router = require('@koa/router');
const router = new Router({ prefix: '/' });

const user = require('../models/user');

router.post('user/register', user.register);

module.exports = router;
