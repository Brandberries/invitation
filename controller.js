var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.sendFile(__dirname + '/public/app/Confirm/confirm.html');
})

router.get('/gerenciar', function(req, res){
	res.sendFile(__dirname + '/public/app/Admin/admin.html');
})

module.exports = router;