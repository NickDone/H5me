function checkAccess(status)
{
		if(status == 401 ||  status == 403 )
		{
			if(status == 401)
			{
				
			}
			$location.path("/index");
		}
}

lxdApp.service('httpService',['$http','$q',function($http,$q){
	
	this.get=function(scope,url){
		var defferd=$q.defer();
		$http.get(url).success(
			function(response,status){
				checkAccess(status);
				defferd.resolve(response);
			}
		).error(function(response,status){
				checkAccess(status);
				defferd.resolve('error!');
		});
		return defferd.promise;
	}
	
	this.post=function(scope,url,postdata){
		var defferd=$q.defer();
		$http.post(url,postdata).success(
			function(response,status){
				checkAccess(status);
				defferd.resolve(response);
			}
		).error(function(response,status){
				checkAccess(status);
				defferd.resolve(response);
			
		});
		return deffered.promise;
	}
	
	this.put=function(scope,url,postdata){
		var defferd=$q.defer();
		$http.put(url,postdata).success(
			function(response,status){
				checkAccess(status);
				defferd.resolve(response);
			}
		).error(function(response,status){
				checkAccess(status);
				defferd.resolve(response);
			
		});
		return deffered.promise;
	}
	
	this.delete=function(scope,url){
		var defferd=$q.defer();
		$http['delete'](url).success(function(response,status){
			checkAccess(status);
			defferd.resolve(response);
		}).error(function(response,status){
			checkAccess(status);
			defferd.resolve('error!');
		});
		
		return deferred.promise;	
	}
	
	this.jsonp = function(scope, url){
		var defferd = $q.defer();
		url += '?format=jsonp&callback=JSON_CALLBACK';
		$http.get(url).success(function(response){
			
			defferd.resolve(response);
		}).error(function(response){
			
			defferd.resolve('error!');
		});
		return defferd.promise;
	};
	
}])












