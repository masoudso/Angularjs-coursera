(function () {
  'use strict';

  angular.module('msgapp', [])
  .controller('myController', myController);

  myController.$inject = ['$scope'];

  function myController($scope) {
    $scope.name = "Masoud";
    $scope.ayandeh = function(){
      return "Life will always be beautiful."
    };
    $scope.place = "museum";
    $scope.changePic = function(){
      if ($scope.place == "tower")
      {
      $scope.place = "museum";
      }
      else {
        $scope.place = "tower";
      }
    };
  }

})();
