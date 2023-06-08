const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');

// Get all Products From Data base
router.get('/products', ProductController.products);
// Create products (if needs)
// router.post('/products', ProductController.createProduct);


module.exports = router;