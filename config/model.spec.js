const db = require('../database/dbConfig');

const Users = require('./model');

describe('users model tests', () => {
  beforeEach(async () => {
    await db('users').truncate();
  });

  describe('find()', () => {
    it('should retrieve users', async () => {
      await Users.find();
      const users = await db('users');
      expect.arrayContaining(users);
    });
  });
  //
  describe('add()', () => {
    it('should add a user', async () => {
      await Users.add({ username: 'testg22uy', password: 'testpass' });
      const users = await db('users');
      expect.arrayContaining(users);
    });
  });
});
