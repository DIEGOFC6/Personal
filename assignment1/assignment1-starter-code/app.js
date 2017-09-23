(function () {
'use strict';

angular.module('Assignment1', [])
.controller('Controller1', Controller1);

//Controller1.$inject = ['$scope'];

function Controller1 ($scope){

  
$scope.contarItems = function (){
		$scope.textoSalida = "";
		console.log($scope.items);
		if($scope.items != undefined)
		{
			var cantidadItems = $scope.items.split(',');

			if(cantidadItems.length <= 3)
				$scope.textoSalida = "Enjoy!";
			else 
				$scope.textoSalida = "Too much!";
		}
		else 
			$scope.textoSalida = "Please enter data first";

	};

};
	

})();