const Product = require("../model/Product") // importamos nuestro modelo
//POST
const createProduct = (req, res) => {
    let product = new Product({//objeto
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price
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
        Product.findOneAndUpdate({id: req.body.id}, {
            //id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            quantity: req.body.quantity,
            price: req.body.price
            }, 
            (err, produ) =>{
            err && res.status(500).json(err.message)
            res.status(200).json(produ)
        })
    }catch(error){
        res.status(404).json({Error: "Client not found"})
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