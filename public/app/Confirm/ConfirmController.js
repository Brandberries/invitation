
app.controller('ConfirmCtrl', function($scope, $mdDialog, ConfirmService, $http){

	$scope.showConfirm = function(ev){

		ConfirmService.validateInvitation($scope.code, $scope.name, function(data){
			confirmContent = data[0].name + ', deseja confirmar sua presença?';

			var confirm = $mdDialog.confirm()
				.title('FESTA DE ANIVERSÁRIO - MARIA 15 ANOS')
				.textContent(confirmContent)
				.ariaLabel('ariaLabel')
				.targetEvent(ev)
				.ok('SIM')
				.cancel('NÃO');				

			$mdDialog.show(confirm).then(function(){
				console.log('OK');

			}, function(){
				console.log('CANCEL');
			})
		})

		 // $http.get('http://localhost:3000/invitation/get', {params: {name: $scope.name, code: $scope.code}})
			// .success(function(data){

			// 	console.log(data);
				


				
			// })


		

		
	}
})