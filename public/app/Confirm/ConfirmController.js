
app.controller('ConfirmCtrl', function($scope, $mdDialog, ConfirmService, ConfigService, $http){

	$scope.text_confirmation = "";
	$scope.confirmed = false;
	
	$scope.showConfirm = function(ev){

		confirmContent = $scope.name + ', deseja confirmar sua presença?';

		var confirm = $mdDialog.confirm()
			.title('FESTA DE ANIVERSÁRIO - MARIA 15 ANOS')
			.textContent(confirmContent)
			.ariaLabel('ariaLabel')
			.targetEvent(ev)
			.ok('SIM')
			.cancel('NÃO');				

		$mdDialog.show(confirm).then(function(){
			ConfirmService.newInvitee($scope.name , function(success){
				if(success){
					$scope.name = "";
					$scope.confirmed = true;
					$scope.text_confirmation = "Confirmação feita com sucesso";
				}
				else{
					$scope.confirmed = false;
					$scope.text_confirmation = "Erro ao realizar confirmação. Tente novamente mais tarde.";
				}
			})

		}, function(){
			//Not confirmed	
		})		
	}
})