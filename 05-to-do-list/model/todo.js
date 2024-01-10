const pool = require('./database');

const createNew = (description) => pool.query(
  'INSERT INTO todo (description) VALUES ($1) RETURNING *',
  [description],
);

const getAll = () => pool.query('SELECT * FROM todo');

const removeOne = (id) => pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);

module.exports = {
  createNew,
  getAll,
  removeOne,
};
