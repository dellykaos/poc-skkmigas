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
    vm.dtOptions = DTOptionsBuilder.fromSource('/scripts/dummy/shipClass.json')
        .withOption('serverSide', false)
        .withPaginationType('full_numbers');
    vm.dtColumns = [
        DTColumnBuilder.newColumn('Id').withTitle('ID'),
        DTColumnBuilder.newColumn('Name').withTitle('Name'),
        DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable()
          .renderWith(actionsHtml)
    ];

    function actionsHtml(data, type, full, meta) {
      var html ='<div class="">' +
                  '<a href="/#!/shipClass/detail/' + full.Id + '" class="btn btn-default" title="Detail">' +
                    'Detail' +
                  '</a> ' +
                  '<a href="/#!/shipClass/edit/' + full.Id + '" class="btn btn-primary" title="Edit">' +
                    'Edit' +
                  '</a> ' +
                  '<a href="/#!/shipClass/delete/' + full.Id + '"  class="btn btn-danger" title="Delete">' +
                    'Delete' +
                  '</a>' +
                '</div>';
      return html;
    }

  })
  .controller('ShipClassDetailCtrl', function ($scope, $http, $routeParams) {
    $scope.model = {};
    $http.get("/scripts/dummy/shipClassDetail.json")
      .then(function(resp){
        $scope.model = resp.data;
      });
  })
  .controller('ShipClassCreateCtrl', function ($scope, $http) {
    $scope.model = {};

    $scope.send = function(model){
      console.log(model);
      $http.post('url', model)
        .then(function(resp){
          console.log(resp);
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
  .controller('ShipClassDeleteCtrl', function ($scope, $http, $routeParams) {
    $scope.model = {};
    $http.get("/scripts/dummy/shipClassDetail.json")
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