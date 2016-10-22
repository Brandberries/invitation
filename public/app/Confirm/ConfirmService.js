app.service('ConfirmService', function($http, ConfigService){
	
	this.newInvitee = function(name, callback){
		return $http.post('http://'+ConfigService.server+':'+ConfigService.port+'/invitee/new', {}, {params: {name: name}})
			.success(function(data){
				callback(true);
			})
			.error(function(data){
				callback(false);
			})
	}
})

