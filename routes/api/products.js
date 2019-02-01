const router = require('express').Router();
const Product = require('../../db').Product;

router.get('/',function(req,res){
    // get all products
    Product.findAll()
    .then(function(products){
        res.send(products);
    })
    .catch(function(){
        res.status(500).send({
            error : 'Could not retreive data.'
        });
    })
})

router.post('/',function(req,res){
    // every data in req.body is a string
    // we can convert that string into float using
    // parseFloat("249.542") but if string is something 
    // like "Rs.249.54" then we cannot parse this to float as 
    // it will give error on parsing resulting in NaN values
    // Therefore , we first validata the value
    if(isNaN(parseFloat(req.body.price))){
        return res.status(403).send({
            error : 'Price is not valid.'}
        )
    };
    // Add a new product
    Product.create({
        name : req.body.name,
        manufacturer : req.body.manufacturer,
        price : req.body.price})
    .then(function(product){
        res.status(201).send(product);
    })
    .catch(function(err){
        res.status(500).send(err);
    })
})

module.exports = router ;