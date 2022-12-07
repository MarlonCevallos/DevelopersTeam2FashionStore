const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema(
    {
        id: { type: Number },
        name: { type: String },
        description: { type: String },
        quantity: { type: Number },
        price: { type: Number },
        profit: { type: Number }
    }
)

module.exports = Product = mongoose.model('Product', productSchema)
