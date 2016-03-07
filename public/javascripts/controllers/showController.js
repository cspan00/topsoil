app.controller('showController', function($scope, $location, $routeParams, users){
  var id = $routeParams.id

  users.getShowPost(id).then(function(results){
    console.log(results);
    $scope.showPost = results;
  })

})
