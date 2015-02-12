(function(){
  'use strict';

  angular.module('app', ['ui.router', 'slider'])

  .controller('AppCtrl', ['$scope', '$state', 'Slides', function($scope, $state, Slides){
    $scope.current = Slides.getNumber($state.current);
    function changeSlide(nb){
      $scope.current = nb;
      $state.go(Slides.getSlide($scope.current));
    }
    changeSlide(0);

    $scope.nextSlide = function(){
      changeSlide($scope.current + 1);
    };

    $scope.previousSlide = function(){
      changeSlide($scope.current - 1);
    };
  }]);
})();
