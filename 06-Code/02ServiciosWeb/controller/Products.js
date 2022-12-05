const Product = require("../model/Product") // importamos nuestro modelo
//POST
const createProduct = (req, res) => {
    let product = new Product({//objeto
        id: req.params.id,
        name: req.params.name,
        description: req.params.description,
        quantity: req.params.quantity,
        price: req.params.price,
        profit: req.params.profit
    })

    product.save((err, prod) => {
    err && res.status(500).json(err.message)
    res.status(200).json(prod) 
    })
}


//GET
const getProducts = (req, res) => {
    Product.find((err, products) => {
        err && res.status(500).send(err.message)
        res.status(200).json(products)
    })
}
//GET id
const getProduct = (req, res) => {
    Product.find({"id": req.params.id}, (err, prod) =>{
        err && res.status(500).send(err.message)
        res.status(200).json(prod)
    })
}


//PUT
const updateProfit = (req, res) => {
    try{
        Product.findOneAndUpdate({id: req.body.id}, {profit: req.body.profit}, (err, prod) =>{
            err && res.status(500).send(err.message)
            res.status(200).send(prod)
        })
    }catch(error){
        res.status(404).send({Error: "Client not found"})
    }
}


//DELETE
const deleteProduct = (req, res) =>{
    Product.findOneAndDelete({id: req.body.id}, (err, prod) =>{
        err && res.status(500).send(err.message)
        res.status(200).send(prod)
    })
}

module.exports = {createProduct, getProducts, getProduct, updateProfit, deleteProduct}