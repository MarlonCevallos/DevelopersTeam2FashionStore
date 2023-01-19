const Provider = require("../model/Provider");

const createProvider = (req, res) => {
  let provider = new Provider({
    id: req.body.id,
    name: req.body.name,
    direction: req.body.direction,
    phone: req.body.phone,
    productType: req.body.productType,
    total: req.body.total,
  });
  provider.save((err, prov) => {
    err && res.status(500).json(err.message);
    res.status(200).json(prov);
  });
};

const getProviders = (req, res) => {
  Provider.find((err, providers) => {
    err && res.status(500).send(err.message);
    res.status(200).json(providers);
  });
};

const getProvider = (req, res) => {
  Provider.find({ id: req.params.id }, (err, prod) => {
    err && res.status(500).send(err.message);
    res.status(200).json(prod);
  });
};

const updateProvider = (req, res) => {
  Provider.findOneAndUpdate(
    { id: req.params.id },
    {
      id: req.body.id,
      name: req.body.name,
      direction: req.body.direction,
      phone: req.body.phone,
      productType: req.body.productType,
      total: req.body.total,
    },
    (err, prov) => {
      err && res.status(500).send(err.message);
      res.status(200).send(prov);
    }
  );
};

const deleteProvider = (req, res) => {
  Provider.findOneAndDelete({ id: req.params.id }, (err, prov) => {
    err && res.status(501).send(err.message);
    res.status(200).send(prov);
  });
};

module.exports = {
  createProvider,
  getProviders,
  getProvider,
  updateProvider,
  deleteProvider,
};
