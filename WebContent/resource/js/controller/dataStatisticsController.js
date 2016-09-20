myApp.controller("dataStatisticsController",function($scope,dataStatisticsService,dataListService,context) {
	$scope.getBPData = function(userId,date) {
		var promise = dataStatisticsService.getBPData(userId,date);
	    promise.success(function(data,status,config,headers) {
			if(data.code ===0) {
				var bpData = data.data;
				for(var i = 0 ; i < bpData.length; i++) {
					var mdate = new Date(date + " " + bpData[i].time);
					$scope.BPSYS.push([Date.UTC(mdate.getFullYear(), mdate.getMonth(), mdate.getDate(),mdate.getHours(),mdate.getMinutes()),bpData[i].sys]);
					$scope.BPDIA.push([Date.UTC(mdate.getFullYear(), mdate.getMonth(), mdate.getDate(),mdate.getHours(),mdate.getMinutes()),bpData[i].dia]);
				}
			}else {
				alert("获取血压数据失败");
			}
			
			$scope.setBPGraph($scope.userId,$scope.BPSYS,$scope.BPDIA);
			
	    });
		
		promise.error(function() {
			alert("获取血压数据失败");
			
	    });
	}
	$scope.getUserInfo = function(userId) {
		var promise = dataListService.getUserInfo(userId);
	    promise.success(function(data,status,config,headers) {
	    	if(data.code === 0) {
	    		$scope.user = data.data;
	    	} else {
	    		alert("获取用户信息失败");
	    	}
			
	    });
		
		promise.error(function() {
			alert("获取用户信息失败");
	    });
	}
	
	$scope.getActivity = function(userId,date) {
		var promise = dataStatisticsService.getActivity(userId,date);
	    promise.success(function(data,status,config,headers) {
	    	if(data.code === 0) {
	    		$scope.activity = data.data;
	    	} else {
	    		alert("获取能量消耗记录失败");
	    	}
			
	    });
		
		promise.error(function() {
			alert("获取能量消耗记录失败");
	    });
	}
	
	$scope.getWeather = function(date) {
		var promise = dataStatisticsService.getWeather(date);
	    promise.success(function(data,status,config,headers) {
	    	if(data.code === 0) {
	    		$scope.weather = data.data;
	    	} else {
	    		alert("获取日期记录失败");
	    	}
			
	    });
		
		promise.error(function() {
			alert("获取日期记录失败");
	    });
	}
	
	
	$scope.getEatTimes = function(userId,date) {
		var promise = dataStatisticsService.getEatTime(userId,date);
	    promise.success(function(data,status,config,headers) {
	    	if(data.code === 0) {
	    		$scope.eatTimes = data.data;
	    	} else {
	    		alert("获取用餐时间记录失败");
	    	}
			
	    });
		
		promise.error(function() {
			alert("获取用餐时间记录失败");
	    });
	}
	
	$scope.getTodayFormatDate = function(){
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    }
	
	$scope.addDate = function(date,days){ 
		var d = new Date(date); 
		d.setDate(d.getDate()+days); 
		var month = d.getMonth()+1; 
		var day = d.getDate(); 
		if(month < 10){ 
			month = "0"+month; 
		} 
		if(day<10){ 
			day = "0"+day; 
		} 
		var val = d.getFullYear() + "-" + month + "-" + day; 
		return val; 
	}
	
	$scope.getSymptom = function(userId,date) {
		var promise = dataStatisticsService.getSymptom(userId,date);
	    promise.success(function(data,status,config,headers) {
	    	if(data.code === 0) {
	    		var symptomData = data.data;
				for(var i = 0 ; i < symptomData.length; i++) {
					var mdate = new Date(date + " " + symptomData[i].time);
					$scope.symptom.push([Date.UTC(mdate.getFullYear(), mdate.getMonth(), mdate.getDate(),mdate.getHours(),mdate.getMinutes()),symptomData[i].state-1]);
				}
	    	} else {
	    		alert("获取情绪记录失败");
	    	}
	    	$scope.setSymptomGraph(userId,$scope.symptom);
			
	    });
		
		promise.error(function() {
			alert("获取情绪记录失败");
	    });
	}
	
	$scope.setSymptomGraph = function(userId,symptom) { 
		$(function () {
		    $('#symptom').highcharts({
		        chart: {
		            type: 'scatter',
		            zoomType: 'xy'
		        },
		        title: {
		            text: '<span style="font-size:20px;font-weight:bold;">症状变化</span>'
		        },
		        subtitle: {
		            text: '用户ID:' + userId
		        },
		        xAxis: {
		        	type: 'datetime',
		            dateTimeLabelFormats: { // don't display the dummy year
		                month: '%e. %b',
		                year: '%b'
		            },
		            title: {
		                text: '时间'
		            }
		        },
		        yAxis: {
		        	title: {
		                text: '症状'
		            },
		            categories: ['心悸','嗜睡','恶心','腰酸','腹泻','头晕','发烧','鼻塞','背痛','耳鸣','胸痛','气短','咳痰','呕吐','食欲不振','视力模糊','排尿困难','四肢乏力','黑色大便']
		        },
		        plotOptions: {
		            scatter: {
		                marker: {
		                    radius: 5,
		                    states: {
		                        hover: {
		                            enabled: true,
		                            lineColor: 'rgb(100,100,100)'
		                        }
		                    }
		                },
		                states: {
		                    hover: {
		                        marker: {
		                            enabled: false
		                        }
		                    }
		                }
		            }
		            
		        },
		        tooltip: {
		            formatter: function () {
		                return Highcharts.dateFormat('%e. %b,%H:%M',this.x) + '<br>症状类型:' + this.series.yAxis.categories[this.point.y] ;
		            }
		        },
		        series: [{
		            name: '症状变化',
		            color: 'rgba(223, 83, 83, .5)',
		            data: symptom,
		            dataLabels: {
		                enabled: true,
		                color: '#FFFFFF',
		                align: 'center',
		                formatter: function () {
			                return this.series.yAxis.categories[this.point.y] ;
			            },
		                y: 10 // 10 pixels down from the top
//		                style: {
//		                    fontSize: '3px'
//		                }
		            }
		        }]
		    });
		});

	}
	
	$scope.setMontionGraph = function(userId,montion) {
		$(function () {
		    $('#montion').highcharts({
		        chart: {
		            type: 'spline'
		        },
		        title: {
		            text: '<span style="font-size:20px;font-weight:bold;">情绪变化</span>'
		        },
		        subtitle: {
		            text: '用户ID:' + userId
		        },
		        xAxis: {
		            type: 'datetime',
		            dateTimeLabelFormats: { // don't display the dummy year
		                month: '%e. %b',
		                year: '%b'
		            },
		            title: {
		                text: '时间'
		            }
		        },
		        yAxis: {
		            title: {
		                text: '情绪'
		            }
//		            categories: ['开心A','开心B','开心C','开心D','开心E','开心F','开心G','开心H','开心I','开心J','开心K','开心L']
		        },
		        tooltip: {
//		            headerFormat: '{point.x:%e. %b,%H:%M}<br>',
//		            pointFormat: '{series.name}: <b>情绪类型' + this.series.yAxis.categories[this.point.y]  + '</b>',
		            formatter: function () {
		                return Highcharts.dateFormat('%e. %b,%H:%M',this.x) + '<br>情绪类型:' + this.point.y;
//		                this.series.yAxis.categories[this.point.y] ;
		            }
		        },
		        plotOptions: {
		            spline: {
		                marker: {
		                    enabled: true
		                }
		            }
		        },
		        series: [{
		            name: '情绪变化',
		            data: montion
		        }]
		    });
		});
	}
	
	$scope.setBPGraph = function(userId,BPSYS,BPDIA) {
		$(function () {
		    $('#BP').highcharts({
		        chart: {
		            type: 'spline'
		        },
		        title: {
		            text: '<span style="font-size:20px;font-weight:bold;">血压数据</span>'
		        },
		        subtitle: {
		            text: '用户ID:' + userId
		        },
		        xAxis: {
		            type: 'datetime',
		            dateTimeLabelFormats: { // don't display the dummy year
		                month: '%e. %b',
		                year: '%b'
		            },
		            title: {
		                text: '时间'
		            }
		        },
		        yAxis: {
		            title: {
		                text: '血压 (mmHg)'
		            },
		            min: 0
		        },
		        tooltip: {
		            headerFormat: '{point.x:%e. %b,%H:%M}<br>',
		            pointFormat: '{series.name}: <b>{point.y:.2f} mmHg</b>'
		        },
		        plotOptions: {
		            spline: {
		                marker: {
		                    enabled: true
		                }
		            }
		        },
		        series: [{
		            name: 'BP SYS',
		            data: BPSYS
		        },{
		            name: 'BP DIA',
		            data: BPDIA
		        }]
		    });
		});

	}
	
	$scope.getFoodRecord = function(userId,date) {
		var promise = dataStatisticsService.getFoodRecord(userId,date);
	    promise.success(function(data,status,config,headers) {
	    	if(data.code === 0) {
	    		$scope.foodRecords = data.data;
	    	} else {
	    		alert("获取饮食记录失败");
	    	}
			
	    });
		
		promise.error(function() {
			alert("获取饮食记录失败");
	    });
	}
	
	$scope.getMontion = function(userId,date) {
		var promise = dataStatisticsService.getMotion(userId,date);
	    promise.success(function(data,status,config,headers) {
	    	if(data.code === 0) {
	    		var montionData = data.data;
				for(var i = 0 ; i < montionData.length; i++) {
					var mdate = new Date(date + " " + montionData[i].time);
					$scope.montion.push([Date.UTC(mdate.getFullYear(), mdate.getMonth(), mdate.getDate(),mdate.getHours(),mdate.getMinutes()),montionData[i].state]);
				}
	    	} else {
	    		alert("获取情绪记录失败");
	    	}
	    	$scope.setMontionGraph(userId,$scope.montion);
			
	    });
		
		promise.error(function() {
			alert("获取情绪记录失败");
	    });
	}
	
	$scope.getDrink = function(userId,date) {
		var promise = dataStatisticsService.getDrink(userId,date);
	    promise.success(function(data,status,config,headers) {
	    	if(data.code === 0) {
	    		$scope.drink = data.data;
	    		$scope.drink.userId = userId;
	    	} else {
	    		alert("获取饮品与吸烟记录记录失败");
	    	}
			
	    });
		
		promise.error(function() {
			alert("获取饮品与吸烟记录失败");
	    });
	}
	
	$scope.getSalt = function(userId,start,end) {
		var promise = dataStatisticsService.getSalt(userId,start,end);
	    promise.success(function(data,status,config,headers) {
	    	if(data.code === 0) {
	    		var saltData = data.data;
	    		for(var i = 0 ; i < saltData.length; i++) {
	    			$scope.salt.push([saltData[i].time,saltData[i].value]);
	    		}
	    	} else {
	    		alert("获取盐含量记录记录失败");
	    	}
			$scope.setSaltGraph(userId,$scope.salt);
	    });
		
		promise.error(function() {
			alert("获取盐含量记录失败");
	    });
	}
	
	$scope.setSaltGraph = function(userId,salt) {
		$(function () {
		    $('#salt').highcharts({
		        chart: {
		            type: 'column'
		        },
		        title: {
		            text: '<span style="font-size:20px;font-weight:bold;">盐含量记录</span>'
		        },
		        subtitle: {
		            text: '用户ID:' + userId
		        },
		        xAxis: {
		            type: 'category',
		            labels: {
		                rotation: -45,
		                style: {
		                    fontSize: '13px',
		                    fontFamily: 'Verdana, sans-serif'
		                }
		            }
		        },
		        yAxis: {
		            min: 0,
		            title: {
		                text: '盐值 (g)'
		            }
		        },
		        legend: {
		            enabled: false
		        },
		        tooltip: {
		            pointFormat: '盐含量: <b>{point.y} g</b>'
		        },
		        series: [{
		            name: '盐含量',
		            data: salt,
		            dataLabels: {
		                enabled: true,
		                rotation: -90,
		                color: '#FFFFFF',
		                align: 'top',
		                format: '{point.y}', // one decimal
		                y: 10, // 10 pixels down from the top
		                style: {
		                    fontSize: '13px',
		                    fontFamily: 'Verdana, sans-serif'
		                }
		            }
		        }]
		    });
		});


	}

	
	$scope.dataInit = function() {
		$scope.user = {};
		$scope.todayDate = $scope.getTodayFormatDate();
		$scope.BPSYS = [];
		$scope.BPDIA = [];
		
		$scope.foodRecords = [];
		
		$scope.montion = [];
		
		$scope.symptom = [];
		
		$scope.drink = [];
		
		$scope.salt = [];
		
		$scope.eatTimes = [];
		
		$scope.activity = [];
		
		$scope.weather = {};
		
		$scope.setBPGraph('',$scope.BPSYS,$scope.BPDIA);
		$scope.setMontionGraph('',$scope.montion);
		$scope.setSymptomGraph('',$scope.symptom);
		$scope.setSaltGraph('',$scope.salt);
		
		
		document.getElementById('searchFoodDate').value = $scope.todayDate;
		document.getElementById('searchBPDate').value = $scope.todayDate;
		document.getElementById('searchMontionDate').value = $scope.todayDate;
		document.getElementById('searchSymptomDate').value = $scope.todayDate;
		document.getElementById('searchDrinkDate').value = $scope.todayDate;
		document.getElementById('searchEatDate').value = $scope.todayDate;
		document.getElementById('searchActivityDate').value = $scope.todayDate;
		document.getElementById('searchWeatherDate').value = $scope.todayDate;
		
		
		document.getElementById('searchSaltStartDate').value = $scope.addDate($scope.todayDate,-7);
		document.getElementById('searchSaltEndDate').value = $scope.todayDate;
		
	}
	
	$scope.searchById = function() {
		if($scope.userId === undefined ||$scope.userId === '') {
			alert("请输入用户ID");
			return;
		}
		//初始化
		$scope.dataInit();
		//获取用户基本信息表
		$scope.getUserInfo($scope.userId);
		//获取血压数据并渲染
		$scope.getBPData($scope.userId,$scope.todayDate);
		//获取饮食记录并渲染
		$scope.getFoodRecord($scope.userId,$scope.todayDate);
	    //获取情绪记录并渲染
		$scope.getMontion($scope.userId,$scope.todayDate);
		//获取症状记录并渲染
		$scope.getSymptom($scope.userId,$scope.todayDate);
		//获取饮品与吸烟记录
		$scope.getDrink($scope.userId,$scope.todayDate)
		//获取盐含量记录并渲染
		$scope.getSalt($scope.userId,$scope.addDate($scope.todayDate,-7),$scope.todayDate);
		//获取用餐时间记录
		$scope.getEatTimes($scope.userId,$scope.todayDate);
		//获取能量消耗记录
		$scope.getActivity($scope.userId,$scope.todayDate);
		//获取天气记录
		$scope.getWeather($scope.todayDate);
		
	}
	
	$scope.searchWeatherRecord = function() {
		$scope.weather = {};
		var searchDate = document.getElementById("searchWeatherDate").value;
		$scope.getWeather(searchDate);
	}
	
	$scope.searchBP = function() {
		if($scope.userId === undefined ||$scope.userId === '') {
			alert("请输入用户ID");
			return;
		}
		$scope.BPSYS = [];
		$scope.BPDIA = [];
		var searchDate = document.getElementById("searchBPDate").value;
		$scope.getBPData($scope.userId,searchDate);
		
		
	}
	
	$scope.searchActivity = function() {
		if($scope.userId === undefined ||$scope.userId === '') {
			alert("请输入用户ID");
			return;
		}
		$scope.activity = [];
		var searchDate = document.getElementById("searchActivityDate").value;
		$scope.getActivity($scope.userId,searchDate);
	}
	
	$scope.searchSalt = function() {
		if($scope.userId === undefined ||$scope.userId === '') {
			alert("请输入用户ID");
			return;
		}
		$scope.salt = [];
		var searchSaltStartDate = document.getElementById("searchSaltStartDate").value;
		var searchSaltEndDate = document.getElementById("searchSaltEndDate").value;
		$scope.getSalt($scope.userId,searchSaltStartDate,searchSaltEndDate);
	}
	
	$scope.searchFoodRecord = function() {
		if($scope.userId === undefined ||$scope.userId === '') {
			alert("请输入用户ID");
			return;
		}
		$scope.foodRecords = [];
		var searchDate = document.getElementById("searchFoodDate").value;
		$scope.getFoodRecord($scope.userId,searchDate);
	}
	
	$scope.searchMontion = function() {
		if($scope.userId === undefined ||$scope.userId === '') {
			alert("请输入用户ID");
			return;
		}
		$scope.montion = [];
		var searchDate = document.getElementById("searchMontionDate").value;
		$scope.getMontion($scope.userId,searchDate);
	}
	
	$scope.searchSymptom = function() {
		if($scope.userId === undefined ||$scope.userId === '') {
			alert("请输入用户ID");
			return;
		}
		$scope.symptom = [];
		var searchDate = document.getElementById("searchSymptomDate").value;
		$scope.getSymptom($scope.userId,searchDate);
	}
	
	$scope.searchDrink = function() {
		if($scope.userId === undefined ||$scope.userId === '') {
			alert("请输入用户ID");
			return;
		}
		$scope.drink = [];
		var searchDate = document.getElementById("searchDrinkDate").value;
		$scope.getDrink($scope.userId,searchDate);
	}
	
	$scope.searchEatTime = function() {
		if($scope.userId === undefined ||$scope.userId === '') {
			alert("请输入用户ID");
			return;
		}
		$scope.eatTimes = [];
		var searchDate = document.getElementById("searchEatDate").value;
		$scope.getEatTimes($scope.userId,searchDate);
	}
	
	$scope.mealTypes = ["未知","早餐","中餐","晚餐"];
	
	$scope.dataInit();
	
	
});