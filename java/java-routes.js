var app = require('express').Router();
var java = require('./java');


app.post('/run', java.run);


module.exports = app;