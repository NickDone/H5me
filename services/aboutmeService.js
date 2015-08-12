
lxdApp.service('meInfoService',['httpService',function(httpService){
	
	this.meInfo=function(scope){
		
		return httpService.get(scope,'http://127.0.0.1/H5me/ServerServices/aboutme.php');
	}
	
}])












