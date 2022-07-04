const express = require('express');
const router = express.Router();

const { createProduct, getProducts, getProduct, updateProduct, deleteProduct } = require('../constollers/product');

// CRUD
router.post('/', createProduct); // create Product
router.get('/', getProducts); // getAll Products
router.get('/:id', getProduct); // getDetail Product
router.put('/:id', updateProduct); // update Product
router.delete('/:id', deleteProduct); // delete Product

module.exports = router;