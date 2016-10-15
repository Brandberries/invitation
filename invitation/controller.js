var express = require('express');
var router = express.Router();

var Invitation = require('./model')


//Receives invitation code and substring (minimum of 3 characters) of the name
router.get('/get', function(req, res){

	if(!req.query.name || !req.query.code || req.query.name.length < 3)
	{
		res.status(500);
		res.end();
	}
	else
	{
		i = new Invitation(req.query.name, req.query.code);

		res.status(200);

		i.get(function(data){
			res.send(data);
		});
	}

})

router.get('/all', function(req, res){
	res.status(200);

	Invitation.all(function(data){
		res.send(data);
	})
})

router.post('/confirm', function(req, res){
	console.log('test2')
})



module.exports = router;