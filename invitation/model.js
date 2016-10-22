var db = require('../db.js')

var Invitation = function(name){
	this.name = name;
}

Invitation.prototype.name;

Invitation.all = function(callback){
	return db.getConnection().query('SELECT * from Invitation order by name', function(error, results, fields){
		if(error)
			console.log(error);

		callback(results);
	})
}

module.exports = Invitation;