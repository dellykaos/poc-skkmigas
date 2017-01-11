'use strict';

/**
 * @ngdoc function
 * @name pocApp.controller:CrewCtrl
 * @description
 * # CrewCtrl
 * Controller of the pocApp
 */
angular.module('pocApp')
  .controller('CrewCtrl', function (DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    vm.dtOptions = DTOptionsBuilder.fromSource('/scripts/dummy/crew.json')
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
                  '<a href="/#!/crew/detail/' + full.Id + '" class="btn btn-default" title="Detail">' +
                    'Detail' +
                  '</a> ' +
                  '<a href="/#!/crew/edit/' + full.Id + '" class="btn btn-primary" title="Edit">' +
                    'Edit' +
                  '</a> ' +
                  '<a href="/#!/crew/delete/' + full.Id + '"  class="btn btn-danger" title="Delete">' +
                    'Delete' +
                  '</a>' +
                '</div>';
      return html;
    }

  })
  .controller('CrewDetailCtrl', function ($scope, $http, $routeParams) {
    $scope.model = {};
    $http.get("/scripts/dummy/crewdetail.json")
      .then(function(resp){
        $scope.model = resp.data;
      });
  })
  .controller('CrewCreateCtrl', function ($scope, $http) {
    $scope.model = {};

    $scope.send = function(model){
      console.log(model);
      $http.post('url', model)
        .then(function(resp){
          console.log(resp);
        });
    }
  })
  .controller('CrewEditCtrl', function ($scope, $http, $routeParams) {
    $scope.model = {};
    $http.get("/scripts/dummy/crewdetail.json")
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
  .controller('CrewDeleteCtrl', function ($scope, $http, $routeParams) {
    $scope.model = {};
    $http.get("/scripts/dummy/crewdetail.json")
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