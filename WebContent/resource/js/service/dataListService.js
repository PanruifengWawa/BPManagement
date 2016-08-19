myApp.service("dataListService",function($http,APIRouters) {
	this.getUserList = function() {
		return $http({
			method: 'GET',
			url: APIRouters.userListAPI,
			headers: {
				'Token': sessionStorage.token
			}
		});
	}
	
	this.getUserInfo = function(userId) {
		return $http({
			method: 'GET',
			url: APIRouters.userInfoAPI + "?id=" + userId,
			headers: {
				'Token': sessionStorage.token
			}
		});
	}
	
	this.updateUser = function(data) {
		
		return $http({
			method: 'POST',
			url: APIRouters.updateUserAPI,
			data: data,
			headers: {
				'Content-Type': undefined,
				'Token': sessionStorage.token
			}
		});
	}
	
});