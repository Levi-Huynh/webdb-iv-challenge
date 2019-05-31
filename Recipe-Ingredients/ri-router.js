const router = require('express').Router();

const Recipe_ingredients = require('./ri-model.js');

router.get('/', async (req, res) => {
  try {
    const recipe_ingredients = await Recipe_ingredients.find();
    res.status(200).json( recipe_ingredients);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the recipe ingredients' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const recipe_ingredients= await Recipe_ingredients.findById(req.params.id);
    if (recipe_ingredients) {
      res.status(200).json(recipe_ingredients);
    } else {
      res.status(404).json({ message: 'We could not find the recipe ingredients' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the recipe_ingredients' });
  }
});

router.post('/', async (req, res) => {
  const recipe_ingredients= req.body;

  if (recipe_ingredients.name) {
    try {
      const inserted = await Recipe_ingredients.add(dishes);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error creating the recipe_ingredients' });
    }
  } else {
    res.status(400).json({ message: 'Please provide name of the recipe_ingredients' });
  }
});

router.put('/:id', async (req, res) => {
  const changes = req.body;

  if (changes.name) {
    try {
      const updated = await Recipe_ingredients.update(req.params.id, changes);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({
          message: 'That recipe_ingredients does not exist',
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error updating the recipe_ingredients' });
    }
  } else {
    res.status(400).json({
      message: 'Please provide the name of the recipe_ingredients',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await Recipe_ingredients.remove(req.params.id);
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({
        message: 'That recipe_ingredients does not exist, perhaps it was deleted already',
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error removing the recipe_ingredients' });
  }
});

module.exports = router;
