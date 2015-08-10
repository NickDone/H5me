lxdApp.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.when('/home',{
			templateUrl:'lixiaodong.html',
			controller:'lixiaodongCtrl'
		})
		.when('/aboutme',{
			templateUrl:'aboutme.html',
			controller:'aboutmeCtrl'
		})
		.when('/',{
			template:" hello world",
			controller:'lixiaodongCtrl'
		})
		//.otherwise({redirectTo:'/'});
	
	}])