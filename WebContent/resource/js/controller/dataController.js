myApp.controller("dataController",function($scope,dataService,context) {
	
	
	$scope.upload = function() {

		var formData = new FormData();
	    formData.append('dataFile', document.getElementById("dataFile").files[0]);
	    
	    var promise = dataService.upload(formData);
	    promise.success(function(data,status,config,headers) {
			console.log(data);
			
	    });
		
		promise.error(function() {
			alert("上传文件不能为空或者文件错误");
	    });
	}
	

});