const router = require('express').Router();
const { Brand, Category, Customer, Order, Product, ProductOrder } = require('../../models');

// The `/api/orders` endpoint found in index.js

router.get('/', (req, res) => {
  // find all orders
  Order.findAll({
    include:[
      {
        model: Customer,
        attributes: [ 'id', 'first_name', 'last_name', ]
      },
      {
        model: Product,
        attributes: ['product_name', 'price', 'image'],
      }
    ]
  })
  .then(orderInfo => {
    if(!orderInfo){
      res.status(404).json({ message: 'No orders found. '});
      return;
    }
    res.json(orderInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one order by its `id` value
  Order.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'customer_id', 'product_id', 'date'],
    include: [
      {
        model: Customer,
        attributes: [ 'id', 'first_name', 'last_name', ]
      },
      {
        model: Product,
        attributes: ['product_name', 'price', 'image']
      }
    ]
  })
  .then(orderInfo => {
    if(!orderInfo){
      res.status(404).json({ message: 'No orders found. '});
      return;
    }
    res.json(orderInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/customer/:customer_id', (req, res) => {
  // find one order by its `customer_id` value
  Order.findAll({
    where: {
      customer_id: req.params.customer_id
    },
    attributes: ['id', 'customer_id', 'product_id', 'date'],
    include: [
      {
        model: Customer,
        attributes: [ 'id', 'first_name', 'last_name', ]
      },
      {
        model: Product,
        attributes: ['product_name', 'price', 'image']
      }
    ]
  })
  .then(orderInfo => {
    if(!orderInfo){
      res.status(404).json({ message: 'No orders found. '});
      return;
    }
    res.json(orderInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new order
  Order.create({
    customer_id: req.body.customer_id,
    product_id: req.body.product_id,
    date: req.body.date,

  })
  .then(orderInfo => res.json(orderInfo))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a order by its `id` value
  Order.update(req.body, {
    product_id: req.body.product_id,
    discount: req.body.discount,
    where: {
      id: req.params.id
    }
  })
  .then(orderInfo => {
    if(!orderInfo){
      res.status(404).json({ message: 'No order found. '});
      return;
    }
    res.json(orderInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete an order by its `id` value
  Order.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(orderInfo => {
    if(!orderInfo){
      res.status(404).json({ message: 'No order found. '});
      return;
    }
    res.json(orderInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
