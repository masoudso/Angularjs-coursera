(function () {
  'use strict';
  angular.module('DIapp', [])
  .controller('myController', myController);

  myController.$inject = ['$scope' , '$filter'];
  function myController($scope, $filter){
  $scope.name = "masoud";

  $scope.upper = function(){
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}
})();
