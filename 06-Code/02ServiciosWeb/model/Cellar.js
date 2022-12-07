const mongoose = require("mongoose"); //communicate with mongodb
const Schema = mongoose.Schema;

const CellarSchema = new Schema(
  {
    id: { type: Number },
    name_product: { type: String },
    quantity: { type: Number },
    entry_date: { type: String },
    exit_date: { type: String },
    timeInCellar: { type: String },
  },
  {
    collection: "Cellar",
    timestamps: false,
    versionKey: false,
  }
);

module.exports = Product = mongoose.model("Cellar", CellarSchema);
