const CustomersController = require("../controller/Customers");
const express = require("express");
const router = express.Router();

router.post("/customer", CustomersController.createCustomer);
router.get("/customer", CustomersController.getCustomers);
router.get("/customer/:id", CustomersController.getCustomer);
router.put("/customer/:id", CustomersController.updateProfit);
router.delete("/customer/:id", CustomersController.deleteCustomer);

module.exports = router;