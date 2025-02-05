const express = require('express');
const router = express.Router();
const { getAllProducts, getSingleProduct, addProduct, updateProduct, deleteProduct, deleteAllProducts } = require('../controllers/product.controller.js');

// Simplified Routes.
router.get('/', getAllProducts);
router.get('/:id', getSingleProduct);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.delete('/', deleteAllProducts);


module.exports = router;
