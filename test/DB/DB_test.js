'use strict'

const expect = require('chai').expect;
const should = require('chai').should();
const request = require('supertest');
const mockuser = require('./mock_user');
const server = require('../../rest/server');

describe('User', () => {

    it('respond with json containing a list of all users', (done) => {
        request(server)
            .get('/api/portal/user')
            .expect('Content-Type', /json/)
            .expect(200, done)
    });

    it('should return first charachter of the string', (done) => {
        request(server)
            .post('/api/portal/user')
            .send(mockuser)
            .expect(200, done)
    });
});
