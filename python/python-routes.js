var app = require('express').Router();
var python = require('./python');


app.post('/run', python.run);



module.exports = app;