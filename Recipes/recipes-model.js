const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  getRecipeIngredients,
  getRecipe
};



function find() {
  return db('recipes as p')
  .join('dishes as u', 'u.id', 'p.dish_id')
  .select('p.id', 'p.name', 'p.instructions', 'u.name as Dish_Name')
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

function getRecipe(RecipeId) {
  return db('recipe_ingredients as p')
    .join('recipes as u', 'u.id', 'p.recipe_id')
    .join( 'dishes as i', 'i.id', 'u.dish_id') 
    .join('ingredients as r', 'r.id', 'p.ingredient_id' )
    .distinct('p.id', 'r.name as Ingredient', 'p.quantity as Ingredient_Quantity','u.name as Recipe_Name', 'i.name as Dish_Name' )
    .where('p.recipe_id' ,RecipeId);
  
}