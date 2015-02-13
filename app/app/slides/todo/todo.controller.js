(function(){
  'use strict';

  angular.module('app')

  .controller('TodoCtrl', ['$scope', function($scope){
    $scope.todo = ['animations', 'default theme', 'remote controller', 'move stuff to where they belong'];
  }]);
})();
