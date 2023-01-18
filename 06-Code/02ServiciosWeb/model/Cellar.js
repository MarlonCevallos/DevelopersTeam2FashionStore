const mongoose = require("mongoose");
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
    collection: "cellars",
    timestamps: false,
    versionKey: false,
  }
);

module.exports = Cellar = mongoose.model("Cellar", CellarSchema);
