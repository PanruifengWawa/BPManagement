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
		
		var data = new FormData();
		data.append("name", $scope.userName);
		data.append("password", $scope.password);
		var promise = userService.login(data);
		promise.success(function(data,status,config,headers) {
			if(data.code === 0) {
				sessionStorage.token = data.data;
				window.location.href = context + "/index";
			} else {
				alert('账号或密码不正确');
			}
			console.log(data);
			
			
	    });
		
		promise.error(function() {
			alert("服务器错误");
	    });
	}
	
	$scope.changePWD = function() {
		if($scope.oldPWD === undefined || $scope.oldPWD === "") {
			alert('旧密码不能为空');
			return;
		}
		if($scope.newPWD1 === undefined || $scope.newPWD1 === "") {
			alert('新密码不能为空');
			return;
		}
		if($scope.newPWD2 === undefined || $scope.newPWD2 === "") {
			alert('新密码不能为空');
			return;
		}
		if($scope.newPWD1 != $scope.newPWD2) {
			alert('新密码不一致');
			return;
		}
		if($scope.newPWD1 === $scope.newPWD2 && $scope.newPWD1.length < 8) {
			alert('密码长度至少为8');
			return;
		}
		var data = new FormData();
		data.append("oldPwd", $scope.oldPWD);
		data.append("newPwd", $scope.newPWD1);
		var promise = userService.changePWD(data);
		promise.success(function(data,status,config,headers) {
			if(data.code === 0) {
				alert("修改密码成功，请重新登录");
				$scope.logout();
			}else {
				alert("旧密码不正确，修改失败");
			}
	    });
		
		promise.error(function() {
			alert("服务器错误");
			$scope.logout();
	    });
	}
	
	$scope.logout = function() {
		//clear buffer data
		sessionStorage.clear();
		top.location =  context;
	}
});