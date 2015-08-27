lxdApp.controller('dairyCtrl',['$scope','dairyService',function($scope,dairyService){
	
	$scope.totalpage=0;
	$scope.curpage=1;
	
	$scope.pageSelect=function(val){	
		$scope.curpage=val;
		//最好不要在控制器里面操作dom
		$("body").animate({scrollTop:0}, 200);
		getPage($scope.curpage);
		
	}
	
	$scope.Ilikeit=function(id){
		
		alert("我觉得"+id+"很赞");
	}
	
	function createPageNumBtn(){
		var li=[];
		var startpage=1;
		
		if($scope.curpage>5)
		{	
			startpage=$scope.curpage-2;
			var endpage=startpage+8;
		}else{
			startpage=1;
			endpage=8;
		}
		endpage=$scope.totalpage>endpage?endpage:$scope.totalpage;
		for(var i=startpage;i<=endpage;i++){
			li.push(i);
		}
		$scope.pageList=li;
	}
	
	function getPage(page){
	    dairyService.getDairyListByPage($scope,page).then(function(data){  
	    $scope.totalpage=data.pagetotal;
	    $scope.dairyData=data.data;
	    createPageNumBtn();
	    if(data.pagetotal==0)
	    	return ;
		});		
	}	
		
	getPage(1);
	
	//document.writeln('ok');	
}]);
