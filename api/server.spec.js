const request = require('supertest');

const server = require('./server');

describe('server', () => {
  it('db should be in development status', () => {
    expect(process.env.DB).toBe('development');
  });
});
