const router = require('express').Router();

const Ingredients = require('./ingredients-model.js');

router.get('/', async (req, res) => {
  try {
    const c = await Ingredients.find();
    res.status(200).json(ingredients);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the ingredients' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const ingredients = await Ingredients.findById(req.params.id);
    if (ingredients) {
      res.status(200).json(ingredients);
    } else {
      res.status(404).json({ message: 'We could not find the ingredient' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the ingredient' });
  }
});

router.post('/', async (req, res) => {
  const ingredients = req.body;

  if (ingredients.name) {
    try {
      const inserted = await Ingredients.add(dishes);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error creating the ingredient' });
    }
  } else {
    res.status(400).json({ message: 'Please provide name of the ingredient' });
  }
});

router.put('/:id', async (req, res) => {
  const changes = req.body;

  if (changes.name) {
    try {
      const updated = await Ingredients.update(req.params.id, changes);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({
          message: 'That ingredient does not exist',
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error updating the ingredient' });
    }
  } else {
    res.status(400).json({
      message: 'Please provide the name of the ingredient',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const count = await Ingredients.remove(req.params.id);
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({
        message: 'That ingredient does not exist, perhaps it was deleted already',
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error removing the ingredient' });
  }
});

module.exports = router;
