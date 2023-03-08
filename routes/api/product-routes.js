const router = require('express').Router();
const { Brand, Category, Customer, Order, Product, ProductOrder } = require('../../models');

// The `/api/products` endpoint found in index.js

router.get('/', (req, res) => {
  // find all products
  Product.findAll({
    include: {
      model: Product,
      attributes: [ 'id', 'product_name', 'price', 'brand_id', 'size', 'color', 'image', 'rating', 'category_id', 'stockQTY', 'sexCategory' ]
    }
  })
  .then(productInfo => {
    if(!productInfo){
      res.status(404).json({ message: 'No products found. '});
      return;
    }
    res.json(productInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one product by its `id` value
  Product.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: [ 'id', 'product_name', 'price', 'brand_id', 'size', 'color', 'image', 'rating', 'category_id', 'stockQTY', 'sexCategory' ]
    }
  })
  .then(productInfo => {
    if(!productInfo){
      res.status(404).json({ message: 'No products found. '});
      return;
    }
    res.json(productInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new product
  Product.create({
    product_name: req.body.product_name
  })
  .then(productInfo => res.json(productInfo))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a product by its `id` value
  Product.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(productInfo => {
    if(!productInfo){
      res.status(404).json({ message: 'No product found. '});
      return;
    }
    res.json(productInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a product by its `id` value
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(productInfo => {
    if(!productInfo){
      res.status(404).json({ message: 'No product found. '});
      return;
    }
    res.json(productInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
