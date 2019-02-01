const sequelize = require('sequelize');

const db = new sequelize('shopdb','shopper','shoppass',{
    host : 'localhost',
    dialect : 'mysql',
    pool : {
        min : 0,
        max : 5
    }
});

// define(name_of_table,{col..})
const User = db.define('users',{
    id : {
        type : sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : sequelize.STRING,
        allowNull : false
    }
});

const Product = db.define('products',{
    id : {
        type : sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : sequelize.STRING,
        allowNull : false
    },
    manufacturer : sequelize.STRING,
    price : {
        type : sequelize.FLOAT,
        allowNull : false,
        defaultValue : 0.0
    }
})

// db.sync() returns a promise function
db.sync().then(function(){
    console.log("Database has been synced.")
}).catch(function(err){
    console.log("Error creating database.")
});

exports = module.exports = {
    User,Product
}
