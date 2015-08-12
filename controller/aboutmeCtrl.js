lxdApp.controller('aboutmeCtrl',['meInfoService',function($scope,meInfoService){
	
	meInfoService.aboutmeInfo().then(function(data){
		
		document.writeln(data);
		
	});
	
	document.writeln("hello");
		
}]);