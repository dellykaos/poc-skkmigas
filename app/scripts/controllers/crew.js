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
    vm.dtOptions = DTOptionsBuilder.fromSource('http://192.168.43.122:8080/crew/index')
        .withOption('serverSide', true)
        .withPaginationType('full_numbers');
    vm.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('name').withTitle('Name'),
        DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable()
          .renderWith(actionsHtml)
    ];

    function actionsHtml(data, type, full, meta) {
      var html ='<div class="">' +
                  '<a href="/#!/crew/detail/' + full.id + '" class="btn btn-default" title="Detail">' +
                    'Detail' +
                  '</a> ' +
                  '<a href="/#!/crew/edit/' + full.id + '" class="btn btn-primary" title="Edit">' +
                    'Edit' +
                  '</a> ' +
                  '<a href="/#!/crew/delete/' + full.id + '"  class="btn btn-danger" title="Delete">' +
                    'Delete' +
                  '</a>' +
                '</div>';
      return html;
    }

  })
  .controller('CrewDetailCtrl', function ($scope, $http, $routeParams) {
    $scope.model = {};
    $http.get("http://192.168.43.122:8080/crew/show?id="+$routeParams.id)
      .then(function(resp){
        $scope.model = resp.data;
      });
  })
  .controller('CrewCreateCtrl', function ($scope, $http, $window) {
    $scope.model = {};

    $scope.send = function(model){
      console.log(model);
      $http.post("http://192.168.43.122:8080/crew/create", model)
        .then(function(resp){
          $window.location.href = "/#!/crew";
        });
    }
  })
  .controller('CrewEditCtrl', function ($scope, $http, $routeParams, $window) {
    $scope.model = {};
    $http.get("http://192.168.43.122:8080/crew/show?id="+$routeParams.id)
      .then(function(resp){
        $scope.model = resp.data;
      });

    $scope.send = function(model){
      console.log(model);
      $http.post("http://192.168.43.122:8080/crew/update", model)
        .then(function(resp){
          $window.location.href = "/#!/crew/detail/" + model.id;
        });
    }
  })
  .controller('CrewDeleteCtrl', function ($scope, $http, $routeParams, $window) {
    $scope.model = {};
    $http.get("http://192.168.43.122:8080/crew/show?id="+$routeParams.id)
      .then(function(resp){
        $scope.model = resp.data;
      });

    $scope.send = function(id){
      console.log(id);
      $http.delete("http://192.168.43.122:8080/crew/delete?id="+id)
        .then(function(resp){
          $window.location.href = "/#!/crew";
        });
    }
  });