app.controller('profileController', function($scope, $location, $routeParams, users){

  var id = $routeParams.id
  users.getUserById(id).then(function(results){
    console.log(results);
    $scope.profileData = results;
  })

})
