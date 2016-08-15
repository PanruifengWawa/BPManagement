myApp.controller("dataController",function($scope,dataService,context) {
	
	
	$scope.upload = function() {

		var formData = new FormData();
	    formData.append('dataFile', document.getElementById("dataFile").files[0]);
	    
	    var promise = dataService.upload(formData);
	    promise.success(function(data,status,config,headers) {
			 $scope.importData(data);
			
	    });
		
		promise.error(function() {
			alert("上传文件不能为空或者文件错误");
	    });
	}
	
	$scope.importData = function(data) {
		var formData = new FormData();
	    formData.append('data', JSON.stringify(data));
	    
	    var promise = dataService.importData(formData);
	    promise.success(function(data,status,config,headers) {
	    	if(data.code === 0) {
	    		alert("上传成功");
	    	} else {
	    		alert("上传失败");
	    	}
	    	location.replace(location.href);
	    	console.log(data);
			
	    });
		
		promise.error(function() {
			alert("服务器错误");
	    });
	}
	

});