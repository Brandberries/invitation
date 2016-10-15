var mysql = require('mysql');

var db = function(){}

db.getConnection = function(){
	if(!db.connected)
	{
		this.connection = mysql.createConnection({
			host: '52.33.81.35',
			user: 'root',
			password: 'root',
			database: 'maria'
		});

		this.connection.connect(function(err){
			if(err){
				console.log(err)
			}
		})
		
		this.connected = true;
		return this.connection;		
	}
	else
	{
		return this.connection;
	}
}


db.connection = null;
db.connected = false;

module.exports = db;
