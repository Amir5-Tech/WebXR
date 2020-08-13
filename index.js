var express = require('express');
var path = require('path')
var app = express();
app.use(
    express.static(
        path.join(__dirname,'./public')
        ) 
    );
var server = app.listen(8099,function(){console.log('jdhfjdhfjdhfdkjfhdjhf')});     