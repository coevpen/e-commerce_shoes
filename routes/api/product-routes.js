const router = require('express').Router();
const { Brand, Category, Customer, Order, Product, ProductOrder } = require('../../models');

// The `/api/products` endpoint found in index.js


router.get('/male', (req, res) => {
  Product.findAll({
    where: {
      sexCategory: "male"
    },
    include: [
      {
        model: Category,
        attributes: [ 'category_name' ]
      },
      {
        model: Brand,
        attributes: ['brand_name']
      }
    ]
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

router.get('/female', (req, res) => {
  Product.findAll({
    where: {
      sexCategory: "female"
    },
    include: [
      {
        model: Category,
        attributes: [ 'category_name' ]
      },
      {
        model: Brand,
        attributes: ['brand_name']
      }
    ]
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

router.get('/', (req, res) => {
  // find all products
  Product.findAll({
    include: [
    {
      model: Category,
      attributes: [ 'category_name' ]
    },
    {
      model: Brand,
      attributes: ['brand_name']
    }
  ],
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

router.get('/rating', (req, res) => {
  // find all products
  Product.findAll({
    include: [
    {
      model: Category,
      attributes: [ 'category_name' ]
    },
    {
      model: Brand,
      attributes: ['brand_name']
    }
  ],
  order:[["rating","DESC"]]
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

router.get('/priceasc', (req, res) => {
  Product.findAll({
    include: [
    {
      model: Category,
      attributes: [ 'category_name' ]
    },
    {
      model: Brand,
      attributes: ['brand_name']
    }
  ],
  order:[["price","ASC"]]
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

router.get('/pricedesc', (req, res) => {
  Product.findAll({
    include: [
    {
      model: Category,
      attributes: [ 'category_name' ]
    },
    {
      model: Brand,
      attributes: ['brand_name']
    }
  ],
  order:[["price","DESC"]]
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

router.get('/quantity', (req, res) => {
  Product.findAll({
    include: [
    {
      model: Category,
      attributes: [ 'category_name' ]
    },
    {
      model: Brand,
      attributes: ['brand_name']
    }
  ],
  order:[["stockQTY","DESC"]]
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
    include: [
      {
        model: Category,
        attributes: [ 'category_name' ]
      },
      {
        model: Brand,
        attributes: ['brand_name']
      }
    ]
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
  console.log(req);
  Product.create({
    product_name: req.body.product_name,
    price: req.body.price,
    brand_id: req.body.brand_id,
    size: req.body.size,
    color: req.body.color,
    image: req.body.image,
    rating: req.body.rating,
    category_id: req.body.category_id,
    stockQTY: req.body.stockQTY,
    sexCategory: req.body.sexCategory
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
    product_name: req.body.product_name,
    price: req.body.price,
    brand_id: req.body.brand_id,
    size: req.body.size,
    color: req.body.color,
    image: req.body.image,
    rating: req.body.rating,
    category_id: req.body.category_id,
    stockQTY: req.body.stockQTY,
    sexCategory: req.body.sexCategory,
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
