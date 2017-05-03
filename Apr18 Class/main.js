angular.module("apr-18",[])

.controller("mainCtrl", function($scope){
	$scope.aList = [
		{
			"id":1,
			"person": "Liz"
		},
		{
			"id": 2,
			"person" : "Mark"
		}
	];
})