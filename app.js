'use strict';
var app = angular.module('apptieqviet',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainCtrl',
        controllerUrl: 'pages/mainCtrl.js'
      })
      .when('/about', {
        templateUrl: 'pages/about.html'
      })
      .when('/learn',{
          templateUrl:'pages/learn.html',
          controller:'learnCtrl',
          controllerUrl:'pages/learnCtrl.js'
        })
      .otherwise({
        redirectTo: '/'
      })
  });