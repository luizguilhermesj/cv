'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cvApp
 */
angular.module('cvApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
