const { json } = require("body-parser")
const res = require("express/lib/response")
const Product = require("../model/Product") // importamos nuestro modelo

const createProduct = (req, res) => {
    let product = new Product({//objeto
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        profit: req.body.profit
    })

    product.save((err, prod) => {
    err && res.status(500).json(err.message)
    res.status(200).json(prod) 
    })
}

module.exports = {createProduct}

