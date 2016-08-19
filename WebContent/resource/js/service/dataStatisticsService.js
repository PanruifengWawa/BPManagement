myApp.service("dataStatisticsService",function($http,APIRouters) {
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
})