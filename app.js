var express = require('express');
var app = express();
var server = require('http').createServer(app);
//var mysql = require('mysql');

var invitation = require('./invitation/controller')
var invitee = require('./invitee/controller')
var controller = require('./controller')

app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


app.use('/invitation', invitation)
app.use('/invitee', invitee)
app.use(controller)


console.log('Starting server')
app.use(express.static(__dirname + '/public'));
server.listen(process.env.PORT);
