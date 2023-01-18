const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomersSchema = new Schema(
  {
    id: { type: Number },
    name: { type: String },
    lastname: { type: String },
    email: { type: String },
    phone: { type: Number },
  },
  {
    collection: "customers",
    timestamps: false,
    versionKey: false,
  }
);

module.exports = Customer = mongoose.model("Customer", CustomersSchema);