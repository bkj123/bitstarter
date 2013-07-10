#!/usr/bin/env node

var express = require('express');
var fx = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 var my_index = fs.readFileSync("index.html");   
  response.send(my_index.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
