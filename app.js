(function () {
  'use strict';

  angular.module('myapp', [])
  .controller('CalcController', function ($scope) {
    $scope.name = "Masoud";
    $scope.totalValue = 0;
    $scope.countItsValue = function(){
      var countValue = countLetterValue($scope.name);
      $scope.totalValue = countValue;
    };

  });
  function countLetterValue(string){
    var totalLetterValue = 0;
    for (var i=0; i<string.length; i++){
      totalLetterValue += string.charCodeAt(i);
    }
    return totalLetterValue;
  };

})();
