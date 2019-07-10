'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const { expect } = _chai2.default;
const getUsers = 'api/users';

_chai2.default.use(_chaiHttp2.default);

describe('Users', () => {
  it('should return all users', done => {
    _chai2.default.request(_index2.default).get(getUsers).end((_err, res) => {
      expect(res.status).to.eq(201);
      done();
    });
  });
});