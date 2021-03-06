const router = require('express').Router();

const Dishes = require('./dishes-model.js');

router.get('/', async (req, res) => {
  try {
    const dishes = await Dishes.find();
    res.status(200).json(dishes);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the dishes' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dishes = await Dishes.findById(req.params.id);
    if (dishes) {
      res.status(200).json(dishes);
    } else {
      res.status(404).json({ message: 'We could not find the dish' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the dish' });
  }
});

router.post('/', async (req, res) => {
  const dishes = req.body;

  if (dishes.name) {
    try {
      const inserted = await Dishes.add(dishes);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error creating the dish' });
    }
  } else {
    res.status(400).json({ message: 'Please provide name of the dish' });
  }
});

router.put('/:id', async (req, res) => {
  const changes = req.body;

  if (changes.name) {
    try {
      const updated = await Dishes.update(req.params.id, changes);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({
          message: 'That dish does not exist',
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error updating the dish' });
    }
  } else {
    res.status(400).json({
      message: 'Please provide the name of the dish',
    });
  }
});

router.get('/:id/recipes',  async (req, res) => {
  try{
      const recipes = await Dishes.getDishRecipes(req.params.id);
    res.status(200).json(recipes);
      }catch (error) {
          // log error to server
          console.log(error);
          res.status(500).json({
            message: 'Error getting the recipes for the dishes',
          });
        }
  });

router.delete('/:id', async (req, res) => {
  try {
    const count = await Dishes.remove(req.params.id);
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({
        message: 'That dish does not exist, perhaps it was deleted already',
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error removing the dish' });
  }
});

module.exports = router;
