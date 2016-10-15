app.service('AdminService', function($http){
	this.allInvites;


	this.all = function(callback){
		return $http.get('http://localhost:3000/invitation/all')
			.success(function(data){
				this.allInvites = data;
				callback(data);
			})
	}

	this.newInvitee = function(name, callback){
		console.log(name);
		return $http.put('http://localhost:3000/invitee/new', {}, {params: {name: name}})
			.success(function(inserted){
				callback(true);
			})
			.error(function(inserted){
				callback(false);
			});
	}
})