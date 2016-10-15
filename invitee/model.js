var db = require('../db.js')

var Invitee = function(name){
	this.code = generateCode();
	this.name = name;
}

Invitee.prototype.name = "";
Invitee.prototype.code = "";

var generateCode = function(){
	var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
	var text = "";

	for(var i=0; i < 3; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}

Invitee.prototype.save = function(callback){
	data = {code: this.code, name: this.name, status: 0}

	return db.getConnection().query('INSERT INTO Invitation SET ?', data, function(err, result){
		if(err) return callback(false);

		return callback(true);
	})
}

Invitee.prototype.remove = function(){

}

module.exports = Invitee