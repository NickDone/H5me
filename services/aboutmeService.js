
lxdApp.service('meInfoService',['httpService','ServerIp',function(httpService,ServerIp){
	
	this.meInfo=function(scope){
		
		return httpService.get(scope,'http://'+ServerIp+'/H5me/webapi/controller/BaseController.php?c=Aboutme&m=MyInfo&p=0');
	
	   //return httpService.get(scope,'http://'+ServerIp+'/H5me/webapi/controller/test.php');
	}
	
}])












