myApp.service("welcomeService",function($http,context) {
	this.getWelcomeInfo = function() {
		var promise=$http.get(context + "/api/getInfo");
		return promise;
	}
	
	
	this.setWelcomeInfo = function() {
		var promise=$http.get(context + "/api/setInfo");
		return promise;
	}
});