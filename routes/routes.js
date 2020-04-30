var app = require('express').Router();

// base route for masters

var python = require('../python/python-routes');
var cpp = require('../cpp/cpp-routes');
var java = require('../java/java-routes');
var node = require('../javascript/js-routes');


app.use('/python',python);
app.use('/c',cpp);
app.use('/java',java);
app.use('/javascript',node);


module.exports = app;