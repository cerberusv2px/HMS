/*import { expect } from 'chai';
import request from 'supertest';
import app from '../../src/index';
import knexConfig from '../../src/database/knexfile';
import { describe } from 'mocha';
import knexJs from 'knex';

const knex = knexJs(knexConfig);

describe('Hospital Controller test', () => {
  beforeEach(() => {
    return knex.migrate
      .rollback()
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run());
  });

  // afterEach(() => {
  //   return knex.migrate.rollback();
  // });

  it('should return list of hospitals', done => {
    request(app)
      .get('/api/hospital')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.body.data).to.be.an('array');
        expect(res.body.data).to.not.have.lengthOf(0);
        done();
      });
  });

  it('should create a new hospital with valid data', done => {
    let hospital = {
      name: 'Pophosp1',
      address: 'kathmandu',
      phone_number: '986547131'
    };
    request(app)
      .post('/api/hospital')
      .send(hospital)
      .end((err, res) => {
        let { data } = res.body;
        expect(res.statusCode).to.be.equal(200);
        expect(data).to.be.an('object');
        expect(data).to.have.property('paitents');
        expect(data).to.have.property('otherHospitals');
        expect(data.hospital).to.have.property('id');
        expect(data.hospital.name).to.be.equal(hospital.name);
        done();
      });
  });
});
 */
