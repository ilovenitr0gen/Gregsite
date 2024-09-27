'use strict';
var express = require("express");

var app = express();
var http = require('http');
var https = require('https');
var fs = require('fs');

// This line is from the Node.js HTTPS documentation.
var options = {
    key: fs.readFileSync('/etc/ssl/certs/client-key.pem'),
    cert: fs.readFileSync('/etc/ssl/certs/client-cert.pem')
};

//EJS
app.set('view engine', 'ejs');
//css thing
app.use(express.static(__dirname + '/public'));

//link pages to directories

app.get('/', function (req, res) {
    res.render('index.ejs');
});

//run server

// Create an HTTP service.
http.createServer(app).listen(80);
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(443);