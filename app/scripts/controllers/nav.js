'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:NavController
 * @description
 * # NavController
 * Controller of the cvApp
 */
angular.module('cvApp')
  .controller('NavController', function ($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
    $scope.navbar = [
        {'name':'Abáute', 'route': '#/'},   
        {'name':'Péxions', 'route': '#/passions'},
        {'name':'Faindi mi', 'route': '#/find-me'}
    ];
    $scope.isActive = function (viewLocation) {
        return viewLocation === '#'+$location.path();
    };
  });