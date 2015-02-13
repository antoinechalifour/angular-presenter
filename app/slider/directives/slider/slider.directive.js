(function(){
  'use strict';

  angular.module('slider')

  .directive('slider', function(){
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      templateUrl: 'slider/directives/slider/slider.template.html',
      controller: 'SliderCtrl'
    };
  })

  .controller('SliderCtrl', ['$scope', 'SlideManager', function($scope, SlideManager){
    var current = 0;

    function next(){
      current = SlideManager.next();
    }

    function previous(){
      current = SlideManager.previous();
    }

    angular.element(document).on('keydown', function(e){
      if(e.keyCode === 39) next();
      else if(e.keyCode === 37) previous();
    });

    $scope.getProgress = function(){
      var total = SlideManager.getProgress();
      return { width: total + '%' };
    };
  }]);
})();
