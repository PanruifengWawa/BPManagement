myApp.controller("loginController",function($scope,loginService,$http) {
	
	
	$scope.login = function(){
		if($scope.userName === undefined || $scope.userName === "") {
			$scope.warning = "用户名不能为空";
			return;
		}
		if($scope.password === undefined || $scope.password === "") {
			$scope.warning = "密码不能为空";
			return;
		}
		var promise = loginService.login();
		promise.success(function(data,status,config,headers) {
			console.log(data);
	    });
		
		promise.error(function() {
			$scope.warning = "服务器错误";
	    });
	}
});