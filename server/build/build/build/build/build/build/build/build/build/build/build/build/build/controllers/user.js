'use strict';

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const userController = {
  userDisplay: (req, res) => {
    res.status(201).send({
      status: res.statusCode,
      data: _user2.default
    });
  }
};
module.exports = userController;