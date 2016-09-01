myApp.controller('SettingsController', ['$scope', '$http', function($scope, $http) {
  console.log('Settings controller running');
  $scope.message = "Settings Controller!";


  $scope.heroArray = [];
  $scope.heroInfo = {};

//============SUPER POWER SELECTOR=============

  $scope.powerSelection = {
    model: null,
    availableOptions: [
     {id: 'invisibility', name: 'Invisibility'},
     {id: 'flight', name: 'Flight'},
     {id: 'superSpeed', name: 'Super Speed'},
     {id: 'heatVision', name: 'Heat Vision'},
     {id: 'superStrength', name: 'Super Strength'},
     {id: 'acceleratedHealing', name: 'Accelerated Healing'},
     {id: 'powerBlast', name: 'Power Blast'},
     {id: 'animalAffinity', name: 'Animal Affinity'}
    ]
    };


//===============SUBMIT FUNCTION=================
    $scope.submitHero = function(){
    var hero = $scope.heroInfo;
    $http.post('/createHero', $scope.heroInfo)
      .then(function () {
        console.log('POST to /createHero from CONTROLLER', $scope.heroInfo, '/n');
      });
    };

//  here you will need to grab all of the input fields data via that ng-model that you set up
//  after that you will need a post request that will take that data and send it to your mongo db
// after that you will build a delete request also

// i think that's about it.


}]);
