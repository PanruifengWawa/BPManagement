myApp.controller("dataController",function($scope,$rootScope,dataService,context) {
	
	
	$scope.upload = function() {
		if($scope.oldPassword === undefined || $scope.oldPassword === "") {
			alert("用户名不能为空");
			return;
		}
	}
	

});