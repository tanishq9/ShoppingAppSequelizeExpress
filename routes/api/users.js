const router = require('express').Router();
const User = require('../../db').User;

router.get('/',function(req,res){
    // We will send an array of users
    // from our database here
    // findall works using the Promise API
    // I.E we get a promise object from User.findall()
    User.findAll()
    .then(function(users){
        res.send(users);
    })
    .catch(function(err){
        res.status(500).send({
            error : "Could not retreive users."
        })
    });
});

router.post('/',function(req,res){
    // We expect the req to have a name in it
    // we will a new user
    User.create({
        name : req.body.name
    })
    .then(function(user){
        res.status(201).send(user);
    })
    .catch(function(user){
        res.status(500).send({
            error : "Could not add user"
        });
    });
}) 

module.exports = router ;