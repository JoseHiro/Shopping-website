const express = require('express');
const path = require('path');
// const rootDir = require('../util/path')

const productController = require('../controllers/products');

const router = express.Router();
const products = []

router.get('/products', productController.getAdminProducts);

// /admin/add-product => GET
router.get('/add-product', productController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct);

module.exports = router;
