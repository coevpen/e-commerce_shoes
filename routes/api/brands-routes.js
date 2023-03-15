const router = require('express').Router();
const { Brand, Category, Customer, Order, Product, ProductOrder } = require('../../models');

// The `/api/brands` endpoint found in index.js

router.get('/', (req, res) => {
  // find all brands
  Brand.findAll({
    include: {
      model: Brand,
      attributes: [ 'id', 'brand_name' ]
    }
  })
  .then(brandInfo => {
    if(!brandInfo){
      res.status(404).json({ message: 'No brands found. '});
      return;
    }
    res.json(brandInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one brand by its `id` value
  Brand.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Brand,
      attributes: [ 'id', 'brand_name' ]
    }
  })
  .then(brandInfo => {
    if(!brandInfo){
      res.status(404).json({ message: 'No brands found. '});
      return;
    }
    res.json(brandInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new brand
  Brand.create({
    brand_name: req.body.brand_name
  })
  .then(brandInfo => res.json(brandInfo))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a brand by its `id` value
  Brand.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(brandInfo => {
    if(!brandInfo){
      res.status(404).json({ message: 'No brand found. '});
      return;
    }
    res.json(brandInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a brand by its `id` value
  Brand.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(brandInfo => {
    if(!brandInfo){
      res.status(404).json({ message: 'No brand found. '});
      return;
    }
    res.json(brandInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
