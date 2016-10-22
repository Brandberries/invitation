var db = require('../db.js')

var Invitee = function(name){
	this.name = name;
}

Invitee.prototype.name = "";

Invitee.prototype.save = function(callback){
	data = {name: this.name}

	return db.getConnection().query('INSERT INTO Invitation SET ?', data, function(err, result){
		if(err){
			console.log(err);
			return callback(false);	
		} 

		return callback(true);
	})
}

module.exports = Invitee