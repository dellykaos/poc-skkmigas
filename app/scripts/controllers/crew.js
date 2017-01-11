'use strict';

/**
 * @ngdoc function
 * @name pocApp.controller:CrewCtrl
 * @description
 * # CrewCtrl
 * Controller of the pocApp
 */
angular.module('pocApp')
  .controller('CrewCtrl', function ($scope, $http, DTOptionsBuilder, DTColumnBuilder) {
    // $scope.crews = {};
    // $http.get("/scripts/dummy/crew.json")
    //   .then(function(resp){
    //     $scope.crews = resp.data;
    //   });
  }).controller('CrewAjaxCtrl', function (DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    vm.dtOptions = DTOptionsBuilder.fromSource('/scripts/dummy/crew.json')
        .withPaginationType('full_numbers');
    vm.dtColumns = [
        DTColumnBuilder.newColumn('Id').withTitle('ID'),
        DTColumnBuilder.newColumn('Name').withTitle('Name')
    ];
  })
  .controller('CrewDetailCtrl', function ($scope) {
  	$scope.test = "testing";
  })
  .controller('CrewCreateCtrl', function ($scope) {
  	$scope.test = "testing";
  })
  .controller('CrewEditCtrl', function ($scope) {
  	$scope.test = "testing";
  });