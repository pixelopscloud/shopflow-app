const express = require('express');
const router = express.Router();
const { getProducts, getProductById, createProduct, seedProducts } = require('../controllers/productController');

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.post('/seed', seedProducts);

module.exports = router;
