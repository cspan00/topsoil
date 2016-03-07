app.controller('userController', function($scope, $location, $auth, $http, users){

  $scope.logout = function(){
    $auth.logout()
    console.log("successfully logged out!");
  }
  users.getUserData().then(function(result){
    $scope.user = result;
  })

  users.getPosts().then(function(result){
    $scope.posts = result;
  })

  $scope.submitPost = function(){
    users.getUserData().then(function(result){
      var post = {};
      post.facebook_id = result.facebook_id;
      post.author = result.name
      post.title = $scope.title
      post.address = $scope.address
      post.want = $scope.want
      post.description = $scope.description
      $http.post('post', post).then(function(response){
        console.log(response);
      })

    })

  }



});
