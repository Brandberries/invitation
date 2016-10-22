app.service('AdminService', function($http, ConfigService){
	this.allInvites;

	this.all = function(callback){
		return $http.get('http://'+ConfigService.server+':'+ConfigService.port+'/invitation/all')
			.success(function(data){
				this.allInvites = data;
				callback(data);
			})
	}

})