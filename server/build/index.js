'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _user = require('./routes/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

const app = (0, _express2.default)();
app.use(_express2.default.json());
app.use('/api/users', _user2.default);

console.log(`Application name: ${_config2.default.get('name')}`);
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`MybarberApp listening to port ${port}...`));
module.exports = app;