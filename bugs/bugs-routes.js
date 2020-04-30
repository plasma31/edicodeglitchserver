var app = require('express').Router();
var bugs = require('./bugs');


app.post('/add', bugs.add);

module.exports = app;