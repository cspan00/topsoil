var app = angular.module('topsoil', ['ngRoute', 'satellizer']);

// production clientId: 1668067083447238
// dev clientId: 449685485222786
app.config(function ($routeProvider, $authProvider) {

  $authProvider.facebook({
      clientId: '449685485222786',
      scope: ['email'],
      scopeDelimiter: ',',
      profileFields: ['name', 'id', 'picture.type(large)', 'emails']
    });


  $routeProvider
  .when('/', {
    templateUrl: 'views/splash.html',
    controller: 'mainController'
  })
  .when('/profile',{
    templateUrl: 'views/login.html',
    controller: 'userController'
  })
  .when('/logout',{
    templateUrl: 'views/splash.html',
    controller: 'mainController'
  })
  .when('/new',{
    templateUrl: 'views/new.html',
    controller: 'userController'
  })
  .when('/show/:id',{
    templateUrl: 'views/show.html',
    controller: 'showController'
  })
  .when('/profile/:id',{
    templateUrl: 'views/profile.html',
    controller: 'profileController'
  })
})
