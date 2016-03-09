app.controller('showController', function($scope, $location, $routeParams, users){

  var id = $routeParams.id
  users.getShowPost(id).then(function(results){
    console.log(results);
    $scope.showPost = results;
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(results.lat, results.lng),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }
    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var infoWindow = new google.maps.InfoWindow();


      $scope.marker = new google.maps.Marker({
          map: $scope.map,
          position: new google.maps.LatLng(results.lat, results.lng),
          title: results.title
      })

  })


})
