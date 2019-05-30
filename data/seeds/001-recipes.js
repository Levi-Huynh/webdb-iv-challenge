
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name:'Crunchy Tacos', instructions:'Cook ground beef. Add ground beef to taco shell. Garnish with cheese and salse.', dish_id:1},
        {name:'BBQ Pizza', instructions:'Cook sausage. Add sausage, cheese and tomato sauce to dough. Cook Pizza.', dish_id:2},
        {name:'Cheese Burger', instructions:'Cook ground beef patty. Add patty to bread buns. Garnish with cheese.', dish_id:3},
      ]);
    });
};
