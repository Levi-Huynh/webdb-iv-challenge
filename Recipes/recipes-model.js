const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  getRecipeIngredients
};

function find() {
  return db('recipes');
}

function findById(id) {
  return db('recipes')
    .where({ id })
    .first();
}

function add(track) {
  // passing 'id' as the second parameter is recommended to ensure the id is returned
  // when connecting to other database management systems like Postgres
  return db('recipes')
    .insert(track, 'id')
    .then(([id]) => {
      return findById(id);
    });
}

function update(id, changes) {
  return db('recipes')
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

function remove(id) {
  return db('recipes')
    .where({ id })
    .del();
}

// function getRecipeIngredients(RecipeId) {
//   return db('recipe_ingredients')
//     .where('recipe_id', RecipeId)
//     .then(actions => actions.map(action => mappers.actionToBody(action)));
// }

function getRecipeIngredients(RecipeId) {
  return db('recipe_ingredients as p')
    .join('recipes as u', 'u.id', 'p.recipe_id')
    .select('p.id', 'p.ingredient_name', 'p.quantity','u.name as Recipe_Name')
    .where('p.recipe_id', RecipeId);
}