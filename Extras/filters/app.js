(function () {
  'use strict';
  angular.module('DIapp', [])
  .controller('myController', ['$scope', '$filter',
              function($scope, $filter){
  $scope.name = "masoud";
  $scope.upper = function(){
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}]);
})();
