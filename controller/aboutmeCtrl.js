lxdApp.controller('aboutmeCtrl',['$scope','meInfoService','httpService','appColors',function($scope,meInfoService,httpService,appColors){
	
	meInfoService.meInfo().then(function(data){
		console.log(data);
		var infocontent=document.createElement("ul");
		
		angular.forEach(data,function(value,key){
			var listelement=document.createElement("li");
			listelement.className="infolist";
			listelement.style.background=appColors[Math.floor(Math.random()*appColors.length)];
			listelement.style.color="#272822";
			listelement.innerHTML="<span>"+
							value.title
						+"</span><span>"+
							value.content
						+"</span>";
			infocontent.appendChild(listelement);			
		});
		
		$("#myinfo").append(infocontent);
	})
	
	//document.writeln("hello");
		
}]);