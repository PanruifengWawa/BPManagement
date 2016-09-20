myApp.service("dataStatisticsService",function($http,APIRouters) {
	
	this.getWeather = function(date) {
		return $http({
			method: 'GET',
			url: APIRouters.weatherAPI + "?time=" + date,
			headers: {
				'Token': sessionStorage.token
			}
		});
	}
	
	this.getActivity = function(userId,date) {
		return $http({
			method: 'GET',
			url: APIRouters.activityAPI + "?userId=" + userId + "&date=" + date,
			headers: {
				'Token': sessionStorage.token
			}
		});
	}
	this.getBPData = function(userId,date) {
		return $http({
			method: 'GET',
			url: APIRouters.BPDataAPI + "?userId=" + userId + "&date=" + date,
			headers: {
				'Token': sessionStorage.token
			}
		});
	}
	
	this.getFoodRecord = function(userId,date) {
		return $http({
			method: 'GET',
			url: APIRouters.foodRecordAPI + "?userId=" + userId + "&date=" + date,
			headers: {
				'Token': sessionStorage.token
			}
		});
	}
	
	this.getMotion = function(userId,date) {
		return $http({
			method: 'GET',
			url: APIRouters.montionAPI + "?userId=" + userId + "&date=" + date,
			headers: {
				'Token': sessionStorage.token
			}
		});
	}
	
	this.getSymptom = function(userId,date) {
		return $http({
			method: 'GET',
			url: APIRouters.symptomAPI + "?userId=" + userId + "&date=" + date,
			headers: {
				'Token': sessionStorage.token
			}
		});
	}
	
	this.getDrink = function(userId,date) {
		return $http({
			method: 'GET',
			url: APIRouters.drinkAPI + "?userId=" + userId + "&date=" + date,
			headers: {
				'Token': sessionStorage.token
			}
		});
	}
	
	this.getSalt = function(userId,start,end) {
		return $http({
			method: 'GET',
			url: APIRouters.saltAPI + "?userId=" + userId + "&start=" + start + "&end=" + end,
			headers: {
				'Token': sessionStorage.token
			}
		});
	}
	
	
	this.getEatTime = function(userId,date) {
		return $http({
			method: 'GET',
			url: APIRouters.eatTimeAPI + "?userId=" + userId + "&date=" + date,
			headers: {
				'Token': sessionStorage.token
			}
		});
	}
})