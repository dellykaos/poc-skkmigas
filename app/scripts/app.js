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
    'datatables',
    'ngFileUpload'
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
      .when('/attachment', {
        templateUrl: 'views/attachment/index.html',
        controller: 'AttachmentCtrl',
        controllerAs: 'index'
      })
      .when('/attachment/upload', {
        templateUrl: 'views/attachment/upload.html',
        controller: 'AttachmentUploadCtrl',
        controllerAs: 'upload'
      })
      .when('/attachment/detail/:id', {
        templateUrl: 'views/attachment/detail.html',
        controller: 'AttachmentDetailCtrl',
        controllerAs: 'detail'
      })
      .when('/attachment/edit/:id', {
        templateUrl: 'views/attachment/edit.html',
        controller: 'AttachmentEditCtrl',
        controllerAs: 'edit'
      })
      .when('/attachment/delete/:id', {
        templateUrl: 'views/attachment/delete.html',
        controller: 'AttachmentDeleteCtrl',
        controllerAs: 'delete'
      })
      .when('/shipClass', {
        templateUrl: 'views/shipClass/index.html',
        controller: 'ShipClassCtrl',
        controllerAs: 'index'
      })
      .when('/shipClass/detail/:id', {
        templateUrl: 'views/shipClass/detail.html',
        controller: 'ShipClassDetailCtrl',
        controllerAs: 'detail'
      })
      .when('/shipClass/create', {
        templateUrl: 'views/shipClass/create.html',
        controller: 'ShipClassCreateCtrl',
        controllerAs: 'create'
      })
      .when('/shipClass/edit/:id', {
        templateUrl: 'views/shipClass/edit.html',
        controller: 'ShipClassEditCtrl',
        controllerAs: 'edit'
      })
      .when('/shipClass/delete/:id', {
        templateUrl: 'views/shipClass/delete.html',
        controller: 'ShipClassDeleteCtrl',
        controllerAs: 'delete'
      })
      .when('/ship', {
        templateUrl: 'views/ship/index.html',
        controller: 'ShipCtrl',
        controllerAs: 'index'
      })
      .when('/ship/detail/:id', {
        templateUrl: 'views/ship/detail.html',
        controller: 'ShipDetailCtrl',
        controllerAs: 'detail'
      })
      .when('/ship/create', {
        templateUrl: 'views/ship/create.html',
        controller: 'ShipCreateCtrl',
        controllerAs: 'create'
      })
      .when('/ship/edit/:id', {
        templateUrl: 'views/ship/edit.html',
        controller: 'ShipEditCtrl',
        controllerAs: 'edit'
      })
      .when('/ship/delete/:id', {
        templateUrl: 'views/ship/delete.html',
        controller: 'ShipDeleteCtrl',
        controllerAs: 'delete'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
