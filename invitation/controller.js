var express = require('express');
var router = express.Router();

var Invitation = require('./model')

router.get('/all', function(req, res){
	res.status(200);

	Invitation.all(function(data){
		res.send(data);
	})
})

module.exports = router;