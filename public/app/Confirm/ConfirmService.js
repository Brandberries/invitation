app.service('ConfirmService', function($http){
	this.validateInvitation = function(code, name, callback){
		console.log('test')
		return $http.get('http://localhost:3000/invitation/get', {params: {name: name, code: code}})
			.success(function(data){
				callback(data);
			})

			
	}
})