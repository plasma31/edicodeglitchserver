var app = require('express').Router();
var cpp = require('./cpp');


app.post('/run', cpp.run);


module.exports = app;