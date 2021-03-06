myApp.controller("welcomeController",function($scope,$rootScope,welcomeService) {

	try{
		$scope.loginInfo = JSON.parse(sessionStorage.loginInfo);
	} catch(e) {
		$scope.loginInfo = {
				lastLoginDate: "未知", loginCount: 0, lastLoginIP: "未知"
		}
	}
	
	if(sessionStorage.loginInfo === undefined) {
		
		
		var promise = welcomeService.getWelcomeInfo();
		promise.success(function(data,status,config,headers) {
			welcomeService.setWelcomeInfo();
			$scope.loginInfo = JSON.parse(data);
			sessionStorage.loginInfo = data;
		});
		promise.error(function(){
			welcomeService.setWelcomeInfo();
		});
	}
});