exports.up = function(knex, Promise) {
  return knex.schema.table('recipe_ingredients', function(t) {
    t
    .string('ingredient_name')
    .unsigned()
    .references('name')
    .inTable('ingredients')
    .onDelete('CASCADE') // explain how cascading works
    .onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('recipe_ingredients', function(t) {
      t.dropColumn('ingredient_name');
  });
};