const Product = require("../model/Product") // importamos nuestro modelo

const createProduct = (req, res) => {
    let Products = new Product({//objeto
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        profit: req.body.profit
    })

    Products.save((err, prod) => {
    err && res.status(500).json(err.message)
    res.status(200).json(prod) 
    })
}


//GET

module.exports = {createProduct}

