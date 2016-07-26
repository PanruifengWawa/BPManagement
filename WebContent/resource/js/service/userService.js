myApp.service("userService",function($http,APIRouters) {
	this.login = function() {
		var promise=$http.jsonp(APIRouters.loginAPI + "?callback=JSON_CALLBACK");
		return promise;
	}
});