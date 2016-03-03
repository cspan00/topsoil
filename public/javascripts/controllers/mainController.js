app.controller('mainController', ['$scope', '$auth', function($scope, $auth){
  $scope.authenticate = function(provider) {
   $auth.authenticate(provider);
 };
}]);
