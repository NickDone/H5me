lxdApp.controller('dairydetailsCtrl',['$scope','dairyService','$routeParams','$location','$anchorScroll',function($scope,dairyService, $routeParams,$location,$anchorScroll){
	
	//document.write("test");
	$scope.mycomment="";
	var id = $routeParams.id;
	
	
	
	function getDairy(id){
		
		dairyService.getDairyDetailsById($scope,id).then(function(data){
			$scope.dairyDetails=data[0];
			$scope.data=data;
		});
		
		
		dairyService.GetDairyComments($scope,id).then(function (data){
			$scope.dairyComment=data;
		});
		
	}
	
	$scope.goto = function (id) {
         $location.hash(id);
         $anchorScroll();
    }
	
	$scope.Ilikeit=function(id){
		//alert("我觉得"+id+"很赞");
		$scope.dairyDetails.Likers=parseInt($scope.dairyDetails.Likers)+1;
		dairyService.ILike($scope,id).then(function (data){
			console.log(data);
		});
	}
	
	
	$scope.NextDairy=function (){
		if($scope.data.next!=false)
			location.href='#/dairydetails/'+$scope.data.next.id;
		else
			alert("当前已经是最后一篇");
	}
	
	$scope.PreviousDairy=function (){
		if($scope.data.pre!=false)
			location.href='#/dairydetails/'+$scope.data.pre.id;
		else
			alert("已经到第一篇");
	}
	
	$scope.share=function (){
		
		alert("现在还不能分享");
	}
	
	$scope.copyurl=function(){
		
		//alert(window.location.href);
		if(window.clipboardData){
			window.clipboardData.setData('Text',window.location.href);
			alert('已经复制到剪切板');
		}else
		{
			alert('复制地址失败');
		}
		
	}
	
	$scope.reply=function (comments,parentcomment){
		var name=prompt("我如何称呼您","Marker");
		name=name.substring(0,7);
		
		var rpinfo={"content":comments,"parentid":0,"replyid":parentcomment.id,"time":"","nicky":name};
		parentcomment.reply.push(rpinfo);
		
		dairyService.Reply($scope,rpinfo).then(function (re){
			
		});
	}
	
	$scope.comment=function (comment){
		//alert(comment+$scope.dairyDetails.id);
		var name=prompt("我如何称呼您-最多7字","Marker");
			name=name.substring(0,7);
		var rpinfo={"content":comment,"parentid":$scope.dairyDetails.id,"replyid":0,"time":"","nicky":name};
		
		dairyService.Reply($scope,rpinfo).then(function (re){
			rpinfo.reply=[];
			rpinfo.id=re.id;
			$scope.dairyComment.push(rpinfo);		
		});
	}
	
	getDairy(id);
	
	
}]);