myApp.service("dataService",function($http,APIRouters,context) {
	
	this.upload = function(formData) {
		var promise = $http({
			method: 'POST',
		　　 url:  context + "/api/file/upload",
		    headers: {
		       'Content-Type': undefined
		    },
		    data: formData
		});
		return promise;
	}
	
});