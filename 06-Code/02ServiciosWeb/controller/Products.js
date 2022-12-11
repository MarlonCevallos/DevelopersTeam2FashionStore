const Product = require("../model/Product")

const createProduct = (req, res) => {
    let product = new Product({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price,
        subtotal: (req.body.subtotal = req.body.price * req.body.quantity),
        total: (req.body.total = req.body.subtotal + 0.12),
        profit: (req.body.profit = (req.body.price * req.body.quantity) * 0.12)
    })

    product.save((err, prod) => {
        err && res.status(500).json(err.message)
        res.status(200).json(prod)
    })
}


const getProducts = (req, res) => {
    Product.find((err, products) => {
        err && res.status(500).send(err.message)
        res.status(200).json(products)
    })
}

const getProduct = (req, res) => {
    Product.find({ "id": req.params.id }, (err, prod) => {
        err && res.status(500).send(err.message)
        res.status(200).json(prod)
    })
}


const updateProfit = (req, res) => {
    try {
        Product.findOneAndUpdate({ id: req.body.id }, {
            name: req.body.name,
            description: req.body.description,
            quantity: req.body.quantity,
            price: req.body.price,
            subtotal: (req.body.subtotal = req.body.price * req.body.quantity),
            total: (req.body.total = req.body.subtotal + 0.12),
            profit: (req.body.profit = (req.body.price * req.body.quantity) * 0.12)
        },
            (err, produ) => {
                err && res.status(500).json(err.message)
                res.status(200).json(produ)
            })
    } catch (error) {
        res.status(404).json({ Error: "Client not found" })
    }
}

const deleteProduct = (req, res) => {
    Product.findOneAndDelete({ id: req.body.id }, (err, prod) => {
        err && res.status(500).send(err.message)
        res.status(200).send(prod)
    })
}

module.exports = { createProduct, getProducts, getProduct, updateProfit, deleteProduct }