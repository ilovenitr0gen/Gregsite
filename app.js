'use strict';
const express = require("express");

const app = express();
const http = require('http');
const https = require('https');
const fs = require('fs');

// This line is from the Node.js HTTPS documentation.
const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/taciturn.media/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/taciturn.media/fullchain.pem')
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