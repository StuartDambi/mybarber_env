import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';

const { expect } = chai;
const getUsers = 'api/users/';
const testData = {
  id: 1,
  name: 'Stuart Dambi',
  email: 'stuartdambi@gmail.com',
  address: 'Kampala',
  phone: '3422424234',
  is_admin: true,
};

chai.use(chaiHttp);

describe('Users', () => {
  it('should return all users', (done) => {
    chai.request(server).get(getUsers).send(testData).end((_err, res) => {
      expect(res.status).to.eq(201);
      done();
    });
  });
});
