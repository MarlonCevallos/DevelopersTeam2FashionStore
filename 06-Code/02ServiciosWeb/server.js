const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser') //obtener informacion de la consulta

const portParameter = 3005 // port
const endPoints = require('./routes/productRoute')

var app = express() //app toma la funcion de express

app.use(bodyParser.urlencoded({extended: false})) //deserealizar url
app.use(bodyParser.json()) //usar en fotmato json
app.use("/fashionStore",endPoints) // http://localhost:3005/product/uri

mongoose.connect('mongodb+srv://MarlonTeam2:2022@cluster0.pvig5s9.mongodb.net/FashionStoreDB?retryWrites=true&w=majority',
{useNewUrlParser: true},
(err, res) => {
    err && console.log("Error connecting to database")
    app.listen(portParameter, () => {
        console.log(`Server is running on port ${portParameter}`)
    })
}

)