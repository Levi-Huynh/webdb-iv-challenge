const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  getDishRecipes
};

function find() {
  return db('dishes');
}

function findById(id) {
  return db('dishes')
    .where({ id })
    .first();
}

function add(track) {
  // passing 'id' as the second parameter is recommended to ensure the id is returned
  // when connecting to other database management systems like Postgres
  return db('dishes')
    .insert(track, 'id')
    .then(([id]) => {
      return findById(id);
    });
}

function update(id, changes) {
  return db('dishes')
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return null;
      }
    });
}


function getDishRecipes(DishId) {
  return db('recipes as p')
    .join('dishes as u', 'u.id', 'p.dish_id')
    .select('p.id', 'p.name', 'p.instructions','u.name as Dish_Name')
    .where('p.dish_id', DishId);
}


function remove(id) {
  return db('dishes')
    .where({ id })
    .del();
}
