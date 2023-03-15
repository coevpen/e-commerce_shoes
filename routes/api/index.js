const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const brandRoutes = require('./brands-routes');
const customerRoutes = require('./customer-routes');
const orderRoutes = require('./order-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/brands', brandRoutes);
router.use('/customers', customerRoutes);
router.use('/orders', orderRoutes);

module.exports = router;
