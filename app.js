'use strict';

const express = require("express");

const app = express();
const http = require('http');
const https = require('https');
const fs = require('fs');

let SSLKeysExist = true;
let options;

try {
    // This line is from the Node.js HTTPS documentation.
    options = {
        key: fs.readFileSync('/etc/letsencrypt/live/taciturn.media/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/taciturn.media/fullchain.pem')
    };
}
catch {
    SSLKeysExist = false;
    console.log("Could not find SSL keys and establish HTTPS connection")
}

//EJS
app.set('view engine', 'ejs');
//css thing
app.use(express.static(__dirname + '/public'));

//link pages to directories

app.get('/', function (req, res) {
    res.render('index.ejs');
});

app.get('/gallery', function (req, res) {
    res.render('gallery/index.ejs');
});

app.get('/supersecret', function (req, res) {
    res.render('videos/nggyu.webm');
});

//run server

// Create an HTTP service.
http.createServer(app).listen(80);

// Create an HTTPS service identical to the HTTP service.
if(SSLKeysExist) {
    https.createServer(options, app).listen(443);
}