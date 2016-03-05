app.controller('userController', function($scope, $location, $auth){
  $scope.logout = function(){
    $auth.logout()
    console.log("successfully logged out!");
  }
});
