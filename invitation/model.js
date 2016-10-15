var db = require('../db.js')

var Invitation = function(name, code){
	this.name = name;
	this.code = code;
}

Invitation.prototype.name;
Invitation.prototype.code;

Invitation.prototype.get = function(callback){
	return db.getConnection().query('SELECT * from Invitation where name LIKE ? and code = ?', ['%'+this.name+'%', this.code], function(error, results, fields){
		if(error)
			console.log(error);
		
		callback(results);
	})
}



Invitation.prototype.confirm = function(){

}

Invitation.all = function(callback){
	return db.getConnection().query('SELECT * from Invitation order by name', function(error, results, fields){
		if(error)
			console.log(error);

		callback(results);
	})
}

module.exports = Invitation;