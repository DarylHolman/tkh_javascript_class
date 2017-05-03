angular.module("420app", ["ngRoute"])
.controller("someController", function(){
$routeProvider
	.when ("/"){
		templateUrl: "main.html"
	}

	})
.when ("/red"){
		templateUrl: "red.html"
	}

	}
.when ("/blue"){
		templateUrl: "blue.html"
	}

	}
.controller("someController", function(){


})