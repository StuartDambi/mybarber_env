'use strict';

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// disable eslint
const userController = (req, res) => res.send(_user2.default);
module.exports = userController;