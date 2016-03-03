var app = angular.module('topsoil', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/splash.html',
    controller: 'mainController'
  })
})
