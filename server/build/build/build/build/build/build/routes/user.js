'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const router = _express2.default.Router();

router.get('/', (req, res) => res.status(201).send({ status: res.statusCode, data: _user2.default }));
module.exports = router;