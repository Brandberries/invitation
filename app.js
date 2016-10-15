var express = require('express');
var app = express();
var server = require('http').createServer(app);
//var mysql = require('mysql');

var invitation = require('./invitation/controller')
var invitee = require('./invitee/controller')
var controller = require('./controller')


app.use('/invitation', invitation)
app.use('/invitee', invitee)
app.use(controller)


console.log('Initiang server')
app.use(express.static(__dirname + '/public'));
server.listen(3000);