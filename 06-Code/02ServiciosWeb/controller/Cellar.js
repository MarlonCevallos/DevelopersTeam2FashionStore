const Cellar = require("../model/Cellar");

const createCellar = (req, res) => {
  const { id, name_product, quantity, entry_date, exit_date } = req.body;

  const timeInCellar = "" + bussinessRuler(entry_date, exit_date) + " days";

  const cellar = new Cellar({
    id,
    name_product,
    quantity,
    entry_date,
    exit_date,
    timeInCellar,
  });

  cellar.save((err, newCellar) => {
    err && res.status(500).json(err.message);
    res.status(200).json(newCellar);
  });
};

const getCellars = (req, res) => {
  Cellar.find((err, cellars) => {
    err && res.status(500).send(err.message);
    res.status(200).json(cellars);
  });
};


const getCellar = (req, res) => {
  Cellar.find({ id: req.params.id }, (err, cellar) => {
    err && res.status(500).send(err.message);
    res.status(200).json(cellar);
  });
};


const updateCellar = (req, res) => {
  const { id, name_product, quantity, entry_date, exit_date } = req.body;
  const timeInCellar = "" + bussinessRuler(entry_date, exit_date) + " days";

  try {
    Cellar.findOneAndUpdate(
      { id: req.params.id },
      {
        id,
        name_product,
        quantity,
        entry_date,
        exit_date,
        timeInCellar,
      },
      (err) => {
        err && res.status(500).json(err.message);
        res.status(200).json("http-code: 200, message: 'Cellar updated'");
      }
    );
  } catch (error) {
    res.status(404).json({ Error: "Cellar not found" });
  }
};


const deleteCellar = (req, res) => {
  Product.findOneAndDelete({ id: req.params.id }, (err) => {
    err && res.status(500).send(err.message);
    res.status(200).json("http-code: 200, message: 'Cellar deleted'");
  });
};


const bussinessRuler = (entry_day, exit_day) => {
  const _entry_day = new Date(
    getYaer(entry_day),
    getMonth(entry_day),
    getDay(entry_day)
  );
  const _exit_day = new Date(
    getYaer(exit_day),
    getMonth(exit_day),
    getDay(exit_day)
  );

  const diff = Math.abs(_entry_day - _exit_day);
  const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));

  return diffDays;
};

const getYaer = (date) => {
  return parseInt(date.substring(0, 4));
};

const getMonth = (date) => {
  return parseInt(date.substring(5, 7));
};

const getDay = (date) => {
  return parseInt(date.substring(8, 10));
};


module.exports = {
  createCellar,
  getCellars,
  getCellar,
  updateCellar,
  deleteCellar,
};
