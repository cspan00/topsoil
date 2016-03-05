app.controller('userController', function($scope, $location, $auth, users){
  $scope.logout = function(){
    $auth.logout()
    console.log("successfully logged out!");
  }
  $scope.test = users.getUserData
});
