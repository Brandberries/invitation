app.controller('AdminCtrl', function($scope, AdminService){


	
	$scope.getAllInvites = function(){
		AdminService.all(function(data){
			$scope.allInvites = data;
		})	
	}

	$scope.newInvitee = function(){
		console.log($scope.invitee)
		AdminService.newInvitee($scope.invitee, function(inserted){
			if(inserted){
				$scope.getAllInvites();
				$scope.invitee = "";
			}
			else
				console.log('Error inserting new user')
		})
	}

	$scope.getAllInvites();
})