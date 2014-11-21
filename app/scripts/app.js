'use strict';

/**
 * @ngdoc overview
 * @name cvApp
 * @description
 * # cvApp
 *
 * Main module of the application.
 */
angular
  .module('cvApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/passions', {
        templateUrl: 'views/passions.html',
        controller: 'PassionsController'
      })
      .when('/find-me', {
        templateUrl: 'views/find-me.html',
        controller: 'FindMeController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
