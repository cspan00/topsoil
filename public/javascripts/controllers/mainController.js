
  app.controller('mainController', function($scope, $location, $auth) {
    $scope.login = function() {
      $auth.login($scope.user)
        .then(function() {
          console.log('You have successfully signed in!');
          $location.path('/');
        })
        .catch(function(error) {
          console.log(error.data.message, error.status);
        });
    };
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function(response) {
          console.log('You have successfully signed in with ' + provider + '!');
          console.log(response);
          $location.path('/');
        })
        .catch(function(error) {
          if (error.error) {
            // Popup error - invalid redirect_uri, pressed cancel button, etc.
            console.log(error.error);
          } else if (error.data) {
            // HTTP response error from server
            console.log(error.data.message, error.status);
          } else {
            console.log(error);
          }
        });
    };
  });















// app.controller('mainController', ['$scope', '$auth', '$location', function($scope, $auth, $location){
//   $scope.authenticate = function(provider) {
//       $auth.authenticate(provider)
//         .then(function() {
//           console.log('You have successfully signed in with ' + provider + '!');
//           $location.path('/');
//         })
//         .catch(function(error) {
//           if (error.error) {
//             // Popup error - invalid redirect_uri, pressed cancel button, etc.
//             alert(error.error);
//           } else if (error.data) {
//             // HTTP response error from server
//             alert(error.data.message, error.status);
//           } else {
//             alert(error);
//           }
//         });
//       };
// }]);
