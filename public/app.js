'use strict';

/* App Module */

var moviesApp = angular.module('moviesApp', [
  'ngRoute',
  'movieControllers',
  'movieAnimations'
]);

moviesApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/movies', {
        templateUrl: './partials/list.html',
        controller: 'movieListController'
      }).
      when('/gallery', {
        templateUrl: './partials/gallery.html',
        controller: 'galleryController'
      }).
      when('/movies/:movieID', {
        templateUrl: './partials/details.html',
        controller: 'movieDetailController'
      }).
      otherwise({
        redirectTo: '/movies'
      });
  }]);