'use strict';

/**
 * @ngdoc function
 * @name pocApp.controller:ShipClassCtrl
 * @description
 * # ShipClassCtrl
 * Controller of the pocApp
 */
angular.module('pocApp')
  .controller('ShipClassCtrl', function (DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    vm.dtOptions = DTOptionsBuilder.fromSource('http://192.168.43.122:8080/shipClass/index')
        .withOption('serverSide', false)
        .withPaginationType('full_numbers');
    vm.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('name').withTitle('Name'),
        DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable()
          .renderWith(actionsHtml)
    ];

    function actionsHtml(data, type, full, meta) {
      var html ='<div class="">' +
                  '<a href="/#!/shipClass/detail/' + full.id + '" class="btn btn-default" title="Detail">' +
                    'Detail' +
                  '</a> ' +
                  '<a href="/#!/shipClass/edit/' + full.id + '" class="btn btn-primary" title="Edit">' +
                    'Edit' +
                  '</a> ' +
                  '<a href="/#!/shipClass/delete/' + full.id + '"  class="btn btn-danger" title="Delete">' +
                    'Delete' +
                  '</a>' +
                '</div>';
      return html;
    }

  })
  .controller('ShipClassDetailCtrl', function ($scope, $http, $routeParams) {
    $scope.model = {};
    $http.get("http://192.168.43.122:8080/shipClass/show/" + $routeParams.id)
      .then(function(resp){
        $scope.model = resp.data;
      });
  })
  .controller('ShipClassCreateCtrl', function ($scope, $http, $window) {
    $scope.model = {};

    $scope.send = function(model){
      console.log(model);
      $http.post('http://192.168.43.122:8080/shipClass/create', model)
        .then(function(resp){
          $window.location.href = "/#!/shipClass";
        });
    }
  })
  .controller('ShipClassEditCtrl', function ($scope, $http, $routeParams) {
    $scope.model = {};
    $http.get("/scripts/dummy/shipClassDetail.json")
      .then(function(resp){
        $scope.model = resp.data;
      });

    $scope.send = function(model){
      console.log(model);
      $http.put('url/' + $routeParams.id, model)
        .then(function(resp){
          console.log(resp);
        });
    }
  })
  .controller('ShipClassDeleteCtrl', function ($scope, $http, $routeParams, $window) {
    $scope.model = {};
    $http.get("http://192.168.43.122:8080/shipClass/show/" + $routeParams.id)
      .then(function(resp){
        $scope.model = resp.data;
      });

    $scope.send = function(id){
      $http.delete('http://192.168.43.122:8080/shipClass/delete?id=' + id)
        .then(function(resp){
          $window.location.href = "/#!/shipClass";
        });
    }
  });