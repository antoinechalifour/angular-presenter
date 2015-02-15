(function(){
  'use strict'
  angular.module('app')

  .controller('ControllersCtrl', ['$scope', function($scope){
    $scope.theme = 'amber';

    $scope.getClass = function(){
      return 'slide-' + $scope.theme + '-primary';
    };

    $scope.changeTheme = function(color){
      $scope.theme = color;
    }
  }]);
})();
