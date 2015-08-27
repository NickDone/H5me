lxdApp.controller('aboutmeCtrl',['$scope','meInfoService','httpService','appColors',function($scope,meInfoService,httpService,appColors){
	
	
	
	meInfoService.meInfo().then(function(data){
		
		$scope.aboutmeInfo=data;
		
//		var infocontent=document.createElement("ul");	
//		angular.forEach(data,function(value,key){
//			var listelement=document.createElement("li");
//			listelement.className="infolist";
//			listelement.style.background=appColors[Math.floor(Math.random()*appColors.length)];
//			listelement.style.color="#272822";
//			listelement.innerHTML="<span>"+
//							key
//						+"</span><span>"+
//							value
//						+"</span>";
//			infocontent.appendChild(listelement);			
//		});
//		
//		$("#myinfo").append(infocontent);
	})
	
	//document.writeln("hello");
		
}]);