'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../controllers/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const router = _express2.default.Router();
// Return all the users
router.get('/', _user2.default);

// User signup
router.post('/signup', (req, res) => res.send('We are signidddng up'));
module.exports = router;