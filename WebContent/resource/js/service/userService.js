myApp.service("userService",function($http,APIRouters) {
	this.login = function(data) {
	     return  $http({
			　　method: 'POST',
			　　url: APIRouters.loginAPI,
			   data: data,
			   headers: {
			     'Content-Type': undefined
			   }
	     });
	};
	
	this.changePWD = function(data) {
		return $http({
			method: 'POST',
			url: APIRouters.changePwdAPI,
			data: data,
			headers: {
				'Content-Type': undefined,
				'Token': sessionStorage.token
			}
		});
	}
});