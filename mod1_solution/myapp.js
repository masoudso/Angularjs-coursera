(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
      $scope.placeholder = "";
      $scope.ifTooMuch = function(){
        var separated = $scope.placeholder.split(',');
        if (separated.length == 1){
        $scope.message = "Please enter data first";
        }
        else if (separated.length <= 3) {
          $scope.message = "Enjoy!"
        }
        else {
          $scope.message = "Too much!"
        }
        
      }
    }

})();
