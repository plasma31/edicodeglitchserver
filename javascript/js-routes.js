var app = require('express').Router();
var node = require('./javascript');


app.post('/run', node.run);


module.exports = app;