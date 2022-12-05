const ProductsController = require('../controller/Products')
const express = require('express')
const router = express.Router()  
// router.metodo_CRUD('uri', controlador.metodo)
router.post('/add', ProductsController.createProduct)
router.get('/products', ProductsController.getProducts)
router.get('/product/:id', ProductsController.getProduct)
router.put('/updateProduct', ProductsController.updateProfit)
router.delete('/deleteProduct', ProductsController.deleteProduct)

module.exports =router