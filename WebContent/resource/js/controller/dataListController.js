myApp.controller("dataListController",function($scope,dataListService,context) {
	$scope.userList = [];
	
	
	$scope.getUserList = function() {
		var promise = dataListService.getUserList();
	    promise.success(function(data,status,config,headers) {
			 if(data.code === 0) {
				 $scope.userList = data.data;
				 
				 for (var i = 0; i < $scope.userList.length; i++) {
					 var user = $scope.userList[i];
					 var tbody = '<tr class="text-c">' +
							         '<td>' + user.id + '</td>' +
							         '<td>' + user.code + '</td>' +
							         '<td>' + user.age + '</td>' +
							         '<td>' + user.height + '</td>' +
							         '<td>' + user.weight + '</td>' +
//							         '<td class="f-14 td-manage"><a style="text-decoration:none" class="ml-5" onClick="updateUser(' + user.id + ')"  href="javascript:;" title="修改"><i class="Hui-iconfont">&#xe6df;</i></a> <a style="text-decoration:none" class="ml-5" onClick="delUser(' + user.id + ')" href="javascript:;" title="删除"><i class="Hui-iconfont">&#xe6e2;</i></a></td>' + 
							         '<td class="f-14 td-manage"><a style="text-decoration:none" class="ml-5" onClick="updateUser(\''+ context + '\',' + user.id + ')"  href="javascript:;" title="修改"><i class="Hui-iconfont">&#xe6df;</i></a></td>' +
								
							      '</tr>';
					 $(".table-sort     tbody").append(tbody);
				 }
				 
				
				 $scope.dataTable();
			 }else {
				 $scope.logout();
			 }
			
	    });
		
		promise.error(function() {
			alert("服务器错误");
			$scope.logout();
	    });
	}
	
	
	$scope.logout = function() {
		//clear buffer data
		sessionStorage.clear();
		top.location =  context;
	}
	
	$scope.dataTable = function() {
		$('.table-sort').dataTable({
			"aaSorting": [[ 0, "asc" ]],//默认第几个排序
			//"bStateSave": true,//状态保存
			"aoColumnDefs": [
			  //{"bVisible": false, "aTargets": [ 3 ]} //控制列的隐藏显示
			  {"orderable":false,"aTargets":[5]}// 制定列不参与排序
			],
			"bLengthChange": false,
			"iDisplayLength": 10
		});

	}
	
	$scope.getUserList();
	
});

function delUser(id) {
	layer.confirm('确认要删除吗？' + id,function(index){
		layer.close(index);
	});
}
function updateUser(context,id) {
	window.location.href = context  + "/data_update?userId=" + id;
}
