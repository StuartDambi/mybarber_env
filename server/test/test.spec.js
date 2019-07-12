import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

const { expect } = chai;
const getUsers = 'api/users';
const testData = {
  id: 1,
  name: '{Stuart Dambi}',
  email: 'stuartdambi@gmail.com',
  address: 'Kampala',
  phone: '0755710958',
  is_admin: true,
  password: '1234',
};

chai.use(chaiHttp);

describe('Users', () => {
  it('should return all users', (done) => {
    chai.request(server).get(getUsers).send(testData).end((_err, result) => {
      expect(result.status).to.eq(201);
      done();
    });
  });
});
