(function () {
  'use strict';
  angular.module('filtApp', [])
  .controller('filtController', filtController);
filtController.$inject = ['$scope', '$filter'];

function filtController($scope, $filter){
  $scope.message = function(){
  var message = "You are not different from still water!"
  var uppmsg = $filter('uppercase')(message);
  return uppmsg;
  }
};

})();
