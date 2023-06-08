const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');


router.get('/', ProductController.products);


module.exports = router;