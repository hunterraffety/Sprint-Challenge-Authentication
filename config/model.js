const db = require('../database/dbConfig');

module.exports = {
  add,
  find,
  findById
};

function find() {
  return db('users');
}

async function add(user) {
  const [id] = await db('users').insert(user);
  return findById(id);
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}
