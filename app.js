'use strict'

var express = require('express');
var app = express();
var port = 8080;


//default
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//message
app.get('/api/message', function(req, res) {
  var str = req.query.str;
  res.send(str);
});

//Error redirect
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

//Server
app.listen(port, function () {
  console.log('ToolBoxTv Server listening on port '+ port + ' !');
});

module.exports = app;
