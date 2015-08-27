lxdApp.controller('dairydetailsCtrl',['$scope','dairyService',function($scope,dairyService){
	
	//document.write("test");
	$scope.mycomment="";
	function getDairy(id){
		
		dairyService.getDairyDetailsById($scope,id).then(function(data){
			$scope.dairyDetails=data[0];
		});
		
		
		dairyService.GetDairyComments($scope,id).then(function (data){
			$scope.dairyComment=data;
		});
		
	}
	
	getDairy(1);
	
	
}]);