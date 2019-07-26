const request = require('supertest');

const server = require('./server');

describe('server', () => {
  it('db should be in development status', () => {
    expect(process.env.DB).toBe('development');
  });

  describe('post to /api/login', () => {
    it('should return 500', () => {
      return request(server)
        .post('/api/login')
        .then(res => {
          expect(res.status).toBe(500);
        });
    });
  });
  //
  describe('get to /api/jokes', () => {
    it('should return 401', () => {
      return request(server)
        .get('/api/jokes')
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
  });
});
