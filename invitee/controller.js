var express = require('express');
var router = express.Router();

var Invitee = require('./model')

router.post('/new', function(req, res){
	i = new Invitee(req.query.name);

	i.save(function(inserted){
		if(inserted)
			res.status(200);
		else
			res.status(500);
		
		res.end();
	})
	
})

module.exports = router;