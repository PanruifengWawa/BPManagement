var myApp = angular.module("myApp", []);

myApp.value("context", "/BPManagement");

if(sessionStorage.token == undefined ||  sessionStorage.token == '') {
	if(location.pathname != '/BPManagement/' && location.pathname != '/BPManagement/login') {
		window.location.href = "/BPManagement";
	}
}