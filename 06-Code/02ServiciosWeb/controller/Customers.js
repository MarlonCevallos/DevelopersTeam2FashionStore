const Customer = require("../model/Customer");

const createCustomer = (req, res) => {
  let customer = new Customer({
    id: req.body.id,
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
  });

  customer.save((err, prod) => {
    err && res.status(500).json(err.message);
    res.status(200).json(prod);
  });
};

const getCustomers = (req, res) => {
  Customer.find((err, customers) => {
    err && res.status(500).send(err.message);
    res.status(200).json(customers);
  });
};

const getCustomer = (req, res) => {
  Customer.find({ id: req.params.id }, (err, prod) => {
    err && res.status(500).send(err.message);
    res.status(200).json(prod);
  });
};

const updateProfit = (req, res) => {
  try {
    Customer.findOneAndUpdate(
      { id: req.params.id },
      {
        id: req.body.id,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
      },
      (err, produ) => {
        err && res.status(500).json(err.message);
        res.status(200).json(produ);
      }
    );
  } catch (error) {
    res.status(404).json({ Error: "Customer not found" });
  }
};

const deleteCustomer = (req, res) => {
  Customer.findOneAndDelete({ id: req.params.id }, (err, prod) => {
    err && res.status(500).send(err.message);
    res.status(200).send(prod);
  });
};

module.exports = {
  createCustomer,
  getCustomers,
  getCustomer,
  updateProfit,
  deleteCustomer,
};
