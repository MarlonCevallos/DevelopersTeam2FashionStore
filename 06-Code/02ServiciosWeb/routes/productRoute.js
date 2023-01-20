const ProductsController = require('../controller/Products')
const express = require('express')
const router = express.Router()

router.post("/product", ProductsController.createProduct);
router.get("/product", ProductsController.getProducts);
router.get("/product/:id", ProductsController.getProduct);
router.put("/product/:id", ProductsController.updateProfit);
router.delete("/product/:id", ProductsController.deleteProduct);

module.exports = router