
lxdApp.service('meInfoService',['httpService',function(httpService){
	
	this.meInfo=function(){
		
		return httpService.jsonp('aboutme.json');
	}
	
}])












