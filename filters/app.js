(function () {
  'use strict';
  angular.module('filtApp', [])
  .controller('filtController', filtController)
  .filter('names', nameFilter)
  .filter('continent', contChangFilter);
filtController.$inject = ['$scope', '$filter', 'namesFilter'];

function filtController($scope, $filter, namesFilter){
  $scope.cost = 240;
  $scope.message = function(){
  var message = "You are not different from still water!"
  var uppmsg = $filter('uppercase')(message);
  return uppmsg;
  }


  $scope.saymessage = function (){
    var msg = "one of the best aircrafts you can use for intercontinental routes is Airbus-a330";
     return msg;
  }

  $scope.saySecMessage = function (){
    var msg = "one of the best aircrafts you can use for intercontinental routes is Airbus-a330";
     msg = namesFilter(msg);
     return msg;
  }
};

function nameFilter(){
  return function (input){
    input = input || "";
    input = input.replace("Airbus-a330" , "Boeing777");
    return input;
  };
};

function contChangFilter(){
  return function(input, target, replace){
    input = input || "";
    input = input.replace(target, replace);
    return input;
  }
};

})();
