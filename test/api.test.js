import { expect } from 'chai';
import app from '../src/index';
import request from 'supertest';
import { describe } from 'mocha';

describe('Base API Test', () => {
  it('should return v2px string for the app', done => {
    request(app)
      .get('/api')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
        expect(res.text).to.be.equal('v2px');
        done();
      });
  });

  /*it('should return 405 method not allowed for random api hits', done => {
    const randomString = Math.random()
      .toString(36)
      .substr(2, 7);
    request(app)
      .get(`/api/${randomString}`)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(401);
        expect(res.body.error.code).to.be.equal(401);
        expect(res.body.error.message).to.be.equal('Method Not Allowed');
        done();
      });
  });*/
});
