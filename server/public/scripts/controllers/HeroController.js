myApp.controller('HeroController', ['$scope', '$http', function($scope, $http) {
  console.log('hero controller running');
  $scope.message = "Hero Controller!";

  getHeros();


  function getHeros(){
  $http.get('/retrieveHero').then(function(response) {
      console.log('GET /retrieveHero', response.data);

      var heroArray = response.data;

      $scope.heros = heroArray;
    });
};

$scope.deleteHero = function(id){
  $http.delete('/deleteHero/' + id)
    .then(function(){
      console.log('DELETE /deleteHero/', id);
      getHeros();
    });
};



  // once the DB is populated we will need a GET here
  //the get will display all of our heros
  //check out your pet finder app for an example


}]);
