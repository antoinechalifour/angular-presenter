(function(){
  'use strict';

  angular.module('app')

  .controller('TodoCtrl', ['$scope', function($scope){
    $scope.todo = ['animations', 'better theme', 'improve remote controller'];
  }]);
})();
