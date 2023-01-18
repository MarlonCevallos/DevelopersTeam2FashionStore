const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProviderSchema = new Schema(
    {
        id: { type: Number },
        name: { type: String },
        direction: { type: String},
        phone: { type: String},
        productType: { type: String},
        total: {type: Number}
    },
    {
        collection: "providers",
        timestamps: false,
        versionKey: false,
      }
)
module.exports = Provider = mongoose.model('Provider',ProviderSchema);