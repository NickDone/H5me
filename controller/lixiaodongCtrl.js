var lxdApp=angular.module('lxdApp',['ngRoute']);

lxdApp.controller('lixiaodongCtrl',['$scope','$location',function($scope,$location){
	//	document.writeln("hello");

    var menu=["dairy","","","aboutme"]
    $scope.CurIndex=-1;

    $scope.select=function(idx){
        $scope.CurIndex=idx;
        $location.path('/'+menu[$scope.CurIndex]);
    }

}]);

