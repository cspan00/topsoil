var app = angular.module('topsoil', ['ngRoute', 'satellizer']);


app.config(function ($routeProvider, $authProvider) {

  $authProvider.facebook({
      clientId: '449685485222786'
    });


  $routeProvider
  .when('/', {
    templateUrl: 'views/splash.html',
    controller: 'mainController'
  })
})
