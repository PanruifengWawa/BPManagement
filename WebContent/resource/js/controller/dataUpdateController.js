myApp.controller("dataUpdateController",function($scope,dataListService,context) {
	$scope.logout = function() {
		//clear buffer data
		sessionStorage.clear();
		top.location =  context;
	}
	
	
	$scope.getQueryStringByName = function(name){
		 var result = location.search.match(new RegExp("[\?\&]" + name+ "=([^\&]+)","i"));
		
		 if(result == null || result.length < 1){
			 return "";
		 }
		 return result[1];
	}
	
	$scope.getUserInfo = function(userId) {
		var promise = dataListService.getUserInfo(userId);
	    promise.success(function(data,status,config,headers) {
	    	if(data.code === 0) {
	    		$scope.user = data.data;
	    	} else {
	    		alert("获取用户信息失败");
	    	}
			
	    });
		
		promise.error(function() {
			$scope.user = {};
	    });
	}
	
	$scope.updateUser = function() {
		$scope.userId = document.getElementById("userId").value;
		$scope.value = document.getElementById($scope.updateType).value;
		if($scope.userId === undefined || $scope.userId === "") {
			alert("请输入用户ID");
			return;
		}
		
		if($scope.updateType === undefined || $scope.updateType === "") {
			alert("请选择修改的字段类型");
			return;
		}
		if($scope.value === undefined || $scope.value === "" || $scope.value <= 0) {
			alert("请输入具体的值,并且确保值大于零");
			return;
		}
		var re = /^[0-9]*[1-9][0-9]*$/ ; 
		if(!re.test($scope.value) || !re.test($scope.userId)) {
			alert("请输入正整数");
			return;
		}
		var data = new FormData();
		data.append("id", $scope.userId);
		data.append("type", $scope.updateType);
		data.append("value", $scope.value);
		var promise = dataListService.updateUser(data);
	    promise.success(function(data,status,config,headers) {
	    	if(data.code === 0 && data.data == true) {
	    		alert("更新用户信息成功");
	    	} else {
	    		alert("更新用户信息失败,用户可能不存在");
	    	}
			
	    });
		
		promise.error(function() {
			alert("服务器错误或数值类型为非正整数");
	    });
		
	}
	$scope.updateType = "weight";
	$scope.user = {};
	$scope.userId = $scope.getQueryStringByName("userId");
	if($scope.userId != "") {
		$scope.getUserInfo($scope.userId);
	}
	
	

});