const ProductsController = require('../controller/Products')
const express = require('express')
const router = express.Router()

//router.post('/add', ProductsController.createProduct)
router.post("/product", ProductsController.createProduct);
//router.get('/products', ProductsController.getProducts)
router.get("/product", ProductsController.getProducts);
//router.get('/products/:id', ProductsController.getProduct)
router.get("/product/:id", ProductsController.getProduct);
//router.put('/updateProduct', ProductsController.updateProfit)
router.put("/product/:id", ProductsController.updateProfit);
//router.delete('/deleteProduct', ProductsController.deleteProduct)
router.delete("/product/:id", ProductsController.deleteProduct);

module.exports = router