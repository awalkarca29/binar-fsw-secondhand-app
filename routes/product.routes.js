const express = require('express');
const cors = require('cors');
const router = express.Router();
const productController = require('../controller/products.controller.js');
const authMiddleware = require('../middleware/middleware.js');

const corsOptions = {
    origin: "*"
};

router.use(cors(corsOptions));

// All products in home
router.get('/products', productController.findAllProductApi);

// Buyer
// Buyer can see detail product by id product
router.get('/products/:id', productController.findProductByIdApi);

// Seller
// Seller list products by userId
router.get('/seller/products/0', authMiddleware.authorizationToken, productController.findProductByUserIdApi);
// Seller create a new product
router.post('/seller/products', authMiddleware.authorizationToken, productController.createNewProductApi);
// Seller update product
router.put('/seller/products/:id', authMiddleware.authorizationToken, productController.updateProductApi);
// Edit product status on transaction
router.put('/buyer/product/trans/:id', authMiddleware.authorizationToken, productController.updateTransactionApi);
// Seller delete product
router.delete('/seller/products/:id', authMiddleware.authorizationToken, productController.deleteProduct);

module.exports = router;