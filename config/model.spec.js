const db = require('../database/dbConfig');

const Users = require('./model');

describe('users model tests', () => {
  describe('find()', () => {
    it('should retrieve users', async () => {
      await Users.find();
      const users = await db('users');
      expect.arrayContaining(users);
    });
  });
});
