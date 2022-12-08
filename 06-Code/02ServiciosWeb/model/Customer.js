const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomersSchema = new Schema(
    {
        id: { type: String },
        name: { type: String },
        lastname: { type: String },
        email: { type: String },
        phone: { type: Number }
        
        
    }
)

module.exports = Customer = mongoose.model('Customer', CustomersSchema)