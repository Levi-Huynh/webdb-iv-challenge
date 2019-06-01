const router = require('express').Router();

const Recipes = require('./recipes-model.js');

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.find();
    res.status(200).json(recipes);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the recipes' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const recipes = await Recipes.findById(req.params.id);
    if (recipes) {
      res.status(200).json(recipes);
    } else {
      res.status(404).json({ message: 'We could not find the recipes' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the recipes' });
  }
});

router.post('/', async (req, res) => {
  const recipes = req.body;

  if (recipes.name) {
    try {
      const inserted = await Recipes.add(recipes);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error creating the recipes' });
    }
  } else {
    res.status(400).json({ message: 'Please provide name of the recipe' });
  }
});

router.put('/:id', async (req, res) => {
  const changes = req.body;

  if (changes.name) {
    try {
      const updated = await Recipes.update(req.params.id, changes);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({
          message: 'That recipe does not exist',
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error updating the recipe' });
    }
  } else {
    res.status(400).json({
      message: 'Please provide the name of the recipe',
    });
  }
});

router.get('/:id/ingredients',  async (req, res) => {
  try{
      const recipes = await Recipes.getRecipeIngredients(req.params.id);
    res.status(200).json(recipes);
      }catch (error) {
          // log error to server
          console.log(error);
          res.status(500).json({
            message: 'Error getting the ingredients for the recipe',
          });
        }
  });
  
  router.get('/:id/list',  async (req, res) => {
    try{
        const recipes = await Recipes.getRecipe(req.params.id);
      res.status(200).json(recipes);
        }catch (error) {
            // log error to server
            console.log(error);
            res.status(500).json({
              message: 'Error getting the ingredients for the recipe',
            });
          }
    });
    


router.delete('/:id', async (req, res) => {
  try {
    const count = await Recipes.remove(req.params.id);
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({
        message: 'That recipe does not exist, perhaps it was deleted already',
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error removing the recipe' });
  }
});

module.exports = router;
