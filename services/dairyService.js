lxdApp.service('dairyService',['httpService','ServerIp',function(httpService,ServerIp){
	
	this.getDairyListByPage=function(scope,page){
		
		return httpService.get(scope,'http://'+ServerIp+'/H5me/webapi/controller/BaseController.php?c=Dairy&m=GetDairyByPage&p='+page);
	}
	
	
	this.getDairyDetailsById=function (scope ,id){
		
		return httpService.get(scope,'http://'+ServerIp+'/H5me/webapi/controller/BaseController.php?c=Dairy&m=GetDairyDetailsById&p='+id)
	}
	
	
	this.GetDairyComments=function (scope,id){
		
		return httpService.get(scope,'http://'+ServerIp+'/H5me/webapi/controller/BaseController.php?c=Dairy&m=GetDairyComments&p='+id)
	}
	
}])
