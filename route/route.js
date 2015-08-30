lxdApp.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.when('/home',{
			templateUrl:'lixiaodong.html',
			controller:'lixiaodongCtrl'
		})
		.when('/dairy',{
			templateUrl:'dairy.html',
			controller:'dairyCtrl'
		})
		.when('/aboutme',{
			templateUrl:'aboutme.html',
			controller:'aboutmeCtrl'
		})
		.when('/dairydetails/:id',{
			templateUrl:'dairydetails.html',
			controller:'dairydetailsCtrl'
		})
		.when('/',{
			template:" hello world",
			controller:'lixiaodongCtrl'
		})
		//.otherwise({redirectTo:'/'});
	
	}])