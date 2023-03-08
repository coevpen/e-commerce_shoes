const router = require('express').Router();
const { Brands, Category, Customer, Order, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: {
      model: Category,
      attributes: [ 'id', 'category_name' ]
    }
  })
  .then(categoryInfo => {
    if(!categoryInfo){
      res.status(404).json({ message: 'No categories found. '});
      return;
    }
    res.json(categoryInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Category,
      attributes: [ 'id', 'category_name' ]
    }
  })
  .then(categoryInfo => {
    if(!categoryInfo){
      res.status(404).json({ message: 'No categories found. '});
      return;
    }
    res.json(categoryInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then(categoryInfo => res.json(categoryInfo))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(categoryInfo => {
    if(!categoryInfo){
      res.status(404).json({ message: 'No category found. '});
      return;
    }
    res.json(categoryInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(categoryInfo => {
    if(!categoryInfo){
      res.status(404).json({ message: 'No category found. '});
      return;
    }
    res.json(categoryInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
