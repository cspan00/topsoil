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
      post.picture_url = $scope.picture_url
      post.want = $scope.want
      post.description = $scope.description


      $http.post('post', post).then(function(response){
        console.log(response);
        window.location.href = '/#/profile';
      })

    })

  }

  // $scope.selectedIcon = Globe;
  // $scope.icons = [
  //   {"value":"Gear","label":"<i class=\"fa fa-gear\"></i> Gear"},
  //   {"value":"Globe","label":"<i class=\"fa fa-globe\"></i> Globe"},
  //   {"value":"Heart","label":"<i class=\"fa fa-heart\"></i> Heart"},
  //   {"value":"Camera","label":"<i class=\"fa fa-camera\"></i> Camera"}
  // ];



});
