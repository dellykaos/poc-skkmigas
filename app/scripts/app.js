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
      .otherwise({
        redirectTo: '/'
      });
  });
