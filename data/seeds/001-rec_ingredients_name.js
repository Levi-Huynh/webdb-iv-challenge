
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  //  return knex('ingredients').truncate()
  //   .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {ingredient_name: 'half a cup of cheese'},


      ]);
//      });
 };
