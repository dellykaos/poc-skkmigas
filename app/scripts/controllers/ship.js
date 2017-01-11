'use strict';

/**
 * @ngdoc function
 * @name pocApp.controller:ShipCtrl
 * @description
 * # ShipCtrl
 * Controller of the pocApp
 */
angular.module('pocApp')
  .controller('ShipCtrl', function (DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    vm.dtOptions = DTOptionsBuilder.fromSource('/scripts/dummy/ship.json')
        .withOption('serverSide', false)
        .withPaginationType('full_numbers');
    vm.dtColumns = [
        DTColumnBuilder.newColumn('Name').withTitle('Name'),
        DTColumnBuilder.newColumn('Class.Name').withTitle('Type'),
        DTColumnBuilder.newColumn('DockingNumber').withTitle('Docking No'),
        DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable()
          .renderWith(actionsHtml)
    ];

    function actionsHtml(data, type, full, meta) {
      var html ='<div class="">' +
                  '<a href="/#!/ship/detail/' + full.Name + '" class="btn btn-default" title="Detail">' +
                    'Detail' +
                  '</a> ' +
                  '<a href="/#!/ship/edit/' + full.Name + '" class="btn btn-primary" title="Edit">' +
                    'Edit' +
                  '</a> ' +
                  '<a href="/#!/ship/delete/' + full.Name + '"  class="btn btn-danger" title="Delete">' +
                    'Delete' +
                  '</a>' +
                '</div>';
      return html;
    }

  })
  .controller('ShipDetailCtrl', function ($scope, $http, $routeParams) {
    $scope.model = {};
    $http.get("/scripts/dummy/shipDetail.json")
      .then(function(resp){
        $scope.model = resp.data;
      });
  })
  .controller('ShipCreateCtrl', function ($scope, $http) {
    $scope.model = {};

    $scope.send = function(model){
      console.log(model);
      $http.post('url', model)
        .then(function(resp){
          console.log(resp);
        });
    }
  })
  .controller('ShipEditCtrl', function ($scope, $http, $routeParams) {
    $scope.model = {};
    $http.get("/scripts/dummy/shipDetail.json")
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
  .controller('ShipDeleteCtrl', function ($scope, $http, $routeParams) {
    $scope.model = {};
    $http.get("/scripts/dummy/shipDetail.json")
      .then(function(resp){
        $scope.model = resp.data;
      });

    $scope.delete = function(id){
      $http.delete('url/' + id)
        .then(function(resp){
          console.log(resp);
        });
    }
  });