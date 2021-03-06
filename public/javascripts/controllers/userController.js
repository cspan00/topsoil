app.controller('userController', function($scope, $location, $auth, $http, users){


  $scope.getPostId = users.getPostId;
  $scope.picture_url = "images/heartshape.png"
  $scope.want = "true";
  $scope.state = "AK";

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
      post.address = $scope.street + " " + $scope.city + " " + $scope.state + " " + $scope.zipcode
      post.want = $scope.want
      post.description = $scope.description
      post.picture_url = $scope.picture_url


      $http.post('post', post).then(function(response){
        console.log(response);
        window.location.href = '/#/profile';
      })

    })

  }
});
