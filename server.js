const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',express.static(__dirname+'/public'));
app.use('/api',require('./routes/api'))

app.listen(6395,function(){
    console.log('Server started on https://localhost:6395');
});