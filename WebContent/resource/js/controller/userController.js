myApp.controller("userController",function($scope,userService,context) {
	
	
	$scope.login = function() {
		if($scope.userName === undefined || $scope.userName === "") {
			alert("用户名不能为空");
			return;
		}
		if($scope.password === undefined || $scope.password === "") {
			alert("密码不能为空");
			return;
		}
		
		var promise = userService.login();
		promise.success(function(data,status,config,headers) {
			console.log(data);
			
			window.location.href = context + "/index";
	    });
		
		promise.error(function() {
			alert("服务器错误");
	    });
	}
	
	$scope.changePWD = function() {
		alert(1);
	}
	
	$scope.logout = function() {
		//clear buffer data
		window.location.href =  context;
	}
});