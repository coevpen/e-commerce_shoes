const router = require('express').Router();
const { Brand, Category, Customer, Order, Product, ProductOrder } = require(`../../models`);

// The `/api/customers` endpoint found in index.js

router.get('/', (req, res) => {
  // find all customers
  Customer.findAll({
    attributes: {exclude: ['password']}
  })
  .then(function (customerInfo) {
      if (!customerInfo) {
        res.status(404).json({ message: 'No customers found. ' });
        return;
      }
      res.json(customerInfo);
    })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find one customer by its `id` value
  Customer.findOne({
    attributes: { exclude: ['password']},
    where: {
      id: req.params.id
    },
  })
  .then(customerInfo => {
    if(!customerInfo){
      res.status(404).json({ message: 'No customers found. '});
      return;
    }
    res.json(customerInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new customer
  Customer.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    address: req.body.address,
    password: req.body.password
  })
  .then(customerInfo => res.json(customerInfo))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/login', (req, res) =>{

  Customer.findOne({
    where:{
      email: req.body.email
    }
  })
  .then(dbCustomer =>{
    if(!dbCustomer){
      res.status(400).json({ message: 'No user with that email'});
      return;
    }
    const validPass = dbCustomer.password;

    if(!validPass){
      res.status(400).json({ message: 'Password does not match'});
      return 1;
    }
    res.json({customer: dbCustomer, message: 'login successful'});
  });

});

router.put('/:id', (req, res) => {
  // update a customer by its `id` value
  Customer.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(customerInfo => {
    if(!customerInfo){
      res.status(404).json({ message: 'No customer found. '});
      return;
    }
    res.json(customerInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a customer by its `id` value
  Customer.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(customerInfo => {
    if(!customerInfo){
      res.status(404).json({ message: 'No customer found. '});
      return;
    }
    res.json(customerInfo);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
