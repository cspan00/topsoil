app.service("users", function($http){

this.getUserData = function(){

  var token = localStorage.getItem('satellizer_token')
  var data = JSON.stringify({token : token})
  $http.post('user', data).then(function(response){
    console.log('verified user is:');
    console.log(response.data);
    
  })
}














})
