exports.up = function(knex, Promise) {
    // the tables most be created in the right order,
    // tables with FK are created after the referenced table is created
    return knex.schema
 
      .createTable('recipes', tbl => {
        // the tracks table must be created before this table is created
        tbl.increments().unique()
  
        tbl
          .string('name', 225)
          .notNullable()
          .unique();
  
        tbl
          .integer('dish_id')
          .unsigned()
          .references('id')
          .inTable('dishes')
          .onDelete('CASCADE') // explain how cascading works
          .onUpdate('CASCADE');

          tbl
          .string('instructions')
          .notNullable() 
      })

     
  };
  
  exports.down = function(knex, Promise) {
    // tables with FK must be removed before the referenced table is removed
    return knex.schema
    
      .dropTableIfExists('recipes')
     
  };