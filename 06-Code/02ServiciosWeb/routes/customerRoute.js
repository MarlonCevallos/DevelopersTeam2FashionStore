const CustomersController = require('../controller/Customers')
const express = require('express')
const router = express.Router()

router.post('/postcustomers', CustomersController.createCustomer)
router.get('/customers', CustomersController.getCustomers)
router.get('/customer/:id', CustomersController.getCustomer)
router.put('/updateCustomer', CustomersController.updateProfit)
router.delete('/deleteCustomer', CustomersController.deleteCustomer)

module.exports = router