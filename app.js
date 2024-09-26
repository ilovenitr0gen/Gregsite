'use strict';
var express = require("express");

var app = express();
var http = require('http');
var port = process.env.PORT || 8000;

//EJS
app.set('view engine', 'ejs');

//link pages to directories

app.get('/', function (req, res) {
    res.render('index.ejs');
});

//run server

var server = app.listen(port);