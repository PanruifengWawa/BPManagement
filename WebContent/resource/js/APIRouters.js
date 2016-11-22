var routers = {
		"loginAPI" : "http://115.28.204.123:8080/v1/admin/user/login",
		"changePwdAPI" : "http://115.28.204.123:8080/v1/admin/user/changePwd",
		"importDataAPI" : "http://115.28.204.123:8080/v1/admin/data/import",
		"userListAPI" : "http://115.28.204.123:8080/v1/admin/usermanage/getall",
		"userInfoAPI" : "http://115.28.204.123:8080/v1/admin/usermanage/get",
		"updateUserAPI" : "http://115.28.204.123:8080/v1/admin/usermanage/update",
		"BPDataAPI" : "http://115.28.204.123:8080/v1/admin/data/bpdata",
		"foodRecordAPI" : "http://115.28.204.123:8080/v1/admin/data/food",
		"montionAPI" : "http://115.28.204.123:8080/v1/admin/data/motion",
		"symptomAPI" : "http://115.28.204.123:8080/v1/admin/data/symptom",
		"drinkAPI" : "http://115.28.204.123:8080/v1/admin/data/drink",
		"saltAPI" : "http://115.28.204.123:8080/v1/admin/data/salt",
		"eatTimeAPI" : "http://115.28.204.123:8080/v1/admin/data/meal",
		"activityAPI" : "http://115.28.204.123:8080/v1/admin/data/activity",
		"weatherAPI" : "http://115.28.204.123:8080/v1/common/weather/getDayWeather",
		"drugUserAPI" : "http://115.28.204.123:8080/v1/admin/data/drug"
}

myApp.value("APIRouters", routers);

