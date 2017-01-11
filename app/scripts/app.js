'use strict';

/**
 * @ngdoc overview
 * @name pocApp
 * @description
 * # pocApp
 *
 * Main module of the application.
 */
angular
  .module('pocApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'datatables'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/crew', {
        templateUrl: 'views/crew/index.html',
        controller: 'CrewCtrl',
        controllerAs: 'index'
      })
      .when('/crew/create', {
        templateUrl: 'views/crew/create.html',
        controller: 'CrewCreateCtrl',
        controllerAs: 'create'
      })
      .when('/crew/edit/:id', {
        templateUrl: 'views/crew/edit.html',
        controller: 'CrewEditCtrl',
        controllerAs: 'edit'
      })
      .when('/crew/detail/:id', {
        templateUrl: 'views/crew/detail.html',
        controller: 'CrewDetailCtrl',
        controllerAs: 'detail'
      })
      .when('/crew/delete/:id', {
        templateUrl: 'views/crew/delete.html',
        controller: 'CrewDeleteCtrl',
        controllerAs: 'delete'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
