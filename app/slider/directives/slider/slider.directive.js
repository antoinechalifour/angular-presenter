(function(){
  'use strict';

  angular.module('slider')

  .directive('slider', function(){
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        current: '=',
        total: '=',
        next: '&',
        previous: '&'
      },
      templateUrl: 'slider/directives/slider/slider.template.html',
      controller: 'SliderCtrl'
    };
  })

  .controller('SliderCtrl', ['$scope', function($scope){
    console.log('SliderCtrl');
    angular.element(document)
    .on('keydown', function(e){
      if(e.keyCode === 39) $scope.next();
      else if(e.keyCode === 37) $scope.previous();
    });
  }]);
})();
