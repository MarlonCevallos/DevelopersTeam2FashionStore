const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const portParameter = 3002;
const endPoints = require("./routes/productRoute");
const cellarEndPoints = require("./routes/cellarRoute");
const customerendPoints = require('./routes/customerRoute');
const Api = require('./routes/providerRoute')

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/fashionStore", endPoints);
app.use("/fashionStore", cellarEndPoints);
app.use("/fashionStore", customerendPoints);
app.use("/fashionStore", Api)

mongoose.connect(
  "mongodb+srv://MarlonTeam2:2022@cluster0.pvig5s9.mongodb.net/FashionStoreDB?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (err, res) => {
    err && console.log("Error connecting to database");
    app.listen(portParameter, () => {
      console.log(`Server is running on port ${portParameter}`);
    });
  }
);
